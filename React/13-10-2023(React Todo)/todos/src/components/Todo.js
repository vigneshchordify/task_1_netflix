import React, { useEffect, useState } from 'react'
import './todo.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";







function Todo() {
    const schema = yup.object().shape({
        todos: yup.string().required()
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [todolist, setTodoList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    const onDelete = (id) => {
        let temp1 = [...todolist];
        temp1.splice(id, 1);
        setTodoList(temp1);
    };

    const onEdit = (id) => {
        setEditIndex(id); 
        reset({ todos: todolist[id].todos }); 
    };

    const onSubmit = (data) => {
        if (editIndex !== null) {
            
            const updatedList = [...todolist];
            updatedList[editIndex] = data;
            setTodoList(updatedList);
            setEditIndex(null);
        } else {
          
            setTodoList([...todolist, data]);
        }

        reset();
    };

    return (
        <div className='regular'>
            <div className='maindiv'>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p>Please Add your note</p>
                        <input {...register("todos")} />
                        <p className='errmsg'>{errors.todos?.message}</p>
                        <button type='submit'>{editIndex !== null ? 'Update' : 'ADD'}</button>
                    </div>
                </form>

                <div className='todo-lists'>
                    <table className='table-1'>
                        <thead>
                            <th>List of Todos</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        {todolist.map((i, index) => (
                            <tr key={index}>
                                <td>{i.todos}</td>
                                <td><button onClick={() => onEdit(index)}>Edit</button></td>
                                <td><button onClick={() => onDelete(index)}>Delete Button</button></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Todo;
