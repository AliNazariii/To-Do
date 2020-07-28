import React, { useContext } from 'react';
import Styles from './Task.module.scss';
import TaskContext from '../../../TaskContext';

function Task(props) {
    const taskContext = useContext(TaskContext);
    let starColor = props.data.isPinned === true ? '#a62626' : '#7a7a7a'
    let taskColor = props.data.color
    return (
        <div className={Styles.Task} style={{ backgroundColor: taskColor }}>
            <div className={Styles.LeftBlock}>
                <button onClick={(e) => {
                            let currentState = props.data.isPinned
                            let newTasks = taskContext.tasks
                            newTasks[newTasks.findIndex((task) => task.key === props.data.key)].isPinned = !currentState
                            localStorage.setItem('tasks', JSON.stringify(newTasks))
                            taskContext.setTasks(JSON.parse(localStorage.getItem('tasks')))
                        }}
                >
                    <i className="material-icons" style={{ fontSize: "20px", color: starColor }}>star</i>
                </button>
                <h5>{props.data.title}</h5>
            </div>
            <div className={Styles.RightBlock}>
                <form>
                    <input type="color" name="favcolor"
                        onChange={(e) => {
                            let newTasks = taskContext.tasks
                            newTasks[newTasks.findIndex((task) => task.key === props.data.key)].color = e.target.value
                            localStorage.setItem('tasks', JSON.stringify(newTasks))
                            taskContext.setTasks(JSON.parse(localStorage.getItem('tasks')))
                        }}
                    />
                </form>
                <div className={Styles.Priority}>
                    <h5>{props.data.priority === '1' ? "Low" : props.data.priority === '2' ? "Medium" : "High"}</h5>
                </div>
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