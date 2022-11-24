import './quiz-timer.styles.scss'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Countdown from 'react-countdown'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const QuizTimer = () => {
  const navigate = useNavigate()
  const { quizQuestions, quizTime } = useContext(QuizQuestionsContext)
  if (quizQuestions.length === 0) {
    navigate('/')
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span className='timer'>Time's up!</span>
    } else {
      return (
        <span className='timer'>
          {minutes}:{seconds}
        </span>
      )
    }
  }

  const handleComplete = () => {
    navigate('/result')
  }

  return (
    <div className='component__quiz-timer'>
      <Countdown
        date={Date.now() + quizTime * 1000}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  )
}

export default QuizTimer
