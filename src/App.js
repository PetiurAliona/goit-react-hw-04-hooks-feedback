import React, { useState } from "react"
import Section from "./components/Section/Section"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"
import Notification from "./components/Notification/Notification"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addFeedback = (value) => {
    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1)
        break
      case "neutral":
        setNeutral((prevState) => prevState + 1)
        break
      case "bad":
        setBad((prevState) => prevState + 1)
        break

      default:
        break
    }
  }

  const countTotalFeedback = () => [good, neutral, bad].reduce((total, item) => total + item, 0)
  const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100)

  const btnNames = ["good", "neutral", "bad"]

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnNames} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  )
}

export default App
