import React, { useState } from 'react';
import { v4 } from 'uuid';

import ArrowDown from './assets/arrow-down.svg';
import Marker from './assets/marker.svg';
import MarkerDone from './assets/marker-done.svg';
import { FilterMapType, TodoItem } from './types/types';
import { Form, Task, TodoInner, TodoPanel, TodoWrapper } from './Todo.elements';

const DEFAULT_TODO_LIST: TodoItem[] = [
  { id: v4(), text: 'Тестовое задание', done: false },
  { id: v4(), text: 'Прекрасный код', done: true },
  { id: v4(), text: 'Покрытие тестами', done: false }
];

const FILTER_MAP: FilterMapType = {
  All: () => true,
  Active: (todo: TodoItem) => !todo.done,
  Completed: (todo: TodoItem) => todo.done
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>(DEFAULT_TODO_LIST);
  const [todoText, setTodoText] = useState<string>('');
  const [currentFilter, setCurrentFilter] = useState<string>(FILTER_NAMES[0]);

  const filterBy = FILTER_MAP[currentFilter as keyof FilterMapType];
  const filtered = todos.filter(filterBy);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText) {
      return;
    }
    setTodos([
      {
        id: v4(),
        text: todoText,
        done: false
      },
      ...todos
    ]);
    setTodoText('');
  };

  const checkTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  // To delete completed tasks, we write only active tasks to the state
  const clearCompleted = () => {
    setTodos(todos.filter(FILTER_MAP[FILTER_NAMES[1] as keyof FilterMapType]));
  };

  // Array with active todos, used to determine the number of active tasks
  const itemsLeft = todos.filter(FILTER_MAP[FILTER_NAMES[1] as keyof FilterMapType]);

  return (
    <TodoWrapper>
      <h1>todos</h1>
      <TodoInner>
        <Form onSubmit={addTodo}>
          <input type="image" src={ArrowDown} alt="Add todo" onClick={addTodo} />
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="What needs to be done?"
            data-testid="task-input"
          />
        </Form>
        <div>
          {filtered.map(({ id, text, done }) => (
            <Task key={id} done={done}>
              {done ? (
                <input type="image" src={MarkerDone} alt="" onClick={() => checkTodo(id)} />
              ) : (
                <input type="image" src={Marker} alt="" onClick={() => checkTodo(id)} />
              )}
              <span>{text}</span>
            </Task>
          ))}
        </div>
        <TodoPanel>
          <p>{itemsLeft.length} items left</p>
          <div className="todoTypes">
            {FILTER_NAMES.map((name, index) => (
              <button
                key={index}
                className={name === currentFilter ? 'active' : ''}
                onClick={() => setCurrentFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <button onClick={clearCompleted}>Clear completed</button>
        </TodoPanel>
      </TodoInner>
    </TodoWrapper>
  );
};

export default Todo;
