import { useState } from 'react';
import Container from 'components/Container';
import FeedbackOptions  from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import Section from 'components/Section';

export default function App()  {
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);
  
  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };
  
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback());
  
  return(
    <Container>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() !==0 ? (
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
  </Container>
  )
}
