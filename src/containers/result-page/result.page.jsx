import './result.styles.scss'
import { useContext, useEffect } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import ListQuestions from '../../components/list-questions/list-questions.comp'

const Result = () => {
  const { setCanShowResults } = useContext(QuizQuestionsContext)

  useEffect(() => {
    setCanShowResults(true)
  }, [])

  return (
    <div className='result-page-container'>
      <h1>Results</h1>
      <ListQuestions />
    </div>
  )
}

export default Result
