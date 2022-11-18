import './quiz.styles.scss'
import { useContext, useEffect } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ListQuestions from '../../components/list-questions/list-questions.comp'

const Quiz = () => {
  const { setCanShowResults } = useContext(QuizQuestionsContext)

  useEffect(() => {
    setCanShowResults(false)
  }, [])

  return (
    <div className='quiz-page-container'>
      <h1>Quiz</h1>
      <ListQuestions />
    </div>
  )
}

export default Quiz
