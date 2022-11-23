import './show-score.styles.scss'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const ShowScore = () => {
  const [playerName, setPlayerName] = useState('')
  const { quizSelection, quizQuestions, playerAnswers } =
    useContext(QuizQuestionsContext)
  const navigate = useNavigate()

  if (!playerAnswers.length) return

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

    const date = new Date()
    const dateStr = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    const timeStr = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })

    // check for (and if none, create) a quizScores array in local storage
    const savedScores = JSON.parse(localStorage.getItem('quizScores'))
    if (!savedScores) {
      localStorage.setItem('quizScores', JSON.stringify([]))
    }
    // add new quiz score to local storage
    localStorage.setItem(
      'quizScores',
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('quizScores')),
        {
          dateStr,
          timeStr,
          playerName,
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
        <span className='score correct-score'>Correct: {totalCorrect}</span>
        <span className='score total-score'>Score: {totalScore}</span>
      </h2>
      {saveScoreForm}
    </div>
  )
}

export default ShowScore
