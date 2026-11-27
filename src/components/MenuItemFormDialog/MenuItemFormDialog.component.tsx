/**
 * This file contains the dialog used to add or edit a menu item.
 */

import { useEffect } from 'react';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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

import { MenuItemFormDialogProps } from '@/components/MenuItemFormDialog/MenuItemFormDialog.types';
import { DialogForm } from '@/components/RestaurantFormDialog/RestaurantFormDialog.styles';
import { addMenuItem, updateMenuItem } from '@/state/slices/menuSlice';
import {
    MenuItemFormValues,
    menuItemSchema,
} from '@/validations/menuItemValidations';

import { zodResolver } from '@hookform/resolvers/zod';

const EMPTY_VALUES: MenuItemFormValues = {
    name: '',
    description: '',
    category: '',
    type: 'veg',
    price: '',
    stock: '',
    image: '',
};

export const MenuItemFormDialog = ({
    open,
    item,
    restaurantId,
    onClose,
    onSaved,
}: MenuItemFormDialogProps) => {
    const dispatch = useDispatch();
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<MenuItemFormValues>({
        resolver: zodResolver(menuItemSchema),
        defaultValues: EMPTY_VALUES,
    });
    useEffect(() => {
        if (!open) return;
        reset(
            item
                ? {
                      name: item.name,
                      description: item.description,
                      category: item.category,
                      type: item.type,
                      price: String(item.price),
                      stock: String(item.stock),
                      image: item.image,
                  }
                : EMPTY_VALUES,
        );
    }, [open, item, reset]);

    const onSubmit: SubmitHandler<MenuItemFormValues> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const values = {
            name: data.name,
            description: data.description,
            category: data.category,
            type: data.type,
            price: Number(data.price),
            stock: Number(data.stock),
            image: data.image,
        };
        if (item) {
            dispatch(updateMenuItem({ ...item, ...values }));
            onSaved('Menu Item Updated');
        } else {
            dispatch(
                addMenuItem({ id: `r${Date.now()}`, restaurantId, ...values }),
            );
            onSaved('Menu Item Added');
        }
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {item ? 'Edit Menu Item' : 'Add Menu Item'}
            </DialogTitle>
            <DialogContent>
                <DialogForm
                    id="menu-item-form"
                    onSubmit={(e) => void handleSubmit(onSubmit)(e)}
                    noValidate
                >
                    <TextField
                        {...register('name')}
                        label="Name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        {...register('description')}
                        label="Description"
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                    <TextField
                        {...register('category')}
                        label="Category"
                        error={!!errors.category}
                        helperText={errors.category?.message}
                    />
                    <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} select label="Food type">
                                <MenuItem value="veg">Veg</MenuItem>
                                <MenuItem value="non-veg">Non-veg</MenuItem>
                            </TextField>
                        )}
                    />
                    <TextField
                        {...register('price')}
                        label="Price"
                        error={!!errors.price}
                        helperText={errors.price?.message}
                    />
                    <TextField
                        {...register('stock')}
                        label="Stock"
                        error={!!errors.stock}
                        helperText={errors.stock?.message}
                    />
                    <TextField
                        {...register('image')}
                        label="Image URL"
                        error={!!errors.image}
                        helperText={errors.image?.message}
                    />
                </DialogForm>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={isSubmitting}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    form="menu-item-form"
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
