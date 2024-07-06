import React, { Component } from 'react'
import loader from './loader.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img src={loader} alt="Loading" />
      </div>
    )
  }
}

export default Loader
