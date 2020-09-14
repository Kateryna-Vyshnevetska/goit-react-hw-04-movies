import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function Btn({label, type, handleClick, icon}) {
  const classes = useStyles();

  return (
    <>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          type={type}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>{icon}</Icon>}
          onClick={handleClick}
        >
          {label}
        </Button>
      </>
  );
}
