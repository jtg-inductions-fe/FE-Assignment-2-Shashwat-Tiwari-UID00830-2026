/**
 * This file contains the container for the Discover page.
 * It handles data and store communication only.
 */
import { useDispatch, useSelector } from 'react-redux';

import { Discover } from '@/components/Discover/Discover.component';
import { deleteRestaurant } from '@/state/slices/restaurantSlice';
import { RootState } from '@/state/store';

export const DiscoverContainer = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const restaurants = useSelector(
        (state: RootState) => state.restaurants.items,
    );
    const dispatch = useDispatch();

    const handleDeleteRestaurant = (id: string) => {
        dispatch(deleteRestaurant(id));
    };

    return (
        <Discover
            user={user}
            restaurants={restaurants}
            onDeleteRestaurant={handleDeleteRestaurant}
        />
    );
};
