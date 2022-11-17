import './quiz.styles.scss'

import Questions from '../../components/list-questions/questions.comp'

const Quiz = () => {
  return (
    <div className='quiz-page-container'>
      <h1>Quiz</h1>
      <Questions />
    </div>
  )
}

export default Quiz
