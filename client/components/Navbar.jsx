import React from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

const Navbar = (props) => {
    return (
      <Menu size='huge' color='teal' inverted>
        <Menu.Item>
          <img src="https://dl2.pushbulletusercontent.com/0YPG4XSoAY8Uee7xRVAgvw3Upkti6g81/logo.png" />
        </Menu.Item>
        <Menu.Item header onClick={() => browserHistory.push('/')} >INVEAT</Menu.Item>
        <Menu.Item position='right' icon="user" onClick={props.toggleVisibility}></Menu.Item>
      </Menu>
    )
  }

export default Navbar
