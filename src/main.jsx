import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QuizQuestionsProvider } from './contexts/quiz-questions.context'

import App from './App'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizQuestionsProvider>
        <App />
      </QuizQuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
