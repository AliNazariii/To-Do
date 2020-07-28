import React, { useContext } from 'react';
import Styles from './Tasks.module.scss';
import Task from './Task/Task';
import TaskContext from '../../TaskContext';

function Tasks() {
    const taskContext = useContext(TaskContext);

    return (
        <div className={Styles.Tasks}>
            <div>
                <h3>Pinned Tasks</h3>
                {taskContext.tasks && 
                    taskContext.tasks
                        .filter((task) => task.isPinned === true && task.isDone === false)
                        .sort((a, b) => a.key > b.key ? -1 : 1)
                        .sort((a, b) => a.priority > b.priority ? -1 : 1)
                        .map((task, index) => <Task data={task} key={index} />)
                }
            </div>
            <div>
                <h3>To-Do</h3>
                {taskContext.tasks && 
                    taskContext.tasks
                        .filter((task) => task.isPinned === false && task.isDone === false)
                        .sort((a, b) => a.key > b.key ? -1 : 1)
                        .sort((a, b) => a.priority > b.priority ? -1 : 1)
                        .map((task, index) => <Task data={task} key={index} />)
                }
            </div>
            <div>
                <h3>Done</h3>
                {taskContext.tasks && 
                    taskContext.tasks
                        .filter((task) => task.isDone === true)
                        .sort((a, b) => a.key > b.key ? -1 : 1)
                        .sort((a, b) => a.priority > b.priority ? -1 : 1)
                        .map((task, index) => <Task data={task} key={index} />)
                }
            </div>
        </div>
    )
}

export default Tasks;