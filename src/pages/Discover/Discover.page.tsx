/**
 * This file contaisnt the Restaurant discovery component.
 */
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import {
    Alert,
    Button,
    Snackbar,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';

import ConfirmDialog from '@/components/ConfirmDialog/ConfirmDialog.component';
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard.component';
import RestaurantFormDialog from '@/components/RestaurantFormDialog/RestaurantFormDialog.component';
import useDebounce from '@/hooks/useDebounce';
import {
    CardGrid,
    EmptyState,
    Heading,
    PageHeader,
    PageRoot,
    Searchbar,
    SearchField,
} from '@/pages/Discover/styles';
import { deleteRestaurant } from '@/state/slices/restaurantSlice';
import { RootState } from '@/state/store';
import { Restaurant } from '@/state/types/restaurantSlice.types';

type FoodFilter = 'all' | 'veg' | 'non-veg';

const Discover = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const restaurants = useSelector(
        (state: RootState) => state.restaurant.items,
    );
    const isOwner = user?.role === 'Owner';
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FoodFilter>('all');
    const [formOpen, setFormOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [editing, setEditing] = useState<Restaurant | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Restaurant | null>(null);
    const debouncedSearch = useDebounce(search);
    const dispatch = useDispatch();
    const term = debouncedSearch.trim().toLowerCase();

    const results = restaurants.filter((restaurant) => {
        if (user?.role === 'Owner' && restaurant.ownerId !== user.id)
            return false;
        if (filter === 'veg' && restaurant.type !== 'veg') return false;
        if (filter === 'non-veg' && restaurant.type !== 'non-veg') return false;
        return restaurant.name.toLowerCase().includes(term);
    });
    const openAdd = () => {
        setEditing(null);
        setFormOpen(true);
    };
    const openEdit = (restaurant: Restaurant) => {
        setEditing(restaurant);
        setFormOpen(true);
    };
    const onDelete = () => {
        if (deleteTarget === null) return;
        dispatch(deleteRestaurant(deleteTarget.id));
        setDeleteTarget(null);
        setMessage('Restaurant Deleted');
    };
    return (
        <PageRoot>
            <PageHeader>
                <Heading variant="h3">
                    {isOwner ? 'Your restaurants' : 'Restaurants'}
                </Heading>
                {isOwner && (
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AddIcon />}
                        onClick={openAdd}
                    >
                        Add New Restaurant
                    </Button>
                )}
            </PageHeader>
            <Searchbar>
                <SearchField
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search for Restaurants"
                />
                <ToggleButtonGroup
                    exclusive
                    value={filter}
                    onChange={(_, value: FoodFilter | null) =>
                        value && setFilter(value)
                    }
                >
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="veg">Veg</ToggleButton>
                    <ToggleButton value="non-veg">Non-Veg</ToggleButton>
                </ToggleButtonGroup>
            </Searchbar>
            {results.length === 0 ? (
                <EmptyState>No restaurant found</EmptyState>
            ) : (
                <CardGrid>
                    {results.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                            onEdit={isOwner ? openEdit : undefined}
                            onDelete={isOwner ? setDeleteTarget : undefined}
                        />
                    ))}
                </CardGrid>
            )}
            {isOwner && user && (
                <RestaurantFormDialog
                    open={formOpen}
                    restaurant={editing}
                    ownerId={user.id}
                    onClose={() => setFormOpen(false)}
                    onSaved={setMessage}
                />
            )}
            <ConfirmDialog
                open={deleteTarget !== null}
                title="Delete Restaurant?"
                message={`${deleteTarget?.name} will be removed permanenetly.`}
                confirmLabel="delete"
                onConfirm={onDelete}
                onCancel={() => setDeleteTarget(null)}
            />

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

export default Discover;
