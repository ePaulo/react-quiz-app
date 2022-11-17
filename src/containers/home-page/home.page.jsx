import './home.styles.scss'
import { useContext } from 'react'
import { QuestionsContext } from '../../contexts/questions.context'

const Home = () => {
  console.log('Home page loaded') // LOG
  const { questions } = useContext(QuestionsContext)

  return (
    <div className='home-page-container'>
      <h1>Home</h1>
      <div>Form to capture selection variables for questions go here</div>
    </div>
  )
}

export default Home
