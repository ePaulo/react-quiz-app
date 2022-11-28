import './show-question.styles.scss'
import { decode } from 'html-entities'
import { useState, useContext, useEffect } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ChoiceButton from './choice-button.comp'

const ShowQuestion = ({
  queId,
  queQuestion,
  queChoices,
  queAnswer,
  showResult,
}) => {
  const { quizGameActive, playerAnswers, setPlayerAnswers } =
    useContext(QuizQuestionsContext)

  const [playerChoice, setPlayerChoice] = useState(() => {
    return (
      playerAnswers.find(playerAnswer => playerAnswer.queId === queId)
        ?.playerChoice || ''
    )
  })

  useEffect(() => {
    if (playerChoice) {
      const previousPlayerChoice = playerAnswers.find(
        playerAnswer => playerAnswer.queId === queId
      )

      if (!previousPlayerChoice) {
        setPlayerAnswers(prevPlayerAnswers => [
          ...prevPlayerAnswers,
          {
            queId,
            playerChoice,
          },
        ])
      } else {
        const revisedPlayerAnswers = playerAnswers.map(playerAnswer =>
          playerAnswer.queId === queId
            ? {
                queId,
                playerChoice,
              }
            : playerAnswer
        )
        setPlayerAnswers(revisedPlayerAnswers)
      }
    }
  }, [playerChoice])

  const displayChoices = queChoices.map((queChoice, index) => {
    return (
      <ChoiceButton
        key={index}
        queChoice={queChoice}
        queAnswer={queAnswer}
        showResult={showResult}
        gameOver={!quizGameActive}
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
      />
    )
  })

  return (
    <div className='component__show-question'>
      <h3 className='question'>{decode(queQuestion)}</h3>
      <div className='choices'>{displayChoices}</div>
    </div>
  )
}

export default ShowQuestion
