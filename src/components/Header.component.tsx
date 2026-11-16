/**
 * This file contains the Header component.
 */

import { useState } from 'react';

import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, IconButton, Typography } from '@mui/material';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'primary.main',
                minHeight: '80px',
                color: 'primary.contrastText',
                px: { xs: 2, md: 5 },
                py: 2,
            }}
        >
            <Typography
                variant="h3"
                component={Link}
                to="/"
                sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
                Name
            </Typography>

            <Box sx={{ display: 'flex', gap: 4 }}>
                {isAuthenticated ? (
                    <>
                        <IconButton
                            component={Link}
                            to="/cart"
                            color="inherit"
                            aria-label="Cart"
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Profile"
                            sx={{
                                bgcolor: 'text.main',
                            }}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={Link}
                            to="/login"
                            onClick={() => setIsAuthenticated(true)}
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={Link}
                            to="/register"
                            onClick={() => setIsAuthenticated(true)}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Header;
