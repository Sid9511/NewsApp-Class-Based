import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import  NewsSection from './Components/NewsSection'; 
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey= process.env.REACT_APP_NEWS_API

  state= {
    progress:0
  }

  setProgress = (progress) => {
  this.setState({progress: progress})
  }

  render() {  // In class based component we use 'render' for return and in function based component we directly use 'return'.  
    
    return (
      <div style={{ backgroundColor: '' }}>
        <Navbar/>
        <LoadingBar color='#f11946' progress={this.state.progress} />
        <Routes>
          <Route exact path='/' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='general' category='general'/>}/>
          <Route exact path='/general' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='general' category='general'/>}/>
          <Route exact path='/business' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='business' category='business'/>}/>
          <Route exact path='/technology' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='technology' category='technology'/>}/>
          <Route exact path='/science' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='science' category='science'/>}/>
          <Route exact path='/sports' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress}key='sports'  category='sports'/>}/>
          <Route exact path='/health' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='health' category='health'/>}/>
          <Route exact path='/entertainment' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' category='entertainment'/>}/>
          <Route exact path='/in' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='in' country='in'/>}/>
          <Route exact path='/us' element={< NewsSection apiKey={this.apiKey} setProgress={this.setProgress} key='us' country='us'/>}/>
        </Routes>
      </div>
    )
  }
}

