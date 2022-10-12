import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import './index.css'
import 'slick-carousel/slick/slick.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div className="container">
      <img
        className="prime"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <Slider {...settings}>
          {moviesList
            .filter(each => each.categoryId === 'ACTION')
            .map(each => (
              <MoviesSlider key={each.id} details={each} />
            ))}
        </Slider>
      </div>
      <div>
        <h1>Comedy Movies</h1>
        <Slider {...settings}>
          {moviesList
            .filter(each => each.categoryId === 'COMEDY')
            .map(each => (
              <MoviesSlider key={each.id} details={each} />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
