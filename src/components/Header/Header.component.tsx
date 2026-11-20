/**
 * This file contains the Header component.
 */

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';

import {
    ButtonStyles,
    HeaderStyle,
    Logo,
    ProfileButton,
} from '@/components/Header/styles';
import { logout } from '@/state/slices/authSlice';
import { RootState } from '@/state/store';

import logo from '/logo.svg';
const Header = () => {
    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.auth,
    );
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
                            <MenuItem>Hello {user?.name}!</MenuItem>
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

export default Header;
