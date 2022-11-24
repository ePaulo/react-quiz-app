import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'

import {
  selectStyles,
  categoryOptions,
  difficultyOptions,
  typeOptions,
} from './form-select.options'

import './selection-form.styles.scss'

const SelectionForm = () => {
  const [quizAmount, setQuizAmount] = useState('')
  const [quizCategory, setQuizCategory] = useState(null)
  const [quizDifficulty, setQuizDifficulty] = useState(null)
  const [quizType, setQuizType] = useState(null)

  const { setQuizSelection } = useContext(QuizQuestionsContext)
  const navigate = useNavigate()

  const handleChangeAmount = event => setQuizAmount(event.target.value)
  const handleSelectCategory = choice => setQuizCategory(choice)
  const handleSelectDifficulty = choice => setQuizDifficulty(choice)
  const handleSelectType = choice => setQuizType(choice)

  const handleFormSubmit = event => {
    event.preventDefault()

    if (quizAmount && quizCategory && quizDifficulty && quizType) {
      setQuizSelection({
        amount: quizAmount,
        category: quizCategory.value,
        difficulty: quizDifficulty.value,
        type: quizType.value,
      })
      navigate('/quiz')
    } else {
      alert('Please select all options')
    }
  }

  return (
    <div className='component__selection-form'>
      <form className='selection-form' onSubmit={handleFormSubmit}>
        <input
          type='number'
          name='quizAmount'
          className='input_quiz-amount'
          min='1'
          max='50'
          placeholder='Enter number of questions'
          value={quizAmount}
          onChange={handleChangeAmount}
          required={true}
        />

        <Select
          name='quizCategory'
          className='select_quiz-parameter'
          defaultValue={categoryOptions[0]}
          placeholder='Select Category:'
          options={categoryOptions}
          styles={selectStyles}
          value={quizCategory}
          onChange={handleSelectCategory}
          required={true}
        />

        <Select
          name='quizDifficulty'
          className='select_quiz-parameter'
          defaultValue={difficultyOptions[0]}
          placeholder='Select Difficulty:'
          options={difficultyOptions}
          styles={selectStyles}
          value={quizDifficulty}
          onChange={handleSelectDifficulty}
          required={true}
        />

        <Select
          name='quizType'
          className='select_quiz-parameter'
          defaultValue={typeOptions[1]}
          placeholder='Select Type:'
          options={typeOptions}
          styles={selectStyles}
          value={quizType}
          onChange={handleSelectType}
          required={true}
        />

        <button type='submit' className='button_quiz-start'>
          Start Quiz
        </button>
      </form>
    </div>
  )
}

export default SelectionForm
