import React ,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => {
    return (
      <Menu size='huge' color='teal' inverted>
        <Menu.Item header onClick={() => browserHistory.push('/')} >Let's Eat & Talk</Menu.Item>
        <Menu.Item position='right' icon="user" onClick={props.toggleVisibility}></Menu.Item>
      </Menu>
    )
  }

export default Navbar
