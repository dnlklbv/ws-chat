import React from 'react';
import { TitleBar, IconButton, CloseIcon } from '@livechat/ui-kit';

export const Header = () => (
  <TitleBar
    className="header"
    title="The Rolling Scopes Chat"
    rightIcons={[
      <IconButton key="close">
        <CloseIcon />
      </IconButton>,
    ]}
    style={{width: 'auto', position: 'sticky', top: 0}}
  />
);
