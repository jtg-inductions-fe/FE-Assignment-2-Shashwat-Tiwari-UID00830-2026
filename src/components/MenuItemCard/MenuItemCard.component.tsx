/**
 * This file contains the Menu Item Card component
 */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Typography } from '@mui/material';

import { MenuItemCardProps } from '@/components/MenuItemCard/MenuItemCard.types';
import {
    CardBody,
    CardBox,
    CardImage,
    Description,
    FoodTypeLabel,
    Footer,
    Name,
    OutOfStock,
} from '@/components/MenuItemCard/styles';
import { OwnerActions } from '@/components/MenuItemCard/styles';
import { formatPrice } from '@/utils/format';

export const MenuItemCard = ({
    item,
    onAddToCart,
    onEdit,
    onDelete,
}: MenuItemCardProps) => (
    <CardBox>
        <CardImage src={item.image} alt={item.name} />
        <CardBody>
            <Name>{item.name}</Name>
            <FoodTypeLabel isVeg={item.type === 'veg'}>
                {item.type === 'veg' ? 'Veg' : 'Non-veg'}
            </FoodTypeLabel>
            <Description variant="body1">{item.description}</Description>
            <Footer>
                <Name>{formatPrice(item.price)}</Name>
                {onAddToCart &&
                    (item.stock === 0 ? (
                        <OutOfStock variant="body1">Out of Stock</OutOfStock>
                    ) : (
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => onAddToCart(item)}
                        >
                            Add To Cart
                        </Button>
                    ))}
            </Footer>
        </CardBody>
        {(onEdit || onDelete) && (
            <OwnerActions>
                <Typography variant="body1">Stock: {item.stock}</Typography>
                <div>
                    {onEdit && (
                        <IconButton
                            aria-label="Edit item"
                            onClick={() => onEdit(item)}
                        >
                            <EditIcon />
                        </IconButton>
                    )}
                    {onDelete && (
                        <IconButton
                            aria-label="Delete item"
                            onClick={() => onDelete(item)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </div>
            </OwnerActions>
        )}
    </CardBox>
);
