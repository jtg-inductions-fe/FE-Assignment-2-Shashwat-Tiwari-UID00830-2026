/**
 * This file contaisnt the Restaurant discovery component.
 */
import { useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import RestaurantCard from '@/components/RestaurantCard/RestaurantCard';
import useDebounce from '@/hooks/useDebounce';
import {
    CardGrid,
    EmptyState,
    PageRoot,
    Searchbar,
    SearchField,
} from '@/pages/Discover/styles';
import { RootState } from '@/state/store';

type FoodFilter = 'all' | 'veg' | 'non-veg';

const Discover = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const restaurants = useSelector(
        (state: RootState) => state.restaurant.items,
    );
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FoodFilter>('all');
    const debouncedSearch = useDebounce(search);
    const results = useMemo(() => {
        const term = debouncedSearch.trim().toLowerCase();
        return restaurants.filter((r) => {
            if (user?.role === 'Owner' && r.ownerId !== user.id) return false;
            if (filter === 'veg' && r.type !== 'veg') return false;
            if (filter === 'non-veg' && r.type !== 'non-veg') return false;
            return r.name.toLowerCase().includes(term);
        });
    }, [restaurants, user, filter, debouncedSearch]);
    return (
        <PageRoot>
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
                        />
                    ))}
                </CardGrid>
            )}
        </PageRoot>
    );
};

export default Discover;
