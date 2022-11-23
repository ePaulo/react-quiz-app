import './list-scores.styles.scss'

// import { useContext } from 'react'
import MaterialTable from '@material-table/core'
// import { QuizQuestionsContext } from '../../contexts/quiz-questions.context'
import { categoryOptions } from '../selection-form/form-select.options'

const ListScores = () => {
  const savedQuizScores = JSON.parse(localStorage.getItem('quizScores'))

  if (!savedQuizScores) {
    return (
      <div className='component__list-scores'>
        <p className='no-saved-scores'>No saved Quiz scores</p>
      </div>
    )
  }

  const columns = [
    { title: 'Date', field: 'dateStr' },
    { title: 'Time', field: 'timeStr' },
    { title: 'Category', field: 'categoryLabel' },
    { title: 'Level', field: 'difficulty' },
    { title: 'Player', field: 'playerName' },
    { title: 'Correct', field: 'correctRatio' },
    { title: 'Score', field: 'scoreRatio' },
  ]

  const rows = savedQuizScores.map((scoreInfo, id) => {
    const {
      dateStr,
      timeStr,
      playerName,
      totalCorrect,
      totalScore,
      quizSelection,
    } = scoreInfo
    const { amount, category, difficulty } = quizSelection

    // convert category id value to label name
    const categoryLabel = categoryOptions.find(
      optionInfo => optionInfo.value === category
    ).label

    const correctRatio = `${totalCorrect} / ${amount}`
    const scoreRatio = `${totalScore} / ${amount * 2}`

    return {
      id,
      dateStr,
      timeStr,
      categoryLabel,
      difficulty,
      playerName,
      correctRatio,
      scoreRatio,
    }
  })

  const styleOptions = {
    toolbar: true,
    showTitle: true,
    search: false,
    paging: false,
    tableLayout: 'auto',
    maxColumnSort: 1,
    addRowPosition: 'last',
    padding: 'dense',
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

  const components = {
    Container: props => <div className='list-scores'>{props.children}</div>,
  }

  return (
    <div className='container__list-scores'>
      <MaterialTable
        columns={columns}
        data={rows}
        title='Note: click column title to reorder rows'
        options={styleOptions}
        components={components}
      />
    </div>
  )
}

export default ListScores
