import React from 'react';

import { TextField, Button } from '@material-ui/core';

export const LogInForm = () => (
  <form>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      autoComplete="nickname"
      placeholder="Enter username"
      autoFocus
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      Log In
    </Button>
  </form>
)
