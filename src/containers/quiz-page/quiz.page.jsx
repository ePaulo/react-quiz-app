import './quiz.styles.scss'
import ShowScore from '../../components/show-score/show-score.comp'
import QuizTimer from '../../components/quiz-timer/quiz-timer.comp'
import ListQuestions from '../../components/list-questions/list-questions.comp'

const Quiz = () => {
  return (
    <div className='container__quiz-page'>
      <h1 className='title_quiz-page'>Answer Quiz Questions</h1>
      <ShowScore container='quiz' />
      <QuizTimer container='quiz' />
      <ListQuestions container='quiz' />
    </div>
  )
}

export default Quiz
