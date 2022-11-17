import './app.scss'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/navigation/nav.comp'

import Home from './containers/home-page/home.page'
import Quiz from './containers/quiz-page/quiz.page'
import Result from './containers/result-page/result.page'
import Score from './containers/score-page/score.page'

function App() {
  return (
    <div className='app-container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </div>
  )
}

export default App
