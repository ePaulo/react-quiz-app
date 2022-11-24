import './home.styles.scss'
import SelectionForm from '../../components/selection-form/selection-form.comp'

const Home = () => {
  return (
    <div className='container__home-page'>
      <h1 className='title_home-page'>Quiz Selection</h1>
      <SelectionForm />
    </div>
  )
}

export default Home
