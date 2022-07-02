import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import Notification from '../../components/alert/alert.component';

const CustomerProfile = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    image: '',
  });
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      url: `/customers/${id}`,
      method: 'get'
    }).then(({ data: customer }) => setCustomer(customer));

  }, [id, setCustomer]);

  const handleDelete = (e) => {
    e.preventDefault();

    // Start deleting request
    setDeleting(true);
    // Mock the fetch timing
    setTimeout(() => {
      axios({
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/customers/${id}`,
        method: 'delete'
      }).then(({ data }) => {
        if (data.ok) {
  
          // Stop deleting request
          setDeleting(false);
          // Send notification
          setOpenNotification(true);
          // Redirect to customers
          setTimeout(() => {
            navigate('/customers');
          }, 2000);
        };
      });
    }, 1000)
  }

  const handleSave = (e) => {
    e.preventDefault();

    setSaving(true);
    // TODO: Send new customer data to Server
  }

  const handleFieldChange = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }

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
          Customer Profile
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleFieldChange}
                disabled
                value={customer?.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
                onChange={handleFieldChange}
                disabled
                value={customer?.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleFieldChange}
                disabled
                value={customer?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl disabled>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  value={customer?.gender.toLowerCase() === 'male' ? 'male' : 'female'}
                  name="gender"
                  onChange={handleFieldChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="image"
                label="Image Url"
                type="text"
                id="imageUrl"
                autoComplete="url"
                onChange={handleFieldChange}
                disabled
                value={decodeURIComponent(customer?.image)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} gap={1} sx={{ mt: 3, mb: 2 }} justifyContent='space-between'>
            <Grid container item xs={5}>
              <LoadingButton
                fullWidth
                variant="contained"
                loading={deleting}
                onClick={handleDelete}
                color="error"
                disabled={saving}
              >
                Delete
              </LoadingButton>
            </Grid>
            <Grid container item xs={5}>
              <LoadingButton
                fullWidth
                variant="contained"
                loading={saving}
                onClick={handleSave}
                disabled={true}
              >
                Save
              </LoadingButton>
            </Grid>

          </Grid>
        </Box>
      </Box>

      {
        /* Send notification if the request has been completed */
        openNotification ?
          <Notification
            message='Customer has been deleted successfully!'
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

export default CustomerProfile;