import React, { Component } from 'react';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      satisfaction: '',
      comments: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, satisfaction, comments } = this.state;

    alert(`Name: ${name}\nEmail: ${email}\nSatisfaction: ${satisfaction}\nComments: ${comments}`);
  };

  render() {
    return (
      <div>
        <h1>Survey Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Satisfaction:</label>
            <select
              name="satisfaction"
              value={this.state.satisfaction}
              onChange={this.handleInputChange}
            >
              <option value="">Select</option>
              <option value="very-satisfied">Very Satisfied</option>
              <option value="satisfied">Satisfied</option>
              <option value="not-satisfied">Not Satisfied</option>
            </select>
          </div>
          <div>
            <label>Comments:</label>
            <textarea
              name="comments"
              value={this.state.comments}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SurveyForm;
