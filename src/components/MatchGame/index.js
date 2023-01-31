import {Component} from 'react'

import Navbar from '../Navbar'

import TabItem from '../TabItem'

import ImageItem from '../ImageItem'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = props

    this.state = {
      activeTabId: tabsList[0].tabId,
      gameImg: imagesList[0].imageUrl,
      gameImgId: imagesList[0].id,
      isGameOver: false,
      score: 0,
      timer: 60,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.getInterval, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  playAgain = () => {
    this.setState({isGameOver: false, timer: 60, score: 0})
    this.intervalId = setInterval(this.getInterval, 1000)
  }
  // componentWillUnmount(){
  // }

  checkImgId = id => {
    const {gameImgId} = this.state
    const {imagesList} = this.props

    if (gameImgId === id) {
      const index = Math.floor(Math.random() * imagesList.length)
      const imgLink = imagesList[index].imageUrl
      const imgId = imagesList[index].id

      this.setState({gameImg: imgLink, gameImgId: imgId})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      clearInterval(this.intervalId)
      this.setState({isGameOver: true})
    }
  }

  showGameOverCard = () => {
    const {score} = this.state

    return (
      <div className="game-over-main">
        <div className="game-over-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
            alt=" trophy"
            className="tropy-img"
          />
          <div className="scoring-container">
            <p className="your-score">YOUR SCORE</p>
            <p className="scoring">{score}</p>
            <button
              type="button"
              className="play-again-btn"
              onClick={this.playAgain}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
                className="reset-img"
              />
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  }

  gameCard = () => {
    const {tabsList} = this.props
    const {activeTabId, gameImg} = this.state
    const tabRelatedImages = this.relatedImages()

    return (
      <div>
        <div className="random-image-container">
          <img src={gameImg} alt="random" className="random-image" />
        </div>
        <ul className="tabs-container">
          {tabsList.map(eachTab => (
            <TabItem
              tabDetails={eachTab}
              //   key={eachTab.tabId}
              selectTab={this.selectTab}
              isActive={activeTabId === eachTab.tabId}
            />
          ))}
        </ul>
        <div className="image-items-container">
          <ul className="imageItem-container">
            {tabRelatedImages.map(eachImage => (
              <ImageItem
                imageDetails={eachImage}
                checkImgId={this.checkImgId}
                key={eachImage.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  selectTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  relatedImages = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state

    const filterImagesList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )
    return filterImagesList
  }

  getInterval = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.setState({timer: 60, isGameOver: true})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  render() {
    // const {tabsList} = this.props
    const {isGameOver, score, timer} = this.state
    // const tabRelatedImages = this.relatedImages()

    return (
      <div className="app-container">
        <Navbar gameScore={score} timer={timer} />
        {isGameOver ? this.showGameOverCard() : this.gameCard()}
      </div>
    )
  }
}

export default MatchGame
