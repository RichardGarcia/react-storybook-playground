import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

// import your react app here
import App from '../App'

// import MUI
import ButtonAppBar from './../components/ButtonAppBar'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

// load your react app
storiesOf('React Storybook Playground App', module)
  .add('Default', () => <App />)
  .add('Custom app title', () => <App appTitle='React Storybook Playground' />)


  storiesOf('AppBars', module)
  .add('App Bar 01', () => (
    <ButtonAppBar appBarTitle={'App Bar Title'} appBarPosition={'static'} appBarColor={'primary'} />
  ))
  .add('App Bar 02', () => (
    <ButtonAppBar appBarTitle={'This is another App Bar Title'} appBarPosition={'static'} appBarColor={'secondary'}/>
  ))

  storiesOf('Molecules', module)
  .add('Molecule01', () => (
    <ButtonAppBar appBarTitle={'App Bar Title - Molecule 01'} appBarPosition={'static'} appBarColor={'secondary'} />
  ))
  