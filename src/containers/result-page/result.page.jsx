import './result.styles.scss'
import ListQuestions from '../../components/list-questions/list-questions.comp'

const Result = () => {
  return (
    <div className='result-page-container'>
      <h1>Results</h1>
      <ListQuestions container='result' />
    </div>
  )
}

export default Result
