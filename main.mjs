import { h, Component, render } from './preact.mjs'
import htm from './htm.mjs'
import Clock from './clock.mjs'

let html = htm.bind(h)

function App(props) {
  return html`<p>My name is ${props.name}!</p>`
}

render(html`<${App} name="Charlie" /> <${Clock} />`, document.body)
