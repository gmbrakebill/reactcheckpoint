import React from 'react';
import logo from './logo.svg';
//import EmailList from '.EmailList.js'
import './App.css';

class App extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      emailData :
      [
        {
      sender: '',
      recipient: '',
      subject: '',
      message: '',
      date: '',
      id: '',
        }
      ]
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/emails')
      .then(res => res.json())
      .then(result => {
        this.setState({
          emailData:[result]});
          console.log(this.state.emailData)
      });
  }

  render() {
    const { emailData } = this.state;
      return (
        <ul>
          {/* not sure why this isn't working. It should render back a list of all email data from server */}
          {emailData.map(email => (
            <li key={email.sender}>
              <h3>{email.recipient}</h3>
              <h3>{email.subject}</h3>
              <p>{email.message}</p>
              <h3>{email.date}</h3>
              <h3>{email.id}</h3>
            </li>
          ))}
        </ul>
      );
    }
  }

export default App;