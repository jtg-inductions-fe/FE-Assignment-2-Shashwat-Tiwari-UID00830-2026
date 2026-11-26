/**
 * This file contains the restaurant card shown on the discover page.
 */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

import {
    CardBody,
    CardBox,
    CardImage,
    CardLink,
    Desc,
    FoodTypeLabel,
    Name,
    OwnerActions,
} from '@/components/RestaurantCard/RestaurantCard.styles';
import { RestaurantCardProps } from '@/components/RestaurantCard/RestaurantCard.types';
import { FOOD_TYPE } from '@/constant/TypeConstants';

export const RestaurantCard = ({
    restaurant,
    onEdit,
    onDelete,
}: RestaurantCardProps) => (
    <CardBox>
        <CardLink to={`/discover/${restaurant.id}`}>
            <CardImage src={restaurant.image} alt={restaurant.name} />
            <CardBody>
                <Name variant="body1">{restaurant.name}</Name>
                <Desc variant="body1">
                    {restaurant.cuisine}
                    <StarIcon />
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
                    <IconButton
                        onClick={() => onEdit(restaurant)}
                        aria-label="Edit restaurant"
                    >
                        <EditIcon />
                    </IconButton>
                )}
                {onDelete && (
                    <IconButton
                        onClick={() => onDelete(restaurant)}
                        aria-label="Delete restaurant"
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
            </OwnerActions>
        )}
    </CardBox>
);
