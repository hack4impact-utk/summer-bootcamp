import React from 'react';
import { Task } from '../types';

interface Props {
  addTask: (taskName: string) => void;
}

export default function TaskForm({ addTask }: Props) {
  const [taskName, setTaskName] = React.useState<string | null>(null);
  return (
    <div id="taskForm" className="column is-half">
      <div className="columns">
        <div className="column is-half">
          <input
            type="text"
            id="taskInput"
            className="input"
            onChange={(e) =>
              setTaskName(e.target.value === '' ? null : e.target.value)
            }
            value={taskName || ''}
          />
        </div>
        <div className="column is-half">
          <button
            id="addTask"
            className="button"
            onClick={(e) => {
              if (taskName) {
                addTask(taskName);
                setTaskName(null);
              }
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
