import './question.styles.scss'

import { useContext } from 'react'
import { decode } from 'html-entities'

import { QuestionsContext } from '../../contexts/questions.context'

const Question = ({ queIndex }) => {
  const { questions, answers, setAnswers } = useContext(QuestionsContext)

  const { question, correct_answer, incorrect_answers } = questions[queIndex]
  // console.log({ correct_answer }) // !LOG
  const sortedAnswers = [correct_answer, ...incorrect_answers].sort()

  const selectAnswer = () => {
    console.log({ sortedAnswers })
    console.log({ answers })
    const existingAnswer = answers.find(answer => console.log(answer)) // LOG
    // TODO store selected answer into answers-context with reference id for the question and it's index number within the sorted array of m/c answers.
  }

  const displayAnswers = sortedAnswers.map((answer, index) => (
    <button key={index} type='button' className='answer' onClick={selectAnswer}>
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
