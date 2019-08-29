import React from 'react';

import { useTranslation } from 'react-i18next';

import { CircularProgress } from '@material-ui/core';

export const AppLoader = () => {
  const { t } = useTranslation();

  return (
    <div style={{marginTop: 20, textAlign: 'center'}} >
      <CircularProgress />
      <p>{t('connecting...')}</p>
    </div>
  )
};
