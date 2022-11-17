import { createContext, useState, useEffect } from 'react'

const QuestionsContext = createContext({
  selection: {},
  setSelection: () => {},
  questions: [],
  setQuestions: () => [],
  answers: [],
  setAnswers: () => [],
})

const QuestionsProvider = ({ children }) => {
  const [selection, setSelection] = useState({})
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const {
      amount: amt = '10',
      category: cat = '9',
      difficulty: diff = 'easy',
      type = 'multiple',
    } = selection

    const url = 'https://opentdb.com/api.php'
    const query = `?amount=${amt}&category=${cat}&difficulty=${diff}&type=${type}`

    fetch(url + query)
      .then(response => response.json())
      .then(data => {
        if (data.response_code === 0) {
          setQuestions(data.results)
          setAnswers([])
        } else {
          throw new Error('data response error')
        }
      })
      .catch(errMsg => console.error(errMsg))
  }, [selection])

  useEffect(() => {
    console.log({ answers }) // LOG
  }, [answers])

  const value = {
    selection,
    setSelection,
    questions,
    setQuestions,
    answers,
    setAnswers,
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

export { QuestionsContext, QuestionsProvider }
