import { Button } from '@mui/material';

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
import { formatPrice } from '@/utils/format';

import { MenuItemCardProps } from './MenuItemCard.types';

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
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
    </CardBox>;
};
