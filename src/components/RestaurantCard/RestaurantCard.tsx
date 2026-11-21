/**
 * This file contains the restaurant card shown on the discover page.
 */

import { Star } from '@mui/icons-material';

import {
    CardBody,
    CardBox,
    CardImage,
    CardLink,
    Desc,
    FoodTypeLabel,
    Name,
} from '@/components/RestaurantCard/styles';
import { Restaurant } from '@/state/types/restaurantSlice.types';

const FOOD_TYPE = {
    veg: 'Veg',
    'non-veg': 'Non-Veg',
};

interface RestaurantCardProps {
    restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
    <CardBox>
        <CardLink to={`/discover/${restaurant.id}`}>
            <CardImage src={restaurant.image} alt={restaurant.name} />
            <CardBody>
                <Name>{restaurant.name}</Name>
                <Desc>
                    {restaurant.cuisine}
                    <Star />
                    {restaurant.rating}
                </Desc>
                <Desc>{restaurant.address}</Desc>
                <FoodTypeLabel isVeg={restaurant.type === 'veg'}>
                    {FOOD_TYPE[restaurant.type]}
                </FoodTypeLabel>
            </CardBody>
        </CardLink>
    </CardBox>
);

export default RestaurantCard;
