import './result.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'
import ShowScore from '../../components/show-score/show-score.comp'
import QuizTimer from '../../components/quiz-timer/quiz-timer.comp'

const Result = () => {
  return (
    <div className='container__result-page'>
      <h1 className='title_result-page'>Save Your Results</h1>
      <ShowScore container='result' />
      <QuizTimer container='result' />
      <ListQuestions container='result' />
    </div>
  )
}

export default Result
