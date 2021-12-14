// import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const feedbackIncrement = (name) => {
    console.log(name);
    if (name === "good") setGood(prevGood => prevGood + 1);
    if (name === "neutral") setNeutral(prevNeutral => prevNeutral + 1);
    if (name === "bad") setBad(prevBad => prevBad + 1);
    };
  
      const total = good + neutral + bad;
      const positivePercentage = Math.round((good / total) * 100) + "%";
 
      return (
          <div>
        <Section title="Please leave the feedback">
          <FeedbackOptions options={[ "good", "neutral", "bad" ]} onLeaveFeedback={feedbackIncrement} />
          
          </Section> 
          <Section title="Statistics">
          {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="There is no feedback" />}
          </Section>
          </div>
        
      );
    
  }

export default App;
