import React, { useContext, useState } from 'react';
import Styles from './Task.module.scss';
import TaskContext from '../../../TaskContext';

function Task(props) {
    const taskContext = useContext(TaskContext);
    let starColor = props.data.isPinned === true ? '#a62626' : '#7a7a7a'
    return (
        <div className={Styles.Task}>
            <div className={Styles.LeftBlock}>
                <button onClick={(e) => {
                            let currentState = props.data.isPinned
                            let newTasks = taskContext.tasks
                            newTasks[newTasks.findIndex((task) => task.key === props.data.key)].isPinned = !currentState
                            localStorage.setItem('tasks', JSON.stringify(newTasks))
                            taskContext.setTasks(JSON.parse(localStorage.getItem('tasks')))
                        }}
                >
                    <i class="material-icons" style={{ fontSize: "20px", color: starColor }}>star</i>
                </button>
                <h5>{props.data.title}</h5>
            </div>
            <div className={Styles.RightBlock}>
                <form>
                    <input
                        name="isDone"
                        className={Styles.Checkbox}
                        type="checkbox"
                        checked={props.data.isDone}
                        onChange={(e) => {
                            let newTasks = taskContext.tasks
                            newTasks[newTasks.findIndex((task) => task.key === props.data.key)].isDone = e.target.checked
                            localStorage.setItem('tasks', JSON.stringify(newTasks))
                            taskContext.setTasks(JSON.parse(localStorage.getItem('tasks')))
                        }} 
                    />
                </form>
            </div>
        </div>
    )
}

export default Task;