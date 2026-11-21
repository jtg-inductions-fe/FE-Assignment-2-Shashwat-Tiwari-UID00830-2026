import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageRoot = styled('main')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 8),
    },
}));

export const Searchbar = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

export const SearchField = styled(TextField)({
    flex: 1,
});

export const CardGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(7),
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3,1fr)',
    },
    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(4,1fr)',
    },
}));

export const EmptyState = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
