import styled from 'styled-components';

type TodoProps = {
  done: boolean;
};

export const TodoWrapper = styled.main`
  padding-top: 200px;
  padding-bottom: 100px;
  width: 500px;
  margin: 0 auto;
  color: #e1e1e1;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: 100;
  }
`;

export const TodoInner = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid #e1e1e1;

  input[type='image'] {
    width: 24px;
  }

  input[type='text'] {
    flex-grow: 1;
    border: none;
    background-color: transparent;
    outline: none;
    color: #505050;

    &::placeholder {
      color: #e1e1e1;
    }
  }
`;

export const Task = styled.div<TodoProps>`
  display: flex;
  padding: 13px;
  gap: 10px;
  border-bottom: 1px solid #e1e1e1;

  input[type='image'] {
    width: 21px;
  }

  span {
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${(props) => (props.done ? '#e1e1e1' : '#505050')};
    text-decoration-line: ${(props) => (props.done ? 'line-through' : 'none')};
  }
`;

export const TodoPanel = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #797979;

  .todoTypes {
    display: flex;
    gap: 8px;

    button.active {
      border: 1px solid #e1e1e1;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    padding: 4px;
    border-radius: 4px;
    color: #505050;
    cursor: pointer;
  }
`;
