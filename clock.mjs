import { h, render, Component } from './preact.mjs'
import htm from './htm.mjs'
let html = htm.bind(h)

class Clock extends Component {

  constructor() {
    super()
    this.state = { time: Date.now() }
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.setState({time: Date.now()}), 1000)
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString()
    return html`<p>${time}</p>`
  }
}

export default Clock
