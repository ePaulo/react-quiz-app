import './selection-form.styles.scss'
import {
  categoryOptions,
  difficultyOptions,
  typeOptions,
} from './selection-form.options'
import React from 'react'
import Select from 'react-select'

const selectStyles = {
  control: styles => ({
    ...styles,
    outline: 'none',
    backgroundColor: 'goldenrod',
    border: '3px solid rgb(172, 130, 24)',
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: '0 3px',
    border: '2px solid rgb(253, 252, 249)',
    backgroundColor: isSelected
      ? 'rgb(172, 130, 24)'
      : isFocused
      ? 'rgb(209, 171, 74)'
      : 'rgb(253, 252, 249)',
    color: 'rgb(41, 41, 41)',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgb(41, 41, 41)',
  }),
}

const SelectionForm = () => {
  return (
    <div className='selection-form-component'>
      <form>
        {/* <label>
          Number of Questions:
          <input
            type='number'
            name='trivia_amount'
            id='trivia_amount'
            class='form-control'
            min='1'
            max='50'
            // value='10'
          />
        </label> */}

        <Select
          name='category'
          className='category'
          defaultValue={categoryOptions[1]}
          placeholder='Select Category:'
          options={categoryOptions}
          styles={selectStyles}
        />

        <Select
          name='difficulty'
          className='difficulty'
          defaultValue={difficultyOptions[1]}
          placeholder='Select Difficulty:'
          options={difficultyOptions}
          styles={selectStyles}
        />

        <Select
          name='type'
          className='type'
          defaultValue={typeOptions[1]}
          placeholder='Select Type:'
          options={typeOptions}
          styles={selectStyles}
        />

        <button type='submit' className='start-quiz-button'>
          Start Quiz
        </button>
      </form>
    </div>
  )
}

export default SelectionForm
