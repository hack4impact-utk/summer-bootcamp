import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const task: Task = {
      id: tasks.length + 1,
      name: taskName,
      completedAt: null,
    };
    setTasks([...tasks, task]);
  };

  const toggleTaskCompleted = (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.completedAt = task.completedAt ? null : new Date();
      setTasks([...tasks]);
    }
  };

  return (
    <div className="App">
      <div className="columns mb-6">
        <div className="column is-full">
          <h1 className="title is-2">Basic Todo App</h1>
        </div>
      </div>
      <div className="columns">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompleted={toggleTaskCompleted} />
      </div>
      <div className="columns">
        <div className="column is-full">
          <p>
            Tasks left to do: {tasks.filter((task) => !task.completedAt).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
