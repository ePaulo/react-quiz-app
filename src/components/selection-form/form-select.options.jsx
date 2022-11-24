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
  dropdownIndicator: styles => ({
    ...styles,
    color: 'rgb(41, 41, 41)',
  }),
}

const categoryOptions = [
  { id: 0, value: 'any', label: 'Any Category' },
  { id: 1, value: '9', label: 'General Knowledge' },
  { id: 2, value: '10', label: 'Entertainment: Books' },
  { id: 3, value: '11', label: 'Entertainment: Film' },
  { id: 4, value: '12', label: 'Entertainment: Music' },
  { id: 5, value: '13', label: 'Entertainment: Musicals and Theatres' },
  { id: 6, value: '14', label: 'Entertainment: Television' },
  { id: 7, value: '15', label: 'Entertainment: Video Games' },
  { id: 8, value: '16', label: 'Entertainment: Board Games' },
  { id: 9, value: '17', label: 'Science and Nature' },
  { id: 10, value: '18', label: 'Science: Computers' },
  { id: 11, value: '19', label: 'Science: Mathematics' },
  { id: 12, value: '20', label: 'Mythology' },
  { id: 13, value: '21', label: 'Sports' },
  { id: 14, value: '22', label: 'Geography' },
  { id: 15, value: '23', label: 'History' },
  { id: 16, value: '24', label: 'Politics' },
  { id: 17, value: '25', label: 'Art' },
  { id: 18, value: '26', label: 'Celebrities' },
  { id: 19, value: '27', label: 'Animals' },
  { id: 20, value: '28', label: 'Vehicles' },
  { id: 21, value: '29', label: 'Entertainment: Comics' },
  { id: 22, value: '30', label: 'Science: Gadgets' },
  { id: 23, value: '31', label: 'Entertainment: Japanese Anime and Manga' },
  { id: 24, value: '32', label: 'Entertainment: Cartoon and Animations' },
]

const difficultyOptions = [
  { id: 0, value: 'any', label: 'Any Difficulty' },
  { id: 1, value: 'easy', label: 'Easy' },
  { id: 2, value: 'medium', label: 'Medium' },
  { id: 3, value: 'hard', label: 'Hard' },
]

const typeOptions = [
  { id: 0, value: 'any', label: 'Any Type' },
  { id: 1, value: 'multiple', label: 'Multiple Choice' },
  { id: 2, value: 'boolean', label: 'True / False' },
]

export { selectStyles, categoryOptions, difficultyOptions, typeOptions }
