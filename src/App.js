import React, {Component} from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => { //* This function will be the 'onChange' handler for the input field
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => { //* This function will be the 'onSubmit' handler for the form element
    e.preventDefault(); //* prevents default behavior of form refreshing on submit
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', //* reset input field to empty to add another task
        id: uniqid()
      },
    });
  };

  render() {
    const { task, tasks } = this.state; //? why destructure the state?

    return (
      <div>
        <form onSubmit = {this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange = {this.handleChange}
            value = {task.text} //! MUST specify value for React input elements
            type = 'text'
            id = 'taskInput'
          />
          <button type = 'submit'>Add Task</button>
        </form>
        <Overview tasks = {tasks}/>
      </div>
    );
  }
}

export default App;