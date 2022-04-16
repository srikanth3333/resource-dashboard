import { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import {useSelector, useDispatch} from "react-redux";
import Login from "../pages/login";
import {verifyUser} from "../redux/auth/userSlice"

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const DashboardLayout = (props) => {

  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  let dispatch = useDispatch()

  let user = useSelector(state => state.auth)

  useEffect(() => {
    let email = localStorage.getItem('email')
    console.log(email)
    dispatch(verifyUser({email:email}))
    // if(!email) {
    //   return null
    // }
    
  }, [])


  if(user.loading) {
    return 'Loading please wait....'
  }

  if(user.loggedIn == false) {
    return <Login />
  }

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
