import './list-questions.styles.scss'

import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ShowQuestion from '../show-question/show-question.comp'

const ListQuestions = () => {
  const { quizQuestions } = useContext(QuizQuestionsContext)

  if (!quizQuestions.length) {
    console.log('Waiting for Trivia data from API') // LOG
    return <div>...loading</div>
  }

  const displayQuizQuestions = quizQuestions.map((quizQuestion, index) => {
    return <ShowQuestion key={index} quizQuestionId={index} />
  })

  return <div className='list-questions-component'>{displayQuizQuestions}</div>
}

export default ListQuestions
