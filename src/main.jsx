import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QuestionsProvider } from './contexts/questions.context'

import App from './App'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// add questions context provider // TODO
