import './question.styles.scss'

import { useContext } from 'react'
import { decode } from 'html-entities'

import { QuestionsContext } from '../../contexts/questions.context'

const Question = ({ queIndex }) => {
  const { questions } = useContext(QuestionsContext)
  const { question, correct_answer, incorrect_answers } = questions[queIndex]
  console.log({ correct_answer }) // LOG
  const sortedAnswers = [correct_answer, ...incorrect_answers].sort()
  const displayAnswers = sortedAnswers.map((answer, index) => (
    <button type='button' className='answer' key={index}>
      {answer}
    </button>
  ))

  return (
    <div className='question-comp'>
      <h3 className='question'>{decode(question)}</h3>
      <div className='answers'>{displayAnswers}</div>
    </div>
  )
}

export default Question
