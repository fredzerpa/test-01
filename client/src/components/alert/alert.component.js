import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = ({ openNotification = true, message = '', time = 6000, severity = 'success', position = { vertical: 'bottom', horizontal: 'right' } }) => {
  const [open, setOpen] = useState(openNotification);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={time} onClose={handleClose} anchorOrigin={position} >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification;