/**
 * This file contains the styled components exclusive to register component.
 */
import { RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RadioGroupStyles = styled(RadioGroup)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));
