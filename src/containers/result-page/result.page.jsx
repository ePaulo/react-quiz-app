import './result.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'
import ShowScore from '../../components/show-score/show-score.comp'

const Result = () => {
  return (
    <div className='container__result-page'>
      <h1 className='title_result-page'>Quiz Result</h1>
      <ShowScore />
      <ListQuestions container='result' />
    </div>
  )
}

export default Result
