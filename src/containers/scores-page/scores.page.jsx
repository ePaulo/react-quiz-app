import './scores.styles.scss'
import { useNavigate } from 'react-router-dom'

import ListScores from '../../components/list-scores/list-scores.comp'

const Scores = () => {
  const navigate = useNavigate()

  const isSavedScores = localStorage.getItem('quizScores') !== null

  const handleDeleteScores = () => {
    localStorage.removeItem('quizScores')
    navigate('/')
  }

  return (
    <div className='container__scores-page'>
      <h1 className='title_scores-page'>Your Saved Quiz Scores</h1>
      <ListScores />
      <button
        className='button_delete-scores'
        type='button'
        hidden={!isSavedScores}
        onClick={handleDeleteScores}
      >
        Delete Saved Scores
      </button>
    </div>
  )
}

export default Scores
