import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

export const LanguageSelector = () => (
  <Select value={'en'} style={{ color: '#fff'}}>
    <MenuItem value={'en'}>en</MenuItem>
    <MenuItem value={'ru'}>ru</MenuItem>
  </Select>
);
