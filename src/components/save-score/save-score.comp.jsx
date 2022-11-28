import './save-score.styles.scss'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const SaveScore = ({ totalCorrect, totalScore }) => {
  const [playerName, setPlayerName] = useState('')
  const navigate = useNavigate()

  const { quizSelection, playerTime, quizStartTime } =
    useContext(QuizQuestionsContext)

  const handleNameChange = event => setPlayerName(event.target.value)

  const handleSaveScore = event => {
    event.preventDefault()

    const savedQuizScores = JSON.parse(localStorage.getItem('quizScores'))

    if (savedQuizScores) {
      // check for and block re-saving a score
      const existingScore = savedQuizScores.find(
        savedScore => savedScore.quizId === quizStartTime
      )
      if (existingScore) {
        alert('Quiz game already saved')
        return
      }
    } else {
      localStorage.setItem('quizScores', JSON.stringify([]))
    }

    // ====== save score to local storage ======
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

  return <div className='component__save-score'>{saveScoreForm}</div>
}

export default SaveScore
