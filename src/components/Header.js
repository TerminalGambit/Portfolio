// src/components/Header.js

import React from 'react';
import './Header.css';

function Header({ name }) {
    return <header><h1>{name}'s Portfolio</h1></header>;
}

export default Header;
