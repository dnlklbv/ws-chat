import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Select, MenuItem } from '@material-ui/core';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [ lng, setLng ] = useState(i18n.language);

  return (
    <Select
      value={lng}
      onChange={(e) => {
        const { value } = e.target;
        setLng(value);
        i18n.changeLanguage(value);
      }}
      style={{ color: '#fff'}}
    >
      <MenuItem value={'en'}>en</MenuItem>
      <MenuItem value={'ru'}>ru</MenuItem>
    </Select>
  )
};
