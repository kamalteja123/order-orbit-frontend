import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function YourComp() {
  const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/data')
//       .then(function (response) {
//         setUserData(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

  return (
    <div className='pt-16 text-center'>
      <button className='bg-blue-500 text-white px-4 py-1 rounded-md' onClick={handleClick}>Fetch Data</button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {userData.map(user => (
          <Card key={user.email} className='mx-2' >
          <Card.Img variant="top" src={user.image} alt='not found'/>
            <Card.Body className='border-2 rounded-lg'>
              <Card.Title className='border-b '>{user.firstName} {user.lastName}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text className='border-t'>password: {user.password}</Card.Text>
              {/* You may add more user details here */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );

  function handleClick() {
    console.log('clicked');
    axios.get('http://localhost:5000/api/data')
      .then(function (response) {
        setUserData(response.data);
        console.log(userData[1].image);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default YourComp;
