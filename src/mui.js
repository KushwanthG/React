

import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return (
    <>
    <Button variant="contained">Hello world</Button>;
    <Button variant="contained">Contained</Button>
    <Button variant="contained" disabled>Disabled </Button>
    <Button variant="contained" href="#contained-buttons"> Link</Button>
    <Button variant="contained" disableElevation> Disable elevation</Button>
    </>
  )
}