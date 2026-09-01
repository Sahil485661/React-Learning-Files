import { useState } from 'react'

import './App.css'

function App() {
 const [title, setTitle] = useState("");            // Add Task form ke liye
const [description, setDescription] = useState(""); // Add Task form ke liye
const [todos, setTodos] = useState([]);
const [editingId, setEditingId] = useState(null);   // kaunsa todo edit mode me hai
const [editTitle, setEditTitle] = useState("");     // Edit form ke liye
const [editDescription, setEditDescription] = useState(""); // Edit form ke liye
  function addTodo(title, description) {
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      createdAt: new Date().toLocaleDateString(),
      completed: false
    }
    setTodos((prev) => [...prev, newTodo])
  }
  function deleteTodo(id) {
    const removeTodo = todos.filter((todo) => todo.id !== id)
    setTodos(removeTodo)
  }
  function toggleUpdate(id) {
  const updateToggle = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    } else {
      return todo;
    }
  });
  setTodos(updateToggle);
}
function updateTodo(editingId) {
  const update = todos.map((todo)=>(
    todo.id === editingId ? {...todo, title: editTitle, description: editDescription} : todo

  )
  )
  setTodos(update)
  setEditingId(null)
}
  return (
    <div>
      <div>
        <input placeholder='title' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <textarea placeholder='Description here' name="" id="" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button onClick={() => {
          addTodo(title, description);
          setDescription('');
          setTitle("")
        }
        } disabled= {editingId} >Add Task</button>
      </div>
      {
      <div>
        {todos.map((todo) =>
        (
          todo.id === editingId ? <div key={todo.id}>
        <input type="text" value={editTitle} onChange={(e)=> setEditTitle(e.target.value)} />
        <input type="text" value={editDescription} onChange={(e)=> setEditDescription(e.target.value)}/>
        <button onClick={()=>updateTodo(todo.id)}>Save Update</button>
        </div>:
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <small>{todo.createdAt}</small>
            <button className='border border-white ' onClick={() => toggleUpdate(todo.id)}>{todo.completed === true ? "Done" : "Not Done"}</button>
            <button className='border border-white ' onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>{setEditingId(todo.id); setEditDescription(todo.description); setEditTitle(todo.title);}} className='border border-white '>Edit Todo</button>
          </div>))}
      </div>}
    </div>
    )
}

export default App
