import './quiz.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'

const Quiz = () => {
  return (
    <div className='quiz-page-container'>
      <h1>Quiz</h1>
      <ListQuestions container='quiz' />
    </div>
  )
}

export default Quiz
