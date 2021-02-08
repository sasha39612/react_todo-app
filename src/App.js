import React, { useEffect, useState } from 'react';
import { TodoApp } from './Component/Header/TodoApp';
import { TodoList } from './Component/Main/TodoList';
import { TodoFilter } from './Component/Footer/TodosFilter';
import * as api from './Component/API/api';
import './styles/filters.css';
import './styles/index.css';
import './styles/todo-list.css';

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.todos) {
      setTodos(JSON.parse(localStorage.getItem('todos') || '[]'));
    }
  }, []);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    setItems([...todos]);
  }, [todos]);

  const showFotter = todos.length > 0;

  const onFilter = (comand) => {
    setFilter(comand);
    switch (comand) {
      case 'active':

        return setItems(todos.filter(todo => todo.completed === false));

      case 'completed':

        return setItems(todos.filter(todo => todo.completed === true));

      default:

        return setItems([...todos]);
    }
  };

  const onRemoveCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false));
  };

  const deleteTodo = (removeTodoID) => {
    setTodos(todos.filter(todo => todo.id !== +removeTodoID));
  };

  const completeTodo = (isCopleted) => {
    setTodos(todos.map((todo) => {
      if (todo.id === isCopleted) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    }));
  };

  const completeAllTodo = (comandAll) => {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: comandAll,
    })));
  };

  const onAddNewTitle = (newTitle) => {
    setTodos(todos.map((todo) => {
      if (todo.id === newTitle.id) {
        return {
          ...todo,
          title: newTitle.title,
        };
      }

      return todo;
    }));
  };

  return (

    <section className="todoapp">
      <header className="header">

        <div className="conteiner-button">
          <button
            type="button"
            className="button-new"
            onClick={() => {
              api.addUser();
            }}
          >
            ADD USER
          </button>

          <button
            type="button"
            className="button-new"
            onClick={() => {
              api.addUser();
            }}
          >
            GET USERID
          </button>
        </div>

        <h1>todos</h1>

        <TodoApp
          onAdd={addTodo}
          todos={todos}
        />
      </header>

      <section className="main">
        <TodoList
          items={items}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          completeAllTodo={completeAllTodo}
          showFotter={showFotter}
          onAddNewTitle={onAddNewTitle}
        />
      </section>

      <TodoFilter
        todos={todos}
        filter={filter}
        onFilter={onFilter}
        onRemoveCompleted={onRemoveCompleted}
        showFotter={showFotter}
      />

    </section>
  );
}

export default App;
