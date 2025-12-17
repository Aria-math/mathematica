'use client';
import { useState } from 'react';
import SelectProductAmount from '../single-product/SelectProductAmount';
import { Mode } from '../single-product/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '../ui/use-toast';


function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false); // states defined here only for consistency. they could be inside SelectProductAmount
  const { toast } = useToast();

  const handleAmountChange = async (value: number) => {
    // states don't batch because of async in between
    setIsLoading(true);
    toast({
      description: (
        <div dir="rtl" className="font-Vazir">
          در حال محاسبه...
        </div>
      ),
      variant: 'warning',
    });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast({
      description: <div className="font-Vazir">{result.message}</div>,
      variant: 'success',
    });
    setIsLoading(false);
  }; // states update step by step , and this whole components react to that. they are in separate queues
  // read 'state variables use in the project' in notion
  return (
    <div dir='rtl' className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />

      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="حذف از سبد خرید" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
