import './home.styles.scss'
import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'
import SelectionForm from '../../components/selection-form/selection-form.comp'

const Home = () => {
  const { quizSelection, setQuizSelection } = useContext(QuizQuestionsContext)

  // console.log(quizSelection)

  return (
    <div className='home-page-container'>
      <h1>Home</h1>
      <SelectionForm />
    </div>
  )
}

export default Home
