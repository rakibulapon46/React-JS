import { Component } from 'react'
import Render from './Render'

export default class Condition extends Component {
    constructor(props){
        super(props)
        this.state={
            yourAge: false
        }
    }
  render() {
    let ami
    if (this.state.yourAge) {
        ami = 'Your are 18+.'
    } else {
        ami = <Render/>
    }
    return (
      <>
      <h1>{ami}</h1>
      </>
    )
  }
}
