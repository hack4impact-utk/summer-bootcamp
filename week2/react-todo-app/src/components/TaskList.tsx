import { Task } from '../types';
import TaskComponent from './Task';

interface Props {
  tasks: Task[];
  toggleTaskCompleted: (taskId: number) => void;
}

export default function TaskList({ tasks, toggleTaskCompleted }: Props) {
  return (
    <div id="taskList" className="column is-half">
      <div className="columns">
        <div className="column is-full">
          <h1 className="title">My tasks</h1>
          <ul id="taskListUl">
            {tasks.map((task) => (
              <TaskComponent
                key={task.id}
                task={task}
                toggleTaskCompleted={toggleTaskCompleted}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
