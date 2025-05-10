import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {

    const [anchor, setAnchor] = useState(null);
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    const navigateLogin = () => {
        navigate("/")
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}} >
                            <Link to="/dashboard" className="navbarLink">
                                {t('dashboard')}
                            </Link>
                        </Typography>

                        {
                            <div>
                                <IconButton size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                        <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menuBar"
                                    anchorEl={anchor}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchor)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={navigateLogin}>
                                        {t('logout')}
                                    </MenuItem>
                                </Menu>
                            </div>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;