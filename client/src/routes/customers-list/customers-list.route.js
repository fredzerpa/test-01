import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomerCard from "../../components/customer-card/curstomer-card.component";
import axios from 'axios';


const CustomersList = () => {
  const [customersList, setCustomersList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // Start fetching customers
    setLoading(true);
    axios({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      url: `/customers`,
      method: 'get',
    }).then(({ data }) => {
      // Fetch completed
      setLoading(false);
      setCustomersList(data)
    });

  }, [setCustomersList])

  return (
    <Grid container justifyContent='center' spacing={4} padding='2rem 0'>
      {
        loading ?
          <Typography variant="h2">Loading..</Typography>
          :
          customersList.length ?
            customersList.map(customer =>
              <Grid key={customer.id} item xs={6} sm={4} md={3}  >
                <CustomerCard data={customer} />
              </Grid>
            ) : <Typography variant="h2">No customers available</Typography>
      }
    </Grid>
  )
}

export default CustomersList;