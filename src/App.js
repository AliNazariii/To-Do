import React, { useState } from 'react';
import Styles from './styles.module.scss';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Tasks/Tasks';
import TaskContext from './TaskContext';

function App() {
	if (localStorage.getItem('tasks') === null) {
		localStorage.setItem('tasks', JSON.stringify([
			{'key': new Date(),'title': 'a task for tes.', 'isPinned': true, 'isDone': false, 'priority': 1}
		]))
	}
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
	return (
		<div className={Styles.App}>
			<div className={Styles.Layout}>
				<TaskContext.Provider 
					value={{
						tasks: tasks, 
						setTasks: setTasks
					}}
				>
					<NewTask />
					<Tasks />
				</TaskContext.Provider>
			</div>
		</div>
	);
}

export default App;
