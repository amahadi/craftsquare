import React, { forwardRef, useState } from "react";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({
    type,
    message
}) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
    >
        <Alert 
            onClose={handleClose} 
            severity={type} 
            sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    </Snackbar>
  );
}