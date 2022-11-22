import './scores.styles.scss'

import ListScores from '../../components/list-scores/list-scores.comp'

// TODO button to (re)store quiz scores in local storage

const Scores = () => {
  // console.log('Scores page loaded') // !LOG
  return (
    <div className='container_scores-page'>
      <h1>Scores</h1>
      <ListScores />
    </div>
  )
}

export default Scores
