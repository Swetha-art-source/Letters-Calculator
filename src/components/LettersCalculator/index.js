// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <div className="content-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phraseInput" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phraseInput"
              className="input"
              placeholder="Enter the phrase"
              onChange={e => this.setState({count: e.target.value.length})}
            />
            <p className="no-of-letters">No.of letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
