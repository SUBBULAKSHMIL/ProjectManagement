import React, { useState } from 'react';
import '../styles/status.css';

const tasksData = [
  { eid: 1,ename:'suba',tid:'t1', taskName: 'Task 1', completed: true },
  { eid: 2,ename:'dhivya',tid:'t2', taskName: 'Task 2', completed: false },
  { eid: 3, ename:'subbu',tid:'t3', taskName: 'Task 3', completed: true },
  { eid: 4,ename:'sahana',tid:'t4', taskName: 'Task 4', completed: false },
];

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="status">
        <div className='status_con'>
        <h2 style={{color:'white'}}>Task Completion Status</h2>
        <table className='status_table'>
            <tr className='status_tr'>
                <th>Emloyee Id</th>
                <th>Employee Name</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Status</th>
            </tr>
        <tbody>
          {tasks.map((task) => (
            <tr >
              <td>{task.eid}</td>
              <td>{task.ename}</td>
              <td>{task.tid}</td>
              <td>{task.taskName}</td>
              <td className={task.completed ? 'completed' : 'incomplete'}>
                {task.completed ? 'Completed' : 'Incomplete'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default EmployeeTasks;
