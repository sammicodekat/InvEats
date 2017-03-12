import React ,{ Component } from 'react'
import { browserHistory } from 'react-router'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeSmall extends Component {
  render() {
    return (
      <Menu size='large' color='teal' inverted>
        <Menu.Item name='home' icon="" onClick={() => browserHistory.push('/')} />

        {/* <Menu.Item position='right'>
          <Button primary>Log in</Button>
        </Menu.Item> */}
      </Menu>
    )
  }
}
