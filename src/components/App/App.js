import React from 'react'
import './App.sass'
import FontAwesome from 'react-fontawesome'
import { Button } from 'react-bootstrap'

const App = () => (
  <div>
    <h2>Home</h2>
    <FontAwesome
      className='super-crazy-colors'
      name='rocket'
      size='2x'
      spin
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
    <Button bsStyle='danger'>Bootstrap button</Button>
  </div>
)

export default App
