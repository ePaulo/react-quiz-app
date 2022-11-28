import './show-score.styles.scss'
import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'
import SaveScore from '../save-score/save-score.comp'

const ShowScore = ({ container }) => {
  const { quizQuestions, playerAnswers, playerTime, quizGameActive } =
    useContext(QuizQuestionsContext)

  if (!playerAnswers.length) return null

  const allQuestionsAnswered = playerAnswers.length === quizQuestions.length

  if (container === 'quiz') {
    if (!quizGameActive && !allQuestionsAnswered) {
      return (
        <div className='component__show-score'>
          <p className='quiz-incomplete-note'>
            Quiz incomplete. Answer all questions to obtain a score.
          </p>
        </div>
      )
    } else {
      return null
    }
  }

  if (container === 'result') {
    if (!allQuestionsAnswered) {
      if (quizGameActive) {
        return (
          <div className='component__show-score'>
            <p className='quiz-incomplete-note'>
              Unanswered questions. Return to Quiz page to continue.
            </p>
          </div>
        )
      } else {
        return (
          <div className='component__show-score'>
            <p className='quiz-incomplete-note'>
              Score not calculated... all questions were not answered.
            </p>
          </div>
        )
      }
    }
  }

  const totalCorrect = quizQuestions.reduce(
    (total, question, queId) =>
      question.correct_answer === playerAnswers[queId].playerChoice
        ? total + 1
        : total,
    0
  )

  const totalScore = quizQuestions.reduce(
    (total, question, queId) =>
      question.correct_answer === playerAnswers[queId].playerChoice
        ? total + 2
        : total - 1,
    0
  )

  return (
    <div className='component__show-score'>
      <h2>
        <span className='score time-used'>Time: {playerTime}s</span>
        <span className='score correct-score'>Correct: {totalCorrect}</span>
        <span className='score total-score'>Score: {totalScore}</span>
      </h2>
      <SaveScore totalCorrect={totalCorrect} totalScore={totalScore} />
    </div>
  )
}

export default ShowScore
