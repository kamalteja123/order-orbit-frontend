import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function ViewOrder() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(function (response) {
        setUserData(response.data);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className='absolute top-16  pt-16 text-center hidden z-50' id='comp'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
        {userData.map(user => (
          <Card key={user.firstName} sx={{ minHeight: '280px', width: 320 }}>
          <CardCover>
            <img
              src={user.image}
              srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            }}
          />
          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <Typography level="title-lg" textColor="#fff" className="text-left">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {user.emai}
            </Typography>
          </CardContent>
        </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewOrder;
