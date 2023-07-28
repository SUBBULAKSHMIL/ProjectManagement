import React, { useState, useEffect } from 'react';
import '../styles/task.css'
import axios from 'axios';

const Task= () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    taId: '',
    taName: '',
    taStatus: '',
    taStartdate: '',
    taEnddate: '',
    employeeDto: {
      empId: '',
      empName: '',
      empMail: '',
      empSalary: '',
      eqId: '',
      eqType: '',
    },
  });

  const apiUrl = 'http://localhost:8080/task';

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleEmployeeInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      employeeDto: { ...taskData.employeeDto, [name]: value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (taskData.taId) {
        await axios.put(`${apiUrl}/${taskData.taId}`, taskData);
      } else {
        await axios.post(apiUrl, taskData);
      }
      fetchTasks();
      setTaskData({
        taId: '',
        taName: '',
        taStatus: '',
        taStartdate: '',
        taEnddate: '',
        employeeDto: {
          empId: '',
          empName: '',
          empMail: '',
          empSalary: '',
          eqId: '',
          eqType: '',
        },
      });
    } catch (error) {
      console.error('Error creating/updating task:', error);
    }
  };

  const handleEdit = (task) => {
    setTaskData(task);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='task'>
    <div className="taskcontent">
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taId">Task ID:</label>
        <input
          type="text"
          id="taId"
          name="taId"
          value={taskData.taId}
          onChange={handleInputChange}
        />
        <label htmlFor="taName">Task Name:</label>
        <input
          type="text"
          id="taName"
          name="taName"
          value={taskData.taName}
          onChange={handleInputChange}
        />
        <label htmlFor="taStatus">Task Status:</label>
        <input
          type="text"
          id="taStatus"
          name="taStatus"
          value={taskData.taStatus}
          onChange={handleInputChange}
        />
        <label htmlFor="taStartdate">Start Date:</label>
        <input
          type="text"
          id="taStartdate"
          name="taStartdate"
          value={taskData.taStartdate}
          onChange={handleInputChange}
        />
        <label htmlFor="taEnddate">End Date:</label>
        <input
          type="text"
          id="taEnddate"
          name="taEnddate"
          value={taskData.taEnddate}
          onChange={handleInputChange}
        />

        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="empId"
          value={taskData.employeeDto.empId}
          onChange={handleEmployeeInputChange}
        />
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          name="empName"
          value={taskData.employeeDto.empName}
          onChange={handleEmployeeInputChange}
        />
        <label htmlFor="employeeEmail">Employee Email:</label>
        <input
          type="text"
          id="employeeEmail"
          name="empMail"
          value={taskData.employeeDto.empMail}
          onChange={handleEmployeeInputChange}
        />
        <label htmlFor="employeeSalary">Employee Salary:</label>
        <input
          type="text"
          id="employeeSalary"
          name="empSalary"
          value={taskData.employeeDto.empSalary}
          onChange={handleEmployeeInputChange}
        />

        <button type="submit">Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taId}>
              <td>{task.taId}</td>
              <td>{task.taName}</td>
              <td>{task.taStatus}</td>
              <td>{task.taStartdate}</td>
              <td>{task.taEnddate}</td>
              <td>{task.employeeDto.empId}</td>
              <td>{task.employeeDto.empName}</td>
              <td>{task.employeeDto.empMail}</td>
              <td>{task.employeeDto.empSalary}</td>
              <td>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.taId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Task;