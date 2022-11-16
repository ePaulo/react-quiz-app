import { createContext, useState, useEffect } from 'react'

const QuestionsContext = createContext({
  selection: {},
  setSelection: () => {},
  questions: [],
  setQuestions: () => [],
})

const QuestionsProvider = ({ children }) => {
  const [selection, setSelection] = useState({})
  const [questions, setQuestions] = useState([])

  // TODO add answers & setAnswers useState

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
          // console.log(data.results) // !LOG
          setQuestions(data.results)
        } else {
          throw new Error('data response error')
        }
      })
      .catch(errMsg => console.error(errMsg))
  }, [selection])

  const value = { selection, setSelection, questions, setQuestions }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

export { QuestionsContext, QuestionsProvider }
