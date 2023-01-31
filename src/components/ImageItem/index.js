import './index.css'

const ImageItem = props => {
  const {imageDetails, checkImgId} = props
  const {thumbnailUrl, id} = imageDetails
  const imageClicked = () => {
    checkImgId(id)
  }

  return (
    <li>
      <button onClick={imageClicked} type="button" className="img-btn-css">
        <img src={thumbnailUrl} alt="item-img" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ImageItem
