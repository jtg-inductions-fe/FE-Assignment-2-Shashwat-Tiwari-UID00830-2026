/**
 * This file contains the type definitiosn for the confirm dialog component.
 */
export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
}
