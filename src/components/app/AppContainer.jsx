import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { App } from './App';

import { addMessages } from '../../store/actions';

const AppContainer = props => (
  <App addMessages={props.addMessagesConnect} />
);

AppContainer.propTypes = {
  addMessagesConnect: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addMessagesConnect: addMessages,
};

export default connect(null, mapDispatchToProps)(AppContainer);
