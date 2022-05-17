import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";

let useStyles = makeStyles({
  logout:{
    top:16,
    left:16
  }
})

const LogoutButton = () => {
  const { logout,isAuthenticated } = useAuth0();
  const styles=useStyles;

  return (
    <React.Fragment>
      <div style={{"marginTop":"30px","marginLeft":"30px"}}>
    {isAuthenticated && 
    <Button onClick={() => logout()} variant="contained" color="error" className="styles.logout">
      Log Out
    </Button>
    }</div>
    </React.Fragment>
  )
};

export default LogoutButton;
// { returnTo: window.location.origin }