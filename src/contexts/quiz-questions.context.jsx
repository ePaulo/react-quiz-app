import { createContext, useState, useEffect } from 'react'

const QuizQuestionsContext = createContext()

const QuizQuestionsProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])
  const [playerTime, setPlayerTime] = useState(0)
  const [quizStartTime, setQuizStartTime] = useState(0)
  const [quizDuration, setQuizDuration] = useState(0)
  const [quizGameActive, setQuizGameActive] = useState(false)
  const [quizSelection, setQuizSelection] = useState(() => ({
    amount: '0',
    category: 'any',
    difficulty: 'easy',
    type: 'multiple',
  }))

  useEffect(() => {
    const { amount, category, difficulty, type } = quizSelection

    const url = 'https://opentdb.com/api.php'
    const query = `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

    fetch(url + query)
      .then(response => response.json())
      .then(data => {
        if (data.response_code === 0) {
          setQuizQuestions(data.results)
          setQuizStartTime(new Date().getTime())
          setQuizDuration(amount * 10000)
          setQuizGameActive(true)
          setPlayerAnswers([])
          setPlayerTime(0)
        } else if (data.response_code === 2) {
          console.log('Quiz questions loading')
        } else {
          throw new Error('data response error')
        }
      })
      .catch(errMsg => console.error(errMsg))
  }, [quizSelection])

  const value = {
    quizSelection,
    setQuizSelection,
    quizQuestions,
    setQuizQuestions,
    playerAnswers,
    setPlayerAnswers,
    playerTime,
    setPlayerTime,
    quizStartTime,
    setQuizStartTime,
    quizDuration,
    setQuizDuration,
    quizGameActive,
    setQuizGameActive,
  }

  return (
    <QuizQuestionsContext.Provider value={value}>
      {children}
    </QuizQuestionsContext.Provider>
  )
}

export { QuizQuestionsContext, QuizQuestionsProvider }
