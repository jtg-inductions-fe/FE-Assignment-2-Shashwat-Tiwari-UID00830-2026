/**
 * This file contains the container for the restaurant details page.
 * It handles route params, store communication and data shaping.
 */

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RestaurantDetails } from '@/components/RestaurantDetails/RestaurantDetails.component';
import { RootState } from '@/state/store';
import { MenuItem } from '@/state/types/menuSlice.types';

export const RestaurantDetailsContainer = () => {
    const { id } = useParams<{ id: string }>();

    const user = useSelector((state: RootState) => state.auth.user);
    const restaurant = useSelector((state: RootState) =>
        state.restaurants.items.find((r) => r.id === id),
    );
    const menuItems = useSelector((state: RootState) => state.menu.items);
    const isCustomer = user?.role === 'Customer';
    const isOwner = user?.role === 'Owner';
    const getCategories = () => {
        const grouped = new Map<string, MenuItem[]>();

        menuItems
            .filter((item) => item.restaurantId === id)
            .forEach((item) => {
                grouped.set(item.category, [
                    ...(grouped.get(item.category) ?? []),
                    item,
                ]);
            });
        return [...grouped.entries()];
    };

    const categories = getCategories();
    const handleAddToCart = () => {
        if (!restaurant) return;
    };
    return (
        <RestaurantDetails
            restaurant={restaurant}
            categories={categories}
            isCustomer={isCustomer}
            isOwner={isOwner}
            onAddToCart={handleAddToCart}
        />
    );
};
