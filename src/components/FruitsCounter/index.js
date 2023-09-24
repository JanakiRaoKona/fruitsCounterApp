// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMangoes = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  eatBananas = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="images-container">
            <div className="mangos-container">
              <img
                alt="mango"
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="button"
                onClick={this.eatMangoes}
              >
                Eat Mango
              </button>
            </div>

            <div className="mangos-container">
              <img
                alt="banana"
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="button"
                onClick={this.eatBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
