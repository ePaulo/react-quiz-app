const selectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? 'rgb(209, 171, 74)' : 'goldenrod',
    border: isFocused ? '3px solid goldenrod' : '3px solid rgb(172, 130, 24)',
    boxShadow: 'none',
    '&:hover': { outline: 'none' },
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
    ':active': { backgroundColor: 'rgb(255, 195, 42)' },
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgb(41, 41, 41)',
  }),
}

const categoryOptions = [
  { value: 'any', label: 'Any Category' },
  { value: '9', label: 'General Knowledge' },
  { value: '10', label: 'Entertainment: Books' },
  { value: '11', label: 'Entertainment: Film' },
  { value: '12', label: 'Entertainment: Music' },
  { value: '13', label: 'Entertainment: Musicals and Theatres' },
  { value: '14', label: 'Entertainment: Television' },
  { value: '15', label: 'Entertainment: Video Games' },
  { value: '16', label: 'Entertainment: Board Games' },
  { value: '17', label: 'Science and Nature' },
  { value: '18', label: 'Science: Computers' },
  { value: '19', label: 'Science: Mathematics' },
  { value: '20', label: 'Mythology' },
  { value: '21', label: 'Sports' },
  { value: '22', label: 'Geography' },
  { value: '23', label: 'History' },
  { value: '24', label: 'Politics' },
  { value: '25', label: 'Art' },
  { value: '26', label: 'Celebrities' },
  { value: '27', label: 'Animals' },
  { value: '28', label: 'Vehicles' },
  { value: '29', label: 'Entertainment: Comics' },
  { value: '30', label: 'Science: Gadgets' },
  { value: '31', label: 'Entertainment: Japanese Anime and Manga' },
  { value: '32', label: 'Entertainment: Cartoon and Animations' },
]

const difficultyOptions = [
  { value: 'any', label: 'Any Difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
]

const typeOptions = [
  { value: 'any', label: 'Any Type' },
  { value: 'multiple', label: 'Multiple Choice' },
  { value: 'boolean', label: 'True / False' },
]

export { selectStyles, categoryOptions, difficultyOptions, typeOptions }
