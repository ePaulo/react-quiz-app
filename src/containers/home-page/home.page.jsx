import './home.styles.scss'
import { useContext } from 'react'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

const Home = () => {
  console.log('Home page loaded') // LOG
  const { quizQuestions } = useContext(QuizQuestionsContext)

  return (
    <div className='home-page-container'>
      <h1>Home</h1>
      <div>Form to capture quiz selection options goes here</div>
    </div>
  )
}

export default Home
