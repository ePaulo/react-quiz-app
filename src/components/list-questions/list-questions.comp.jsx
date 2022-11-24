import './list-questions.styles.scss'

import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ShowQuestion from '../show-question/show-question.comp'

const ListQuestions = ({ container }) => {
  const { quizQuestions, playerAnswers } = useContext(QuizQuestionsContext)

  if (container === 'quiz' && !quizQuestions.length) {
    return (
      <div className='component__list-questions'>
        <p className='no-quiz-questions'>No quiz questions</p>
      </div>
    )
  }

  if (container === 'result' && !playerAnswers.length) {
    return (
      <div className='component__list-questions'>
        <p className='no-player-answers'>No player answers</p>
      </div>
    )
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
