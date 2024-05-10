import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function SignInMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if(event.currentTarget.innerText==="User Sign in"){
        navigate('/usersignin');
    }
    else if(event.currentTarget.innerText==="Restaurant Sign in"){
        navigate('/restaurantsignin');
    }
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='text-black'>Sign In</span>
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
        <MenuItem onClick={(e)=>handleClose(e)}>User Sign in</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e)}>Restaurant Sign in </MenuItem>
      </Menu>
    </div>
  );
}

export default SignInMenu