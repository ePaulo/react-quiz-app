import './quiz.styles.scss'

import { useContext } from 'react'
import { QuestionsContext } from '../../contexts/questions.context'

import Question from '../../components/question-comp/question.comp'

const Quiz = () => {
  console.log('Quiz page opened') // LOG

  const { questions } = useContext(QuestionsContext)

  if (!questions.length) {
    // console.log('no questions') // !LOG
    return null
  }

  const displayQuestions = questions.map((question, index) => {
    return <Question key={index} queIndex={index} />
  })

  return (
    <div className='quiz-page-container'>
      <h1>Quiz</h1>
      <div className='questions'>{displayQuestions}</div>
    </div>
  )
}

export default Quiz
