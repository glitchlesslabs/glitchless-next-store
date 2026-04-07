'use client';
import { useState } from 'react';
import { SelectProductAmount } from './select-product-amount';
import { Mode } from './select-product-amount';
import { FormContainer, ProductSignInButton, SubmitButton } from '../form';
import { addToCartAction } from '@/utils/actions';
import { useAuth } from '@clerk/nextjs';

export const AddToCart = ({ productId }: { productId: string }) => {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="add to cart" className="mt-8" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
};
