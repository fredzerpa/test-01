import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/alert/alert.component';

const CreateCustomer = () => {
  const [creatingCustomer, setCreatingCustomer] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setCreatingCustomer(true);
    // Mock fetch time with setTimeout
    setTimeout(() => {
      axios({
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: '/customers',
        method: 'post',
        data: {
          first_name: data.get('first_name').toLowerCase(),
          last_name: data.get('last_name').toLowerCase(),
          email: data.get('email').toLowerCase(),
          gender: data.get('gender').toLowerCase(),
          image: encodeURIComponent(data.get('image')),
        }
      }).then(({data}) => {
        setCreatingCustomer(false);
        setOpenNotification(true);
        setTimeout(() => {
          navigate('/customers');
        }, 2000)
      })
    }, 1000)

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          New Customer Profile
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  defaultValue="male"
                  name="gender"
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="image"
                label="Image Url"
                type="text"
                id="imageUrl"
                autoComplete="url"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={creatingCustomer}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </LoadingButton>
        </Box>
      </Box>
      {
        /* Send notification if the request has been completed */
        openNotification ?
          <Notification
            message='Customer has been created successfully!'
            time={1500}
            position={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          />
          : null
      }
    </Container>
  );
}

export default CreateCustomer;