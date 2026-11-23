import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

import { ConfirmDialogProps } from '@/components/ConfirmDialog/ConfirmDialog.types';

const ConfirmDialog = ({
    open,
    title,
    message,
    confirmLabel = 'Confirm',
    onConfirm,
    onCancel,
}: ConfirmDialogProps) => (
    <Dialog open={open} onClose={onCancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onConfirm} color="error" variant="contained">
                {confirmLabel}
            </Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmDialog;
