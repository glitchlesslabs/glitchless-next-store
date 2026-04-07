'use client';

import { Card } from '@/components/ui';
import { CartItemWithProduct } from '@/utils/types';
import { FirstColumn, SecondColumn, FourthColumn } from './cart-item-columns';
import { ThirdColumn } from './third-column';

export const CartItemsList = ({
  cartItems,
}: {
  cartItems: CartItemWithProduct[];
}) => {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;
        return (
          <Card
            key={id}
            className="mb-8 flex flex-col flex-wrap gap-x-4 gap-y-4 p-6 md:flex-row"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};
