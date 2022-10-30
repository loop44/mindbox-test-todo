import ArrowDown from './assets/arrow-down.svg';
import Marker from './assets/marker.svg';
import MarkerDone from './assets/marker-done.svg';
import { Form, Todo, TodoInner, TodoPanel, TodoWrapper } from './Todo.elements';

const DEFAULT_TODO_LIST = [
  { id: 1, text: 'Тестовое задание', done: false },
  { id: 2, text: 'Прекрасный код', done: true },
  { id: 3, text: 'Покрытие тестами', done: false }
];

const App = () => (
  <TodoWrapper>
    <h1>todos</h1>
    <TodoInner>
      <Form>
        <input type="image" src={ArrowDown} alt="" />
        <input type="text" placeholder="What needs to be done?" />
      </Form>
      <div>
        {DEFAULT_TODO_LIST.map(({ id, text, done }) => (
          <Todo key={id} done={done}>
            {done ? (
              <input type="image" src={MarkerDone} alt="" />
            ) : (
              <input type="image" src={Marker} alt="" />
            )}
            <span>{text}</span>
          </Todo>
        ))}
      </div>
      <TodoPanel>
        <p>2 items left</p>
        <div className="todoTypes">
          <button className="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear completed</button>
      </TodoPanel>
    </TodoInner>
  </TodoWrapper>
);

export default App;
