import './questions.styles.scss'

import { useContext } from 'react'
import { QuestionsContext } from '../../contexts/questions.context'

import Question from '../../components/show-question/question.comp'

const Questions = () => {
  const { questions } = useContext(QuestionsContext)

  if (!questions.length) {
    console.log('Waiting for Trivia data from API') // LOG
    return <div>...loading</div>
  }

  const displayQuestions = questions.map((question, index) => {
    return <Question key={index} questionId={index} />
  })

  return <div className='questions-component'>{displayQuestions}</div>
}

export default Questions
