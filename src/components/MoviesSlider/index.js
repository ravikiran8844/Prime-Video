import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {details} = props

  return (
    <div className="sliderContainer">
      <MovieItem details={details} />
    </div>
  )
}
export default MoviesSlider
