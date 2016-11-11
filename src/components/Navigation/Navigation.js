/**
 * Created by mlee on 11/10/16.
 * https://react-materialize.github.io/navbar.html
 */
import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Navigation extends Component {
    render() {
        return (
            <Navbar brand="ReadingList" right>
                <NavItem>Sign Up</NavItem>
            </Navbar>
        );
    }
}

export default Navigation;