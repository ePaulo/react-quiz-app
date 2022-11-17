import './question.styles.scss'

import { useState, useContext } from 'react'
import { decode } from 'html-entities'

import { QuestionsContext } from '../../contexts/questions.context'

const Question = ({ questionId }) => {
  const [selectedButton, setSelectedButton] = useState('')
  const { questions, answers, setAnswers } = useContext(QuestionsContext)

  const { question, correct_answer, incorrect_answers } = questions[questionId]
  const sortedAnswers = [correct_answer, ...incorrect_answers].sort()

  const selectAnswer = e => {
    // console.log(e.target) // !LOG
    const answerSelected = e.target.value
    const buttonSelected = e.target.id
    setSelectedButton(buttonSelected)

    const existingAnswer = answers.find(
      answer => answer.questionId === questionId
    )
    // console.log({ existingAnswer }) // !LOG

    if (!existingAnswer) {
      // console.log(`First answer chosen for Question# ${questionId}`) // !LOG
      setAnswers(prevAnswers => [
        ...prevAnswers,
        {
          questionId: questionId,
          selectedAnswer: answerSelected,
        },
      ])
    } else {
      // console.log(`Updated answer for Question# ${questionId}`) // !LOG
      const revisedAnswers = answers.map(answer =>
        answer.questionId === existingAnswer.questionId
          ? { questionId: questionId, selectedAnswer: answerSelected }
          : answer
      )
      setAnswers(revisedAnswers)
    }
  }

  const displayAnswers = sortedAnswers.map((answer, index) => {
    const btnId = `btn-${index}`
    const dynamicStyles =
      selectedButton === btnId
        ? { background: 'rgb(243, 169, 79)' }
        : { background: 'rgb(212, 180, 130)' }

    return (
      <button
        id={btnId}
        className='answer'
        type='button'
        key={index}
        value={decode(answer)}
        onClick={selectAnswer}
        style={dynamicStyles}
      >
        {decode(answer)}
      </button>
    )
  })

  return (
    <div className='question-comp'>
      <h3 className='question'>{decode(question)}</h3>
      <div className='answers'>{displayAnswers}</div>
    </div>
  )
}

export default Question
