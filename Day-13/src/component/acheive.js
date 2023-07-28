import React from 'react';
import '../styles/achieve.css';

class Achieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEmployees: '',
      employeeNames: [],
    };
  }

  handleChange = (event) => {
    this.setState({ numberOfEmployees: event.target.value });
  };

  handleInputChange = (event, index) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const employeeNames = [...prevState.employeeNames];
      employeeNames[index] = value;
      return { employeeNames };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { numberOfEmployees, employeeNames } = this.state;
    console.log('Number of Achievements:', numberOfEmployees);
    console.log('Achievements:', employeeNames);
  };

  renderEmployeeInputs() {
    const { numberOfEmployees, employeeNames } = this.state;
    const inputs = [];

    for (let i = 0; i < numberOfEmployees; i++) {
      inputs.push(
        <input
          key={i}
          type="text"
          value={employeeNames[i] || ''}
          onChange={(event) => this.handleInputChange(event, i)}
          placeholder={`achieve ${i + 1}`}
        />
      );
    }

    return inputs;
  }

  render() {
    return (
        <div className='achieve'>
      <div className="form-container">
        <h2 style={{fontSize:'30px'}}>ACHIEVEMENTS </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of achievments :
            <input
              type="number"
              value={this.state.numberOfEmployees}
              onChange={this.handleChange}
            />
          </label>
          {this.renderEmployeeInputs()}
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Achieve;
