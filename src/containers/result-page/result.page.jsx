import './result.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'
import ShowScore from '../../components/show-score/show-score.comp'

const Result = () => {
  return (
    <div className='container_result-page'>
      <h1>Result</h1>
      <ShowScore />
      <ListQuestions container='result' />
    </div>
  )
}

export default Result
