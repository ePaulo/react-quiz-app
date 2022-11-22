import './list-scores.styles.scss'

import { useContext } from 'react'
import MaterialTable from '@material-table/core'
import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'
import { categoryOptions } from '../selection-form/form-select.options'

const ListScores = () => {
  const { allQuizScores } = useContext(QuizQuestionsContext)
  console.log({ allQuizScores }) // LOG
  console.log({ categoryOptions }) // LOG

  if (!allQuizScores.length) {
    return <div>No saved Quiz scores</div>
  }

  const columns = [
    { title: 'Category', field: 'categoryLabel' },
    { title: 'Type', field: 'type' },
    { title: 'Difficulty', field: 'difficulty' },
    { title: 'Questions', field: 'amount' },
    { title: 'Player', field: 'playerName' },
    { title: 'Score', field: 'quizScore' },
  ]

  const rows = allQuizScores.map((scoreInfo, id) => {
    const { playerName, quizScore, quizSelection } = scoreInfo
    const { amount, category, difficulty, type } = quizSelection

    const categoryLabel = categoryOptions.find(
      optionInfo => optionInfo.value === category
    ).label

    return {
      id,
      playerName,
      quizScore,
      amount,
      categoryLabel,
      difficulty,
      type,
    }
  })

  const styleOptions = {
    toolbar: false,
    showTitle: false,
    search: false,
    paging: false,
    tableLayout: 'auto',
    maxColumnSort: 1,
    headerStyle: {
      backgroundColor: 'rgb(225, 195, 40)',
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    rowStyle: rowData => ({
      backgroundColor:
        rowData.id % 2 ? 'rgb(192, 150, 34)' : 'rgb(182, 140, 24)',
    }),
  }

  return (
    <div className='container_list-scores'>
      <MaterialTable
        columns={columns}
        data={rows}
        title='Quiz Scores'
        options={styleOptions}
      />
    </div>
  )
}

export default ListScores
