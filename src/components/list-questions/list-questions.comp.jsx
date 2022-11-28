import './list-questions.styles.scss'

import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ShowQuestion from '../show-question/show-question.comp'

const ListQuestions = ({ container }) => {
  const { quizQuestions } = useContext(QuizQuestionsContext)

  if (!quizQuestions.length) {
    return (
      <div className='component__list-questions'>
        <p className='no-quiz-questions'>No quiz questions</p>
      </div>
    )
  }

  const displayQuestions = quizQuestions.map((quizQuestion, queId) => {
    const { question, correct_answer, incorrect_answers } = quizQuestion
    const choices = [correct_answer, ...incorrect_answers].sort()

    return (
      <ShowQuestion
        key={queId}
        queId={queId}
        queQuestion={question}
        queChoices={choices}
        queAnswer={correct_answer}
        showResult={container === 'result'}
      />
    )
  })

  return <div className='component__list-questions'>{displayQuestions}</div>
}

export default ListQuestions
