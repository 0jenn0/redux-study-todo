// src/App.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { AppDispatch, RootState } from './redux/store';
import { addTodo, removeTodo ,removeAll} from './redux/action';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const todos = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleDeleteTodo = () => {
    dispatch(removeTodo());
  };

  const handleDeleteAllTodos = () => {
    dispatch(removeAll());
  };

  return (
    <>
      <h2>TODO with Redux</h2>
      <h3>오늘 할 일</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <div>
        <input 
          type="text" 
          id="input-text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddTodo}>할 일 추가</button>
        <button onClick={handleDeleteTodo}>할 일 삭제</button>
        <button onClick={handleDeleteAllTodos}>모두 삭제</button>
      </div>
    </>
  );
};

export default App;
