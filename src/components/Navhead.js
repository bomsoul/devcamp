import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Posts from './testcomponents/post.component';

class Navhead extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" >reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to={'/post'} >
                    <NavLink>
                      One
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/'} >
                    <NavLink>
                      kuy
                    </NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Login
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Sign in
                    </DropdownItem>
                    <DropdownItem>
                      Sign up
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch> 
            <Route path='/post' component={ Posts } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navhead;