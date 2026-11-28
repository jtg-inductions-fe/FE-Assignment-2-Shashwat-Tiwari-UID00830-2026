/**
 * This file contains the dialog used to edit a restaurant's opening and closing time.
 */
import { useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';

import { DialogForm } from '@/components/RestaurantFormDialog/RestaurantFormDialog.styles';
import { StoreHourDialogProps } from '@/components/StoreHoursDialog/StoreHourDialog.types';
import { HoursFormValues } from '@/components/StoreHoursDialog/StoreHourDialog.types';
import { updateRestaurant } from '@/state/slices/restaurantSlice';

export const StoreHourDialog = ({
    open,
    restaurant,
    onClose,
    onSaved,
}: StoreHourDialogProps) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<HoursFormValues>({
        defaultValues: restaurant.hours,
    });
    useEffect(() => {
        if (open) reset(restaurant.hours);
    }, [open, reset, restaurant.hours]);
    const onSubmit: SubmitHandler<HoursFormValues> = async (hours) => {
        await new Promise((resolve) => setTimeout(resolve, 600));
        dispatch(updateRestaurant({ ...restaurant, hours }));
        onSaved('Store hours updated');
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Store Hours</DialogTitle>
            <DialogContent>
                <DialogForm
                    id="hours-form"
                    onSubmit={(e) => void handleSubmit(onSubmit)(e)}
                    noValidate
                >
                    <TextField
                        {...register('openHours')}
                        type="time"
                        label="Opens at"
                    />
                    <TextField
                        {...register('closeHours')}
                        type="time"
                        label="Closes at"
                    />
                </DialogForm>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={isSubmitting}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    form="hours-form"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Save'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
