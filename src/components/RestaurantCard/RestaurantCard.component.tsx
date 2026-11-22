/**
 * This file contains the restaurant card shown on the discover page.
 */

import { Star } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

import { RestaurantCardProps } from '@/components/RestaurantCard/RestaurantCard.types';
import {
    CardBody,
    CardBox,
    CardImage,
    CardLink,
    Desc,
    FoodTypeLabel,
    Name,
    OwnerActions,
} from '@/components/RestaurantCard/styles';

const FOOD_TYPE = {
    veg: 'Veg',
    'non-veg': 'Non-Veg',
};

const RestaurantCard = ({
    restaurant,
    onEdit,
    onDelete,
}: RestaurantCardProps) => (
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
        {(onEdit || onDelete) && (
            <OwnerActions>
                {onEdit && (
                    <IconButton onClick={() => onEdit(restaurant)}>
                        <EditIcon />
                    </IconButton>
                )}
                {onDelete && (
                    <IconButton onClick={() => onDelete(restaurant)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </OwnerActions>
        )}
    </CardBox>
);

export default RestaurantCard;
