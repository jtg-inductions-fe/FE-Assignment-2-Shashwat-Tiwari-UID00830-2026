/**
 * This file contains the rendering logic and UI for the Discover page.
 */
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {
    Alert,
    Button,
    Snackbar,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { ConfirmDialog } from '@/components/ConfirmDialog/ConfirmDialog.component';
import {
    CardGrid,
    Heading,
    PageHeader,
    PageRoot,
    Searchbar,
    SearchField,
} from '@/components/Discover/Discover.styles';
import { EmptyState } from '@/components/EmptyState.component';
import { RestaurantCard } from '@/components/RestaurantCard/RestaurantCard.component';
import { RestaurantFormDialog } from '@/components/RestaurantFormDialog/RestaurantFormDialog.component';
import { useDebounce } from '@/hooks/useDebounce';
import { DiscoverProps, FoodFilter } from '@/pages/Discover/Discover.types';
import { Restaurant } from '@/state/types/restaurantSlice.types';

export const Discover = ({
    user,
    restaurants,
    onDeleteRestaurant,
}: DiscoverProps) => {
    const isOwner = user?.role === 'Owner';
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FoodFilter>('all');
    const [formOpen, setFormOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [editing, setEditing] = useState<Restaurant | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Restaurant | null>(null);
    const debouncedSearch = useDebounce(search);
    const term = debouncedSearch.trim().toLowerCase();

    const results = restaurants.filter((restaurant) => {
        if (isOwner && restaurant.ownerId !== user?.id) return false;
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
        onDeleteRestaurant(deleteTarget.id);
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
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <ToggleButtonGroup
                    exclusive
                    value={filter}
                    onChange={(_, value: FoodFilter | null) =>
                        value && setFilter(value)
                    }
                    aria-label="Food type"
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
                message={`${deleteTarget?.name} will be removed permanently.`}
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
