import React, { useState } from 'react';
import Styles from './styles.module.scss';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Tasks/Tasks';
import TaskContext from './TaskContext';

function App() {
	if (localStorage.getItem('tasks') === null) {
		localStorage.setItem('tasks', JSON.stringify([
			{'key': new Date(),'title': 'a task for test 1.', 'isPinned': true, 'isDone': false, 'priority': '1', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 2.', 'isPinned': true, 'isDone': false, 'priority': '2', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 3.', 'isPinned': true, 'isDone': false, 'priority': '3', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 4.', 'isPinned': false, 'isDone': false, 'priority': '1', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 5.', 'isPinned': false, 'isDone': false, 'priority': '2', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 6.', 'isPinned': false, 'isDone': false, 'priority': '3', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 7.', 'isPinned': true, 'isDone': true, 'priority': '1', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 8.', 'isPinned': false, 'isDone': true, 'priority': '2', 'color': '#ffffff'},
			{'key': new Date(),'title': 'a task for test 9.', 'isPinned': false, 'isDone': true, 'priority': '3', 'color': '#ffffff'}
		]));
	}
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
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