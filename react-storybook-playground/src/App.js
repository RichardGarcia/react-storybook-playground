import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import fonts
import 'typeface-roboto'

// material-ui - Atoms
import Icons from './components/Icons'
import Icons2 from './components/Icons2'
import Typography  from './components/Typography'
import ButtonAppBar from './components/ButtonAppBar'

// Molecules
import M001 from './components/Molecule01'



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


        {/* <p>Icons</p>
          <Icons />

        <p>Icons 2</p>
          <Icons2 />

        <p>Typography</p>
          <Typography /> */}

        {/* <p>App Bar</p>
          <ButtonAppBar appBarTitle={'App Bar Title'} appBarPosition={'static'} appBarColor={'primary'}/>
          <p>Another App Bar</p>
          <ButtonAppBar appBarTitle={'This is another App Bar Title'} appBarPosition={'static'} appBarColor={'secondary'} /> */}

        <M001 />



      </div>
    )
  }
}

// add default title in case nothing is passed
App.defaultProps = {
  appTitle: 'React'
}

export default App
