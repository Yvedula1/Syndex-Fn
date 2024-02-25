import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar"
import { Button } from './Button';
import './header.css';
import '../App.css'
import "../index.css";
export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className='h-[4.9em]'>
   <Navbar user={user}/>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
