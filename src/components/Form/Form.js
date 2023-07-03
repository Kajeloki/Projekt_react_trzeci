import './Form.css';
import React, { useState } from 'react';
import FormInputs from './FormInputs';
import SubBtn from './SubBtn';

const Form = (props) => {
  const [enteredCurrentSavings, setenteredCurrentSavings] = useState('');
  const [enteredyearlyContribution, setenteredyearlyContribution] = useState('');
  const [enteredexpectedReturn, setenteredexpectedReturn] = useState('');
  const [enteredDuration, setenteredDuration] = useState('');
  

  const currentSavingsChangeHandler = (event) => {
    setenteredCurrentSavings(event.target.value);
  }
  const yearlyContributionChangeHandler = (event) => {
    setenteredyearlyContribution(event.target.value);
  }
  const expectedReturnChangeHandler = (event) => {
    setenteredexpectedReturn(event.target.value);
  }
  const durationChangeHandler = (event) => {
    setenteredDuration(event.target.value);
  }

  const calculateHandler = (userInput) => {


    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    userInput.preventDefault();
    const yearlyData = []; // per-year results

    let currentSavings = +enteredCurrentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +enteredyearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +enteredexpectedReturn / 100;
    const duration = +enteredDuration;
    let totalInterest=0;
    let totalContribution= +enteredyearlyContribution;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest+=yearlyInterest;
      
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        key: Math.random(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalContribution: totalContribution,
        totalInterest: totalInterest
      });
      
      totalContribution+= +enteredyearlyContribution;
    }
    //console.log(yearlyData[0].year);
    props.onAddData(yearlyData);
    // do something with yearlyData ...
  };

  return <form className="form">
    <div className="input-group">
      <FormInputs label='Aktualne oszczędnośći (PLN)' onChangeHandler={currentSavingsChangeHandler} />
      <FormInputs label='Roczne oszczędności (PLN)' onChangeHandler={yearlyContributionChangeHandler} />
    </div>
    <div className="input-group">
      <FormInputs label='Szacowany zwrot (% na rok)' onChangeHandler={expectedReturnChangeHandler} />
      <FormInputs label='Okres inwestycji (w latach)' onChangeHandler={durationChangeHandler} />
    </div>
    <SubBtn BtnHandler={calculateHandler} />
  </form>
}
export default Form;