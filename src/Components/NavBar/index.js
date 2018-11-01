import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/svg/logo.svg';
import Social from '../Social';
import {
  Badge,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './index.css';

class NavBar extends Component {
  render() {
    return (<Navbar className="navbar-main" expand="md">
      <NavbarBrand href="/">
        <img src={logo} className="bren-logo" alt="logo"/>
      </NavbarBrand>
      <Social className="social-icons"/>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/#about"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <NavLink>About</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/#experience"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <NavLink>Experience</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/#projects"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <NavLink>Projects</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/#contact"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <NavLink>Contact</NavLink>
          </Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            SDVX
          </DropdownToggle>
          <DropdownMenu className="drop-menu" right>
            <DropdownItem className="item-1">
              <NavLink href="/sdvx" target="_blank" rel="noopener noreferrer">
                <Badge color="info">WIP</Badge>&nbsp;SDVX Calculators</NavLink>
            </DropdownItem>
            <DropdownItem divider className="drop-divider"/>
            <DropdownItem className="item-2">
              <NavLink href="/score-calculator" target="_blank" rel="noopener noreferrer">
                <Badge color="secondary">OLD</Badge>&nbsp;SDVX Score Calculator</NavLink>
            </DropdownItem>
            <DropdownItem className="item-3">
              <NavLink href="/grade-calculator" target="_blank" rel="noopener noreferrer">
                <Badge color="secondary">OLD</Badge>&nbsp;SDVX Grade Calculator</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>);
  }
}

export default NavBar;
