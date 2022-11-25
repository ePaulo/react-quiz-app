import './show-score.styles.scss'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const ShowScore = ({ container }) => {
  const [playerName, setPlayerName] = useState('')
  const navigate = useNavigate()

  const {
    quizSelection,
    quizQuestions,
    playerAnswers,
    playerTime,
    quizStartTime,
    quizGameActive,
  } = useContext(QuizQuestionsContext)

  if (!playerAnswers.length) return null

  if (container === 'quiz') {
    if (!quizGameActive && quizQuestions.length !== playerAnswers.length) {
      return (
        <div className='component__show-score'>
          Quiz incomplete... all the questions needed to be answered to obtain a
          score.
        </div>
      )
    } else {
      return null
    }
  }

  if (container === 'result') {
    if (quizQuestions.length !== playerAnswers.length) {
      if (quizGameActive) {
        return (
          <div className='component__show-score'>
            Unanswered questions. Return to Quiz page to continue.
          </div>
        )
      } else {
        return (
          <div className='component__show-score'>
            Score not calculated... all questions were not answered.
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

  const handleNameChange = event => setPlayerName(event.target.value)

  const handleSaveScore = event => {
    event.preventDefault()

    const savedQuizScores = JSON.parse(localStorage.getItem('quizScores'))
    if (!savedQuizScores) {
      localStorage.setItem('quizScores', JSON.stringify([]))
    } else {
      // check if quiz game has already been saved
      const existingScore = savedQuizScores.find(
        savedScore => savedScore.quizId === quizStartTime
      )
      if (existingScore) {
        alert('Quiz game already saved')
        return
      }
    }

    // New quiz result, configure info and save to local storage
    const quizId = quizStartTime
    const savedDate = new Date()
    const dateStr = savedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    const timeStr = savedDate.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })

    // add new quiz score to local storage
    localStorage.setItem(
      'quizScores',
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('quizScores')),
        {
          quizId,
          dateStr,
          timeStr,
          playerName,
          playerTime,
          totalCorrect,
          totalScore,
          quizSelection,
        },
      ])
    )

    navigate('/scores')
  }

  const saveScoreForm = (
    <form className='form_save-score' onSubmit={handleSaveScore}>
      <input
        type='text'
        className='save-score--name'
        value={playerName}
        onChange={handleNameChange}
        placeholder='player name'
        required
      />
      <input type='submit' className='save-score--submit' value='Save' />
    </form>
  )

  return (
    <div className='component__show-score'>
      <h2>
        <span className='score time-used'>Time: {playerTime}s</span>
        <span className='score correct-score'>Correct: {totalCorrect}</span>
        <span className='score total-score'>Score: {totalScore}</span>
      </h2>
      {saveScoreForm}
    </div>
  )
}

export default ShowScore
