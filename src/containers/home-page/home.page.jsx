import SelectionForm from '../../components/selection-form/selection-form.comp'

import './home.styles.scss'

const Home = () => {
  return (
    <div className='container__home-page'>
      <h1 className='title_home-page'>Select Your Quiz</h1>
      <SelectionForm />
    </div>
  )
}

export default Home
