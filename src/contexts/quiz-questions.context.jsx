import { createContext, useState, useEffect } from 'react'

const QuizQuestionsContext = createContext({
  quizSelection: {},
  setQuizSelection: () => {},
  quizQuestions: [],
  setQuizQuestions: () => [],
  playerAnswers: [],
  setPlayerAnswers: () => [],
  allQuizScores: [],
  setAllQuizScores: () => [],
})

const QuizQuestionsProvider = ({ children }) => {
  const [quizSelection, setQuizSelection] = useState({})
  const [quizQuestions, setQuizQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])
  const [allQuizScores, setAllQuizScores] = useState([])

  useEffect(() => {
    const {
      amount: amt = '2',
      category: cat = '9',
      difficulty: diff = 'easy',
      type = 'multiple',
    } = quizSelection

    const url = 'https://opentdb.com/api.php'
    const query = `?amount=${amt}&category=${cat}&difficulty=${diff}&type=${type}`

    fetch(url + query)
      .then(response => response.json())
      .then(data => {
        if (data.response_code === 0) {
          setQuizQuestions(data.results)
          setPlayerAnswers([])
        } else {
          throw new Error('data response error')
        }
      })
      .catch(errMsg => console.error(errMsg))
  }, [quizSelection])

  useEffect(() => {
    if (playerAnswers.length) {
      console.log({ playerAnswers }) // LOG
    }
  }, [playerAnswers])

  const value = {
    quizSelection,
    setQuizSelection,
    quizQuestions,
    setQuizQuestions,
    playerAnswers,
    setPlayerAnswers,
    allQuizScores,
    setAllQuizScores,
  }

  return (
    <QuizQuestionsContext.Provider value={value}>
      {children}
    </QuizQuestionsContext.Provider>
  )
}

export { QuizQuestionsContext, QuizQuestionsProvider }
