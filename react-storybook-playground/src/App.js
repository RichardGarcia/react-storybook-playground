import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import fonts
import 'typeface-roboto'

// material-ui
import Icons from './components/icons'
import Icons2 from './components/icons2'
import Typography from './components/typography'


class App extends Component {
  render () {
    // App title props
    const { appTitle } = this.props

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to {appTitle}</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <p>Icons</p>
        <Icons />

        <p>Icons 2</p>
        <Icons2 />

        <p>Typography</p>
        <Typography />


      </div>
    )
  }
}

// add default title in case nothing is passed
App.defaultProps = {
  appTitle: 'React'
}

export default App
