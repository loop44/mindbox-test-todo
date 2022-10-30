import { describe, expect, it } from 'vitest';

import { fireEvent, render, screen } from './utils/test-utils';
import Todo from './Todo';

describe('Todo test', () => {
  it('the title is visible', () => {
    render(<Todo />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });

  it('todo snapshot', () => {
    const todo = render(<Todo />);

    expect(todo).toMatchSnapshot();
  });

  it('text types in input', () => {
    render(<Todo />);

    fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'Test' } });

    expect(screen.getByTestId('task-input')).toHaveValue('Test');
  });

  it('task adds to list', () => {
    render(<Todo />);

    fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'Test' } });
    fireEvent.click(screen.getByAltText('Add todo'));

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('completed tasks removes from list', () => {
    render(<Todo />);

    fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'Test' } });
    fireEvent.click(screen.getByAltText('Add todo'));

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Прекрасный код')).toBeInTheDocument();

    const trigger = screen.getByText('Test').previousElementSibling;
    if (trigger) {
      fireEvent.click(trigger);
    }

    fireEvent.click(screen.getByText('Clear completed'));

    expect(screen.queryByText('Test')).toBeNull();
    expect(screen.queryByText('Прекрасный код')).toBeNull();
  });

  it('the filter works', () => {
    render(<Todo />);

    fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'Test' } });
    fireEvent.click(screen.getByAltText('Add todo'));

    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Completed'));
    expect(screen.queryByText('Test')).toBeNull();
  });
});
