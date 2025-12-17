'use client';
import { useState } from 'react';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { addToCartAction } from '@/utils/actions';
import { useAuth } from '@clerk/nextjs';
import { ProductSignInButton } from '../form/Buttons';


function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div dir='rtl' className='mt-8'>

      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />

      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type='hidden' name='productId' value={productId} />
          <input type='hidden' name='amount' value={amount} />
          <SubmitButton text='افزودن به سبد خرید' className='mt-4 font-Vazir' />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}

    </div>
  );
}
export default AddToCart;
