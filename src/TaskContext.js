import { createContext } from "react";

const TaskContext = createContext({
    tasks: false,
    setTasks: () => {}
});

export default TaskContext;