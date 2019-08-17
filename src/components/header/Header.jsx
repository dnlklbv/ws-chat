import React from 'react';
import PropTypes from 'prop-types';

import { TitleBar, IconButton, CloseIcon } from '@livechat/ui-kit';

export const Header = ({ logOut }) => (
  <TitleBar
    className="header"
    title="The Rolling Scopes Chat"
    rightIcons={[
      <IconButton onClick={() => {logOut()}}>
        <CloseIcon/>
      </IconButton>,
    ]}
    style={{width: 'auto', position: 'sticky', top: 0}}
  />
);

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
}
