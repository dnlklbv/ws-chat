import React from 'react';
import PropTypes from 'prop-types';

import { TitleBar, IconButton, CloseIcon } from '@livechat/ui-kit';

import { LanguageSelector } from '../languageSelector';

export const Header = ({ logOut }) => (
  <TitleBar
    className="header"
    title="The Rolling Scopes Chat"
    leftIcons={[
      <LanguageSelector key="language sele" />
    ]}
    rightIcons={[
      <IconButton key='log out' onClick={() => {logOut()}}>
        <CloseIcon/>
      </IconButton>,
    ]}
    style={{width: 'auto', position: 'sticky', top: 0}}
  />
);

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
}
