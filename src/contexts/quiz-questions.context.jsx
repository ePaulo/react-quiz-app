import { createContext, useState, useEffect } from 'react'

const QuizQuestionsContext = createContext({
  quizSelection: {},
  setQuizSelection: () => {},
  quizQuestions: [],
  setQuizQuestions: () => [],
  playerAnswers: [],
  setPlayerAnswers: () => [],
})

const QuizQuestionsProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])
  const [quizSelection, setQuizSelection] = useState(() => ({
    amount: '5',
    category: '9',
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
          setPlayerAnswers([])
        } else {
          // throw new Error('data response error') // !LOG
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
  }

  return (
    <QuizQuestionsContext.Provider value={value}>
      {children}
    </QuizQuestionsContext.Provider>
  )
}

export { QuizQuestionsContext, QuizQuestionsProvider }
