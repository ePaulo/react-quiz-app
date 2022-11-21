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
  const [quizQuestions, setQuizQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])
  const [allQuizScores, setAllQuizScores] = useState([])
  const [quizSelection, setQuizSelection] = useState(() => ({
    amount: '10',
    category: '9',
    difficulty: 'easy',
    type: 'multiple',
  }))

  useEffect(() => {
    const { amount, category, difficulty, type } = quizSelection

    const url = 'https://opentdb.com/api.php'
    const query = `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

    // console.log(quizSelection) // !LOG
    // console.log(url + query) // !LOG

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

  useEffect(() => {
    if (playerAnswers.length) {
      // console.log({ playerAnswers }) // !LOG
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
