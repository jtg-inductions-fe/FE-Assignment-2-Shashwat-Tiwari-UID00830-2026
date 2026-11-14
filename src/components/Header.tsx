import { Typography } from '@mui/material';

const Header = () => (
    <Typography
        variant="h3"
        component="div"
        sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 3,
        }}
    >
        Header
    </Typography>
);

export default Header;
