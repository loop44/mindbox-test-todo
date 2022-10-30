import { describe, expect, it } from 'vitest';

import { render, screen } from './utils/test-utils';
import Todo from './Todo';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Todo />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});
