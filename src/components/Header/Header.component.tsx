/**
 * This file contains the Header component.
 */

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';

import {
    ButtonStyles,
    HeaderStyle,
    Logo,
    ProfileButton,
} from '@/components/Header/Header.styles';
import { logout } from '@/state/slices/authSlice';
import { RootState } from '@/state/store';

export const Header = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const isAuthenticated = user !== null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isCustomer = user?.role === 'Customer';
    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(logout());
        void navigate('/login');
    };
    return (
        <HeaderStyle>
            <Logo to="/">
                <img src="/logo.svg" alt="Logo" height="70" width="70" />
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
                            aria-label="Profile"
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
                            <MenuItem
                                disableRipple
                                sx={{
                                    cursor: 'default',
                                    pointerEvents: 'none',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                Hello {user?.name}!
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={Link}
                            to="/register"
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </ButtonStyles>
        </HeaderStyle>
    );
};
