import React, { useState } from 'react'

const GetTodo = () => {
    const[search,setSearch]=useState('')
    const [todos,setTodo] = useState([])
    const showTodo=()=>{
        fetch('http://49.13.2.10:4000/todos/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTodo(data.data);
        });
    }
          return (
            <div>
              <h2>TodoList here</h2>
              <button className='btn btn-info' onClick={showTodo}>get todo</button>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {todos
                    .map((todo) => (
                        <div key={todo.id} className='flex flex-row'>
                            <p>Name: {todo.name} <span>status:{todo.status? 'Completed' : 'Not Completed'}</span></p>
                            <p>Description: {todo.description}</p>
                        </div>
                    ))}
            </div>
            </div>)
}
export default GetTodo
