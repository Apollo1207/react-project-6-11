import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from '../../../components/Global.styled';
import {LinkingWrapper, LinkItem, Navbar, NavbarLogo, NavInput} from './Header.styled';
import 'semantic-ui-css/semantic.min.css';
import NavLink from './Header.styled';
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog";
import Cart from "../../Cart/Cart";
import Landie from '../../../icons/navbar_logo.png';


function Header() {
    return (
        <Container>
            <Router>
                <Navbar>
                    <NavbarLogo src={Landie} alt="Landie"/>
                    <NavInput icon="search" placeholder="Search"/>
                    <LinkingWrapper>
                        <li>
                            <NavLink exact to="/">
                                <LinkItem>Home</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog">
                                <LinkItem>Catalog</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/cart">
                                <LinkItem>Cart</LinkItem></NavLink>
                        </li>
                    </LinkingWrapper>
                </Navbar>
                <Switch>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default Header;