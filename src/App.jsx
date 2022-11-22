import './app.scss'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/navigation/navigation.comp'

import Home from './containers/home-page/home.page'
import Quiz from './containers/quiz-page/quiz.page'
import Result from './containers/result-page/result.page'
import Scores from './containers/scores-page/scores.page'

function App() {
  return (
    <div className='app-container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/result' element={<Result />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App
