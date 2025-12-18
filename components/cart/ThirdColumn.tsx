'use client';
import { useState } from 'react';
import SelectProductAmount from '../single-product/SelectProductAmount';
import { Mode } from '../single-product/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '../ui/use-toast';
import { IoIosWarning } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';


function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false); // states defined here only for consistency. they could be inside SelectProductAmount
  const { toast } = useToast();

  const handleAmountChange = async (value: number) => {
    // states don't batch because of async in between
    setIsLoading(true);
    toast({
      description: (
        <div className="flex items-center justify-between">
          <IoIosWarning className="text-yellow-500 h-6 w-6 flex-shrink-0 mr-1" />
          <div className="pr-2 font-Vazir">... در حال محاسبه</div>
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
      description: (
        <div className="flex items-center justify-between">
          <IoIosCheckmarkCircle className="text-green-500 h-6 w-6 flex-shrink-0 mr-1" />
          <div className="pr-2 font-Vazir">{result.message}</div>
        </div>
      ),
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
