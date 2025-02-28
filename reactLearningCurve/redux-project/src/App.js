import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './Redux/actions';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    return (
        <div className="App">
            <h1>Görev Listesi</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Yeni görev ekle..."
            />
            <button onClick={handleAddTodo}>Ekle</button>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(toggleTodo(index))}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;