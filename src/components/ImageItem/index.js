import './index.css'

const ImageItem = props => {
  const {imageDetails, checkImgId} = props
  const {thumbnailUrl, id} = imageDetails
  const imageClicked = () => {
    checkImgId(id)
  }

  return (
    <li>
      <button type="button" className="img-btn-css">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
          onClick={imageClicked}
        />
      </button>
    </li>
  )
}
export default ImageItem
