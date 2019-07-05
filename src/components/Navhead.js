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
import SignIn from './auth/SignIn';
import Home from './Home';
import SignUp from './auth/SignUp';
import Test from './test';
import google from './auth/google'
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
          <div className="container">
            <NavbarBrand href="/" >Release</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to={'/post'} >
                    <NavLink>
                      Post
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/test'} >
                    <NavLink>
                      Show
                    </NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i class="fas fa-sign-in-alt"></i>
                    &nbsp;Login 
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <SignIn/>
                      {/* <Link to="/login">SignIn</Link> */}
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="signup">SignUp</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="google"><button className="btn btn-danger"><i class="fab fa-google"></i>oogle</button></Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
          <Switch> 
            <Route exact path='/' component={ Home }/>
            <Route path='/post' component={ Posts } />
            <Route path='/test' component={ Test } />
            <Route path='/login' component={ SignIn }/>
            <Route path='/signup' component={ SignUp }/>
            <Route path='/google' component={ google }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navhead;