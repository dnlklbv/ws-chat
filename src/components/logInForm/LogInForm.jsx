import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core';

export const LogInForm = ({ setUsername }) => {
  const [usernameField, setUsernameField] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setUsername(usernameField);
    }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoComplete="nickname"
        placeholder="Enter username"
        autoFocus
        value={usernameField}
        onChange={(e) => {setUsernameField(e.target.value)}}
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
}
