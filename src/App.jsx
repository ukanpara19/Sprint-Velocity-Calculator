import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Title />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form />
                </div>
                <footer className='footer-class'> Designed by @Utsav Kanpara</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
