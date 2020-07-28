import React, { useContext, useState } from 'react';
import Styles from './NewTask.module.scss';
import TaskContext from '../../TaskContext';

function NewTask() {
    const taskContext = useContext(TaskContext);
    const [task, setTask] = useState({
        key: null,
        title: null,
        isPinned: false,
        isDone: false,
        priority: '1'
    });
    const onChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
            key: new Date()
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newTasks = [...taskContext.tasks, task];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        taskContext.setTasks(JSON.parse(localStorage.getItem('tasks')));
        e.target['title'].value = '';
    }

    return (
        <form 
            className={Styles.Form} 
            onSubmit={onSubmit} 
            onChange={onChange}
        >
            <input 
                type="text" 
                name="title" 
                placeholder="Enter your task here" 
            />
            <select name="priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
			<input type="submit" value="Add" />
        </form>
    )
}

export default NewTask;