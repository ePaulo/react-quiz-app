import './list-questions.styles.scss'

import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ShowQuestion from '../show-question/show-question.comp'

const ListQuestions = ({ container }) => {
  const { quizQuestions, playerAnswers } = useContext(QuizQuestionsContext)

  if (!quizQuestions.length) {
    console.log('Waiting for Trivia data from API')
    return <div>...loading</div>
  }

  if (container === 'result' && !playerAnswers.length) {
    console.log('No player answers')
    return <div>No player answers</div>
  }

  const displayQuizQuestions = quizQuestions.map((quizQuestion, index) => {
    return (
      <ShowQuestion
        key={index}
        quizQuestionId={index}
        showResult={container === 'result'}
      />
    )
  })

  return <div className='component__list-questions'>{displayQuizQuestions}</div>
}

export default ListQuestions
