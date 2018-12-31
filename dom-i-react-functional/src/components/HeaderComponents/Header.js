import React from 'react';

const Nav = props => {
  const navItems = props.navItems;
  const navLinks = navItems.map((navLink) => 
    <NavLink key={`navLink-${navLink}`} name={navLink} />
  );
  return (
    <nav>{navLinks}</nav>
  );
}

const NavLink = props => {
  return (
    <a href="#">{props.name}</a>
  );
}

const Logo = props => {
  return (
    <img src={props.logoSrc} className="logo"/>
  );
}

const Header = props => {
  const nav = <Nav navItems={props.navItems} />;
  const logo = <Logo logoSrc={props.logoSrc} />;
  return (
    <header>{nav}{logo}</header>
  );
}

export default Header;