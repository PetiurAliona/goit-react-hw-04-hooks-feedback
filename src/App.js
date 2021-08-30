import React, { Component } from "react"
import Section from "./components/Section/Section"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"
import Notification from "./components/Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }))
  }

  countTotalFeedback = () => Object.values(this.state).reduce((total, item) => total + item, 0)

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100)

  render() {
    const keyNames = Object.keys(this.state)
    const { addFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this
    const { good, neutral, bad } = this.state

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keyNames} onLeaveFeedback={addFeedback} />
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
}

export default App
