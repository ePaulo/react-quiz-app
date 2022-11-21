import './show-question.styles.scss'
import { decode } from 'html-entities'
import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

// TODO for Result page, calculate and show score.
// TODO next, display a form for saving name and details.

const ShowQuestion = ({ quizQuestionId, showResult }) => {
  const { quizQuestions, playerAnswers, setPlayerAnswers } =
    useContext(QuizQuestionsContext)

  const { question, correct_answer, incorrect_answers } =
    quizQuestions[quizQuestionId]

  const sortedMultipleChoices = [correct_answer, ...incorrect_answers].sort()

  // ---------- ===START=== handle button click ----------
  const handleClickQuestionChoice = event => {
    if (showResult) return // cannot change choice if showing result

    const playerSelectedChoice = event.target.value

    const existingPlayerAnswer = playerAnswers.find(
      playerAnswer => playerAnswer.questionId === quizQuestionId
    )

    if (!existingPlayerAnswer) {
      setPlayerAnswers(prevPlayerAnswers => [
        ...prevPlayerAnswers,
        {
          questionId: quizQuestionId,
          playerChoice: playerSelectedChoice,
        },
      ])
    } else {
      const revisedPlayerAnswers = playerAnswers.map(playerAnswer =>
        playerAnswer.questionId === existingPlayerAnswer.questionId
          ? {
              questionId: quizQuestionId,
              playerChoice: playerSelectedChoice,
            }
          : playerAnswer
      )
      setPlayerAnswers(revisedPlayerAnswers)
    }
  }
  // ---------- !==END!== handle button click ----------

  // ---------- ===START=== display multiple choices ----------
  // console.log({ showResult }) // !LOG
  // console.log({ correct_answer }) // !LOG
  const displayMultipleChoices = sortedMultipleChoices.map(
    (multipleChoice, index) => {
      // console.log({ multipleChoice }) // !LOG
      // console.log(playerAnswers[quizQuestionId]?.playerChoice) // !LOG
      // console.log('---------------------') // !LOG

      let selectedStyles = {}
      if (multipleChoice === playerAnswers[quizQuestionId]?.playerChoice) {
        selectedStyles = {
          backgroundColor: 'rgb(243, 169, 79)',
          fontWeight: 'bold',
          border: '4px solid orange',
          color: 'black',
        }
        if (showResult) {
          if (multipleChoice === correct_answer) {
            selectedStyles = {
              ...selectedStyles,
              border: '5px solid green',
              color: 'green',
            }
          } else {
            // player's choice is incorrect
            selectedStyles = {
              ...selectedStyles,
              border: '4px solid orangered',
              color: 'orangered',
            }
          }
        }
      }

      return (
        <button
          key={index}
          type='button'
          className='choice'
          value={multipleChoice}
          onClick={handleClickQuestionChoice}
          style={selectedStyles}
        >
          {decode(multipleChoice)}
        </button>
      )
    }
  )
  // ---------- !==END!== display multiple choices ----------

  return (
    <div className='component_show-question'>
      <h3 className='question'>{decode(question)}</h3>
      <div className='choices'>{displayMultipleChoices}</div>
    </div>
  )
}

export default ShowQuestion
