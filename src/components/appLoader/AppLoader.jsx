import React from 'react';

import { CircularProgress } from '@material-ui/core';

export const AppLoader = () => (
  <div style={{marginTop: 20, textAlign: 'center'}} >
    <CircularProgress />
    <p>connecting...</p>
  </div>
);
