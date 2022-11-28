import './app.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navigation/navigation.comp'
import Home from './containers/home-page/home.page'
import Quiz from './containers/quiz-page/quiz.page'
import Result from './containers/result-page/result.page'
import Scores from './containers/scores-page/scores.page'
import NotFound from './containers/not-found-page/not-found.comp'

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
