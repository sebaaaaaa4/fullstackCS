import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => <button onClick={props.rating}>{props.text}</button>;

  const Statistics = () =>{
    var all = good + bad + neutral;
    var average = ((good * 1) + (neutral * 0) + (bad * -1)) / all;
    var positive = (good/all) * 100;

    const StatisticLine = (props) =>{
      return (
        <div>
          {props.text} {props.variable}{props.sufix != "" ? props.sufix : ""}
        </div>
      )
    }

    if(all <= 0){
      return (
      <div>
        <h1>statistics </h1>
        No feedback given
      </div>
    );
    }
    else{
      return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" variable={good}/>
        <StatisticLine text="neutral" variable={neutral}/>
        <StatisticLine text="bad" variable={bad}/>
        <StatisticLine text="all" variable={all}/>
        <StatisticLine text="average" variable={average}/>
        <StatisticLine text="positive" variable={positive} sufix="%"/>
      </div>
    );
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button rating={() => setGood(good+1)} text="good"/>
      <Button rating={() => setNeutral(neutral+1)} text="neutral"/>
      <Button rating={() => setBad(bad+1)} text="bad"/>
      <Statistics/>
    </div>
  )
}

export default App