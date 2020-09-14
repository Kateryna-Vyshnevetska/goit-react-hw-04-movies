import React from 'react';
import TextField from '@material-ui/core/TextField';


export  function FormInput({name,handleChange}) {

  return (
        <TextField 
        id="outlined-search" 
        label={name}
        type='text'
        name={name}
        onChange={handleChange}
        variant="outlined" />
  );
}
