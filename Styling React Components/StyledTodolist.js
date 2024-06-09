import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #bd2130;
  }
`;

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </InputContainer>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <span>{task}</span>
            <RemoveButton onClick={() => handleRemoveTask(index)}>
              Remove
            </RemoveButton>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
}

export default TodoListApp;
