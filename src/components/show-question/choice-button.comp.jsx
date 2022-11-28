import './choice-button.styles.scss'
import { decode } from 'html-entities'

const ChoiceButton = ({
  queChoice,
  queAnswer,
  showResult,
  gameOver,
  playerChoice,
  setPlayerChoice,
}) => {
  const handleClickChoice = event => setPlayerChoice(event.target.value)

  let selectedStyles = {}
  if (playerChoice) {
    if (playerChoice === queChoice) {
      selectedStyles = {
        backgroundColor: 'rgb(243, 169, 79)',
        fontWeight: 'bold',
        border: '4px solid orange',
        color: 'black',
      }
      if (showResult) {
        if (playerChoice === queAnswer) {
          selectedStyles = {
            ...selectedStyles,
            border: '5px solid green',
            color: 'green',
          }
        } else {
          // player's choice is incorrect
          selectedStyles = {
            ...selectedStyles,
            border: '4px solid orangered',
            color: 'orangered',
          }
        }
      }
    }
  }

  return (
    <button
      type='button'
      className='choice-button'
      value={queChoice}
      onClick={handleClickChoice}
      style={selectedStyles}
      disabled={gameOver}
    >
      {decode(queChoice)}
    </button>
  )
}

export default ChoiceButton
