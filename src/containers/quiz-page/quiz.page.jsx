import './quiz.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'

const Quiz = () => {
  return (
    <div className='container__quiz-page'>
      <h1 className='title_quiz-page'>Quiz Game</h1>
      <ListQuestions container='quiz' />
    </div>
  )
}

export default Quiz
