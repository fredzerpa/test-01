import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Female, Male } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomerCard = ({ data: { id, first_name, last_name, email, gender, image } }) => {
  const navigate = useNavigate();

  const handleCardClick = e => {
    navigate(`/customers/${id}`);
  }

  return (
    <Card sx={{ height: '100%', maxWidth: 345, margin: 'auto' }} raised>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          image={decodeURIComponent(image)}
          alt="customer"
          sx={{
            // width: '100%'
          }}
        />
        <CardContent>
          <Typography className='fullname-text' align='center' gutterBottom variant="h5" component="div">
            {first_name} {last_name}
            <Typography className='gender-text' variant="caption" color="text.secondary" sx={{ marginLeft: '.5rem' }}>
              {gender.toLowerCase() === 'male' ? <Male /> : <Female />}
            </Typography>
          </Typography>
          <Typography className='email-text' align='center' variant="body2" color="text.secondary" >
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomerCard;