import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Countdown, { zeroPad } from 'react-countdown'
// REF https://www.npmjs.com/package/react-countdown

import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'
import './quiz-timer.styles.scss'

const QuizTimer = ({ container }) => {
  const navigate = useNavigate()

  const {
    quizQuestions,
    playerAnswers,
    quizGameActive,
    setQuizGameActive,
    quizStartTime,
    quizDuration,
    playerTime,
    setPlayerTime,
  } = useContext(QuizQuestionsContext)

  const allQuestionsAnswered = () =>
    quizQuestions.length === playerAnswers.length

  if (container === 'quiz' && !quizGameActive) {
    if (allQuestionsAnswered()) {
      return playerTime ? (
        <div>
          <em>Game over! Time used: {`${playerTime}`} seconds</em>
        </div>
      ) : null
    } else {
      return null
    }
  }

  if (quizGameActive) {
    const renderer = ({ minutes, seconds }) => (
      <span className='timer'>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    )

    const handleStop = () => {
      console.log('QuizTimer: handleStop')
      const currentTime = new Date().getTime()
      console.log('playerTime: ', currentTime - quizStartTime)
      setPlayerTime(Math.round((currentTime - quizStartTime) / 100) / 10)
      setQuizGameActive(false)
      allQuestionsAnswered() && navigate('/result')
    }

    const handleComplete = () => {
      console.log('QuizTimer: handleComplete')
      setQuizGameActive(false)
      console.log('playerTime: ', quizDuration)
      setPlayerTime(quizDuration / 1000)
      allQuestionsAnswered() && navigate('/result')
    }

    return (
      <div className='component__quiz-timer'>
        <button
          type='button'
          className='button_quiz-timer'
          onClick={handleStop}
        >
          <span className='button_quiz-timer--name'>Stop Timer</span>
          <Countdown
            key={quizStartTime}
            date={quizStartTime + quizDuration}
            // controlled={true}
            intervalDelay={1000}
            zeroPadTime={2}
            renderer={renderer}
            onStop={handleStop}
            onComplete={handleComplete}
          />
        </button>
      </div>
    )
  }
}

export default QuizTimer
