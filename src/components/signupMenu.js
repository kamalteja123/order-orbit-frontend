import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function SignUpMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if(event.currentTarget.innerText==="User Registration"){
        navigate('/usersignup');
    }
    else if(event.currentTarget.innerText==="Restaurant Registration"){
        navigate('/restaurantsignup');
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='text-black z-50 font-bold hover:scale-105'>Sign Up</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e)=>handleClose(e)}>User Registration</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e)}>Restaurant Registration</MenuItem>
      </Menu>
    </div>
  );
}

export default SignUpMenu