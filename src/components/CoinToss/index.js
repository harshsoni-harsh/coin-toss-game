// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {heads: 0, tails: 0, tossResult: 1}

  toss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult) {
      this.setState(o => ({tails: o.tails + 1, heads: o.heads, tossResult}))
    } else {
      this.setState(o => ({
        tails: o.tails,
        heads: o.heads + 1,
        tossResult,
      }))
    }
  }

  render() {
    const {tails, heads, tossResult} = this.state
    const src = tossResult
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    return (
      <div className="body">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p className="header">Heads (or) Tails</p>
          <img src={src} alt="toss result" />
          <button onClick={this.toss} type="button">
            Toss Coin
          </button>
          <div className="result">
            <p>Total: {tails + heads}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
