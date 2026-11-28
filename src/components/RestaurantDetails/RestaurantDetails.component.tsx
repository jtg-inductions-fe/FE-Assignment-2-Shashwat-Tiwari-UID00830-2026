/**
 * This file contains the rendering logic and UI for the restaurant details page
 */

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { Alert, Button, Snackbar, Typography } from '@mui/material';

import { EmptyState } from '@/components/EmptyState.component';
import { MenuItemCard } from '@/components/MenuItemCard/MenuItemCard.component';
import {
    Banner,
    BannerActions,
    BannerImage,
    BannerInfo,
    CategoryTitle,
    ItemGrid,
    MenuHeader,
    PageRoot,
    Rating,
    Section,
} from '@/components/RestaurantDetails/RestaurantDetails.styles';
import { RestaurantDetailsProps } from '@/components/RestaurantDetails/RestaurantDetails.types';
import { StoreHourDialog } from '@/components/StoreHoursDialog/StoreHourDialog.component';
import { deleteMenuItem } from '@/state/slices/menuSlice';
import { MenuItem } from '@/state/types/menuSlice.types';
import { getOpenStatus } from '@/utils/hours';

import { ConfirmDialog } from '../ConfirmDialog/ConfirmDialog.component';
import { MenuItemFormDialog } from '../MenuItemFormDialog/MenuItemFormDialog.component';

export const RestaurantDetails = ({
    restaurant,
    categories,
    isCustomer,
    isOwner,
    onAddToCart,
}: RestaurantDetailsProps) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [itemFormOpen, setItemFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<MenuItem | null>(null);
    const [hoursOpen, setHoursOpen] = useState(false);
    if (!restaurant) {
        return (
            <PageRoot>
                <EmptyState>Restaurant Not Found</EmptyState>
                <Button component={Link} to="/discover" variant="contained">
                    Back to Restaurants
                </Button>
            </PageRoot>
        );
    }
    const status = getOpenStatus(restaurant.hours);
    const openAddItem = () => {
        setEditingItem(null);
        setItemFormOpen(true);
    };
    const openEditItem = (item: MenuItem) => {
        setEditingItem(item);
        setItemFormOpen(true);
    };
    const onDeleteItem = () => {
        if (!deleteTarget) return;
        dispatch(deleteMenuItem(deleteTarget.id));
        setDeleteTarget(null);
        setMessage('Menu Item Deleted');
    };
    const handleAddToCart = (item: MenuItem) => {
        onAddToCart(item);
        setMessage(`${item.name} added to cart`);
    };
    return (
        <PageRoot>
            <Banner>
                <BannerImage src={restaurant.image} alt={restaurant.name} />
                <BannerInfo>
                    <Typography variant="h3">{restaurant.name}</Typography>
                    <Typography>Cuisine: {restaurant.cuisine}</Typography>
                    <Rating>
                        <StarIcon />
                        {restaurant.rating}
                    </Rating>
                    <Typography variant="body1">
                        {restaurant.address}
                    </Typography>
                    <BannerActions>
                        <Typography variant="body2">{status.label}</Typography>
                        {isOwner && (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => setHoursOpen(true)}
                            >
                                Edit Store Hours
                            </Button>
                        )}
                    </BannerActions>
                </BannerInfo>
            </Banner>
            {isOwner && (
                <MenuHeader>
                    <Typography variant="h3">Menu</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AddIcon />}
                        onClick={openAddItem}
                    >
                        Add Menu Item
                    </Button>
                </MenuHeader>
            )}
            {categories.length === 0 ? (
                <EmptyState>No menu items yet</EmptyState>
            ) : (
                categories.map(([category, items]) => (
                    <Section key={category}>
                        <CategoryTitle>{category}</CategoryTitle>
                        <ItemGrid>
                            {items.map((item) => (
                                <MenuItemCard
                                    key={item.id}
                                    item={item}
                                    onAddToCart={
                                        isCustomer ? handleAddToCart : undefined
                                    }
                                    onEdit={isOwner ? openEditItem : undefined}
                                    onDelete={
                                        isOwner ? setDeleteTarget : undefined
                                    }
                                />
                            ))}
                        </ItemGrid>
                    </Section>
                ))
            )}
            {isOwner && (
                <>
                    <MenuItemFormDialog
                        open={itemFormOpen}
                        item={editingItem}
                        restaurantId={restaurant.id}
                        onClose={() => setItemFormOpen(false)}
                        onSaved={setMessage}
                    />
                    <ConfirmDialog
                        open={deleteTarget !== null}
                        title="Delete menu item?"
                        message={`"${deleteTarget?.name ?? ''}" will be removed from the menu.`}
                        confirmLabel="Delete"
                        onConfirm={onDeleteItem}
                        onCancel={() => setDeleteTarget(null)}
                    />
                    <StoreHourDialog
                        open={hoursOpen}
                        restaurant={restaurant}
                        onClose={() => setHoursOpen(false)}
                        onSaved={setMessage}
                    />
                </>
            )}
            <Snackbar
                open={message !== ''}
                autoHideDuration={3000}
                onClose={() => setMessage('')}
            >
                <Alert severity="success" variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </PageRoot>
    );
};
