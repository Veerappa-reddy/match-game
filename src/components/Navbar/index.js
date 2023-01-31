import './index.css'

const Navbar = props => {
  const {gameScore, timer} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-container">
        <p className="score-p">
          score: <span className="score">{gameScore}</span>
        </p>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-img"
            alt=" timer"
          />
          <p className="seconds">{timer} sec</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
