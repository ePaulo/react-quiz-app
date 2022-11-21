import './show-score.styles.scss'
import { useState, useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const ShowScore = () => {
  const [playerName, setPlayerName] = useState('')

  const { quizSelection, quizQuestions, playerAnswers, setAllQuizScores } =
    useContext(QuizQuestionsContext)

  // console.log(quizSelection) // !LOG

  if (!playerAnswers.length) return

  const calculateScore = () => {
    let score = 0
    quizQuestions.forEach((question, queId) => {
      score =
        question.correct_answer === playerAnswers[queId].playerChoice
          ? (score += 2)
          : (score -= 1)
    })
    return score
  }
  const quizScore = calculateScore()

  const handleNameChange = event => setPlayerName(event.target.value)

  const handleSaveScore = event => {
    event.preventDefault()
    // console.log(playerName) // !LOG
    setAllQuizScores(prevScores => [
      ...prevScores,
      {
        playerName: playerName,
        quizScore: quizScore,
        quizSelection: quizSelection,
      },
    ])
  }

  const saveScore = () => (
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
    <div className='component_show-score'>
      <h2>Score: {quizScore}</h2>
      {saveScore()}
    </div>
  )
}

export default ShowScore
