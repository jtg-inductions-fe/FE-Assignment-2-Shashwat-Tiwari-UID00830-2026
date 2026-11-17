/**
 * This file contains the Header component.
 */

import { useState } from 'react';

import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';

import {
    ButtonStyles,
    HeaderStyle,
    Logo,
    ProfileButton,
} from '@/components/Header/styles';

import logo from '/logo.svg';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isCustomer, setIsCustomer] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
        <HeaderStyle>
            <Logo to="/">
                <img src={logo} alt="BiteBox Logo" height="70" width="70" />
                BiteBox
            </Logo>
            <ButtonStyles>
                {isAuthenticated ? (
                    <>
                        {isCustomer && (
                            <IconButton
                                component={Link}
                                to="/cart"
                                color="inherit"
                                aria-label="Cart"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        )}
                        <ProfileButton
                            onClick={(e) => {
                                setAnchorEl(e.currentTarget);
                            }}
                        >
                            <AccountCircleIcon />
                        </ProfileButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem>Hello User!</MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setAnchorEl(null);
                                    setIsAuthenticated(false);
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
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
                            onClick={() => {
                                setIsAuthenticated(true);
                                setIsCustomer(true);
                            }}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </ButtonStyles>
        </HeaderStyle>
    );
};

export default Header;
