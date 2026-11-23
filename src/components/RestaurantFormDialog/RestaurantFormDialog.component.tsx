/**
 * This file contains the dialog used to add or edit a restaurant.
 */

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

import { Alert } from '@/components/Form/styles';
import { DialogForm } from '@/components/RestaurantFormDialog/styles';
import {
    addRestaurant,
    updateRestaurant,
} from '@/state/slices/restaurantSlice';
import {
    RestaurantFormValues,
    restaurantSchema,
} from '@/validations/restaurantValidations';
import { zodResolver } from '@hookform/resolvers/zod';

import { RestaurantFormDialogProps } from './RestaurantFormDialog.types';

const RestaurantFormDialog = ({
    open,
    restaurant,
    ownerId,
    onClose,
    onSaved,
}: RestaurantFormDialogProps) => {
    const dispatch = useDispatch();
    const isEdit = restaurant !== null;
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RestaurantFormValues>({
        resolver: zodResolver(restaurantSchema),
    });
    const onSubmit: SubmitHandler<RestaurantFormValues> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (restaurant) {
            dispatch(updateRestaurant({ ...restaurant, ...data }));
            onSaved('Restaurant updated');
        } else {
            dispatch(
                addRestaurant({
                    id: `r${Date.now()}`,
                    ownerId,
                    rating: 0,
                    ...data,
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
                    <TextField {...register('name')} label="Name" />
                    {errors.name && <Alert>{errors.name.message}</Alert>}
                    <TextField {...register('cuisine')} label="Cuisine" />
                    {errors.cuisine && <Alert>{errors.cuisine.message}</Alert>}
                    <TextField
                        select
                        label="Food type"
                        defaultValue=""
                        {...register('type')}
                    >
                        <MenuItem value="veg">Veg</MenuItem>
                        <MenuItem value="non-veg">Non-veg</MenuItem>
                    </TextField>
                    <TextField {...register('image')} label="Image URL" />
                    {errors.image && <Alert>{errors.image.message}</Alert>}
                    <TextField {...register('address')} label="Address" />
                    {errors.address && <Alert>{errors.address.message}</Alert>}
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

export default RestaurantFormDialog;
