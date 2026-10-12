import React, { useState } from 'react'

function Todo() {
    // let value = "";
    let [value, setValue] = useState("");
    let [todos, SetTodos] = useState(["Todo 1", "Todo 2", "Todo 3", "Todo 4"])
    // let todos =["Todo 1","Todo 2","Todo 3","Todo 4"];
    function printValue(e) {
        // console.log(e.target);
        // console.log(e.currentTarget);

        // console.log(e.target.value);
        // value = e.target.value;
        setValue(e.target.value)
    }
    function addTodo(e) {
        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        // console.log(value);
        // todos.push(value);

        // SetTodos((prev)=>{
        //     return [...prev,value]
        // })

        SetTodos((prev) => [...prev, value])
        setValue("")
    }
    return (
        <div>
            <h1>Todo</h1>
            <form onSubmit={addTodo}>
                {/* <input type="text" onInput={printValue}/> */}
                {/* <input value={value} type="text" onChange={printValue}/> */}
                <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
                <button>Add</button>
                <ul>
                    {
                        todos.map((todo) => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </form>
        </div>
    )
}

export default Todo