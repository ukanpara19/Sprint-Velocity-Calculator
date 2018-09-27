import React, {Component} from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import '../App.css'

const SliderWithTooltip = createSliderWithTooltip(Slider);

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = this.getInitialState();
  }

  getInitialState = () =>{
    const initialState = {
      averageVelocity: 90,
      teamMembers: 5,
      daysInSprint: 10,
      daysOff: 0,
    };
    return initialState;
  }

    onSliderChangeAverageVelocity = (averageVelocity) =>{
       this.setState({averageVelocity});
    }

    onSliderChangeTeamMembers = (teamMembers) =>{
      this.setState({teamMembers});
    }

    onSliderChangedaysInSprint = (daysInSprint) =>{
      this.setState({daysInSprint});
    }

    onSliderChangedaysOff = (daysOff) =>{
      this.setState({daysOff});
    }

    onFormSubmit = (event) =>{
      event.preventDefault();
      const avgVelocity = this.state.averageVelocity
      const numOfTeamMembers = this.state.teamMembers
      const daysinSprint = this.state.daysInSprint
      const numOfTotalsDaysOff = this.state.daysOff
      const result = (avgVelocity - (((avgVelocity/numOfTeamMembers)/daysinSprint)*numOfTotalsDaysOff)).toFixed(2);

      if(isNaN(result)){
          alert("Please enter valid input");
        }else{
          const teamCapacity = 'The Team Capacity is '+ result;
          this.setState({ teamCapacity: teamCapacity });
        }
      }

    reloadPage = () =>{
      window.location.reload();
    }

  render(){
    const {averageVelocity, teamMembers, daysInSprint, daysOff} = this.state;
  return(
  <div>
    <form className='form-class' onSubmit = {this.onFormSubmit}>
      <div>
          <label name='AverageVelocity' className='form-label'> Average Velocity : <span className='slider-result'>{averageVelocity}</span></label>
          <SliderWithTooltip
            className='slider-class'
            defaultValue= {70}
            value={averageVelocity}
            onChange= {this.onSliderChangeAverageVelocity}
          />
      </div>      
      <div>
          <label className='form-label'> Team Members : <span className='slider-result'>{teamMembers}</span></label>
          <SliderWithTooltip
            className='slider-class'
            min= {0}
            max= {10}
            defaultValue= {7}
            value={teamMembers}
            onChange={this.onSliderChangeTeamMembers}
          /> 
      </div>
      <div> 
          <label className='form-label'>Days in the sprint : <span className='slider-result'>{daysInSprint}</span></label>
          <SliderWithTooltip
            className='slider-class'
            min={0}
            max={20}
            defaultValue= {10}
            value={daysInSprint}
            onChange={this.onSliderChangedaysInSprint}
          />
      </div>      
      <div>
          <label className='form-label'> Total days off : <span className='slider-result'>{daysOff}</span></label>
          <SliderWithTooltip
            className='slider-class'
            min={0} 
            max={10}
            defaultValue={0}
            value={daysOff}
            onChange={this.onSliderChangedaysOff}
          />
      </div>      
      <div>
          <button className='button-class' type='submit'>Calculate</button>
          <button className='button-class-1' type='reset' onClick={this.reloadPage}>Reset</button>
      </div>    
   </form>
    <hr className='line-break '/>
    <h2 className='form-result'>{this.state.teamCapacity}</h2>
  </div>
      );
    }
};

export default Form;    