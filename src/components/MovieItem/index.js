import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  console.log(thumbnailUrl)
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <>
          <div>
            <ReactPlayer url={videoUrl} controls />
          </div>
          <button
            testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
