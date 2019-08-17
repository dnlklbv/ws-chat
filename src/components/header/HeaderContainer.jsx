import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './Header';

import { logOut } from '../../store/actions';

const HeaderContainer = ({ logOutConnect }) => (
  <Header logOut={logOutConnect} />
);

HeaderContainer.propTypes = {
  logOutConnect: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  logOutConnect: logOut,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
