import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick, totalVotes }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <Statistic text={"Good"} value={good} />
      <Statistic text={"Neutral"} value={neutral} />
      <Statistic text={"Bad"} value={bad} />
      <Statistic text={"All"} value={good + neutral + bad} />
      <Statistic text={"Average"} value={(good - bad) / (good + neutral + bad)} />
      <Statistic text={"Positive"} value={(good * 100) / (good + neutral + bad)} />
    </div>
  )
}

const Statistic = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
