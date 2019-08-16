import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUsername } from '../../store/actions';

import { LogInForm } from './LogInForm';

const LogInFormContainer = ({ setUsernameConnect }) => (
  <LogInForm setUsername={setUsernameConnect} />
);

LogInFormContainer.propTypes = {
  setUsernameConnect: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  setUsernameConnect: setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInFormContainer);
