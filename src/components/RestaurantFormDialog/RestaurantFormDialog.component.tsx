/**
 * This file contains the dialog used to add or edit a restaurant.
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
    MenuItem,
    TextField,
} from '@mui/material';

import { DialogForm } from '@/components/RestaurantFormDialog/RestaurantFormDialog.styles';
import {
    addRestaurant,
    updateRestaurant,
} from '@/state/slices/restaurantSlice';
import { DEFAULT_HOURS } from '@/utils/hours';
import {
    RestaurantFormValues,
    restaurantSchema,
} from '@/validations/restaurantValidations';

import { RestaurantFormDialogProps } from './RestaurantFormDialog.types';

import { zodResolver } from '@hookform/resolvers/zod';

const EMPTY_VALUES: RestaurantFormValues = {
    name: '',
    cuisine: '',
    type: 'non-veg',
    image: '',
    address: '',
    openHours: DEFAULT_HOURS.openHours,
    closeHours: DEFAULT_HOURS.closeHours,
};

export const RestaurantFormDialog = ({
    open,
    restaurant,
    ownerId,
    onClose,
    onSaved,
}: RestaurantFormDialogProps) => {
    const dispatch = useDispatch();
    const isEdit = Boolean(restaurant);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RestaurantFormValues>({
        resolver: zodResolver(restaurantSchema),
        defaultValues: EMPTY_VALUES,
    });

    useEffect(() => {
        if (!open) return;
        reset(
            restaurant
                ? {
                      name: restaurant.name,
                      cuisine: restaurant.cuisine,
                      type: restaurant.type,
                      image: restaurant.image,
                      address: restaurant.address,
                      openHours: restaurant.hours.openHours,
                      closeHours: restaurant.hours.closeHours,
                  }
                : EMPTY_VALUES,
        );
    }, [open, restaurant, reset]);
    const onSubmit: SubmitHandler<RestaurantFormValues> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { openHours, closeHours, ...details } = data;
        const hours = { openHours, closeHours };
        if (restaurant) {
            dispatch(updateRestaurant({ ...restaurant, ...data }));
            onSaved('Restaurant updated');
        } else {
            dispatch(
                addRestaurant({
                    id: `r${Date.now()}`,
                    ownerId,
                    rating: Math.floor(Math.random() * 6),
                    ...details,
                    hours,
                }),
            );
            onSaved('Restaurant added');
        }
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {isEdit ? 'Edit Restaurant' : 'Add New Restaurant'}
            </DialogTitle>
            <DialogContent>
                <DialogForm
                    onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                    id="restaurant-form"
                    noValidate
                >
                    <TextField
                        {...register('name')}
                        label="Name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />

                    <TextField
                        {...register('cuisine')}
                        label="Cuisine"
                        error={!!errors.cuisine}
                        helperText={errors.cuisine?.message}
                    />

                    <TextField
                        select
                        label="Food type"
                        {...register('type')}
                        error={!!errors.type}
                        helperText={errors.type?.message}
                        defaultValue="non-veg"
                    >
                        <MenuItem value="veg">Veg</MenuItem>
                        <MenuItem value="non-veg">Non-veg</MenuItem>
                    </TextField>

                    <TextField
                        {...register('image')}
                        label="Image URL"
                        error={!!errors.image}
                        helperText={errors.image?.message}
                    />

                    <TextField
                        {...register('address')}
                        label="Address"
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                    <TextField
                        {...register('openHours')}
                        type="time"
                        label="Opens at"
                        error={!!errors.openHours}
                        helperText={errors.openHours?.message}
                    />
                    <TextField
                        {...register('closeHours')}
                        type="time"
                        label="Closes at"
                        error={!!errors.closeHours}
                        helperText={errors.closeHours?.message}
                    />
                </DialogForm>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={isSubmitting}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    form="restaurant-form"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving..' : 'Save'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
