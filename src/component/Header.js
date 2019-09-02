import React from 'react';
import {Route , Link} from 'react-router-dom'
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

export default class Header extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link className="nav-link" to="/first">บทนำ</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ส่วนการวิจัย
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link className="nav-link" to="/introduc">สนทนา</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/t1">Positive Association of Video Game Playing with Left Frontal Cortical Thickness in Adolescents</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="nav-link" to="/t2">Playing Super Mario induces structural brain plasticity: gray matter changes resulting from training with a commercial video game</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="nav-link" to="/t3">Action Video Games Improve Vision</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <Link className="nav-link" to="/res">สรุป</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}