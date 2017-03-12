import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/auth/authActions';
import Navbar from './Navbar';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
} from 'semantic-ui-react';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  componentWillMount() {
    if (window.localStorage.token) {
      const decoded = jwt.decode(localStorage.token);
      this.props.setUser(decoded);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth && !this.props.isAuth) {
      this.props.router.push('/home');
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="container">
        <Navbar toggleVisibility={this.toggleVisibility} />
        <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='scale down' width="very wide" visible={visible} icon='labeled' vertical>
            <Menu.Item name='name' >
              <Icon name='name' />
              My name
            </Menu.Item>
            <Menu.Item name="matches">
              <Icon name="users" />
              My Matches
            </Menu.Item>
            <Menu.Item name="reservation">
              <Icon name="food" />
              Reservations
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment className="ui center aligned segment">
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
            );
            }
}

const mapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth,
  });

export default connect(mapStateToProps, { setUser })(Layout);
