import './quiz.styles.scss'

import { useContext, useEffect } from 'react'
import { QuestionsContext } from '../../contexts/questions.context'

import Question from '../../components/question-comp/question.comp'

const Quiz = () => {
  console.log('Quiz page loaded') // LOG

  const { questions } = useContext(QuestionsContext)

  if (!questions.length) {
    console.log('Waiting for Trivia data from API') // LOG
    return <div>...loading</div>
  }

  const displayQuestions = questions.map((question, index) => {
    return <Question key={index} questionId={index} />
  })

  return (
    <div className='quiz-page-container'>
      <h1>Quiz</h1>
      <div className='questions'>{displayQuestions}</div>
    </div>
  )
}

export default Quiz
