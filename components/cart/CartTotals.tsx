import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/utils/format';
import { createOrderAction } from '@/utils/actions';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { Cart } from '@prisma/client';

function CartTotals({ cart }: { cart: Cart }) {
  // because im just reading Cart field (and not other field which do exist) , setting the type as Cart is fine. read 'prisma type calculating' in notion

  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label=" : قیمت محصول" amount={cartTotal} />
        <CartTotalRow label=" : هزینه ی ارسال" amount={shipping} />
        <CartTotalRow label=" : مالیات بر ارزش افزوده" amount={tax} />

        <CardTitle className="mt-8 font-Vazir">
          <CartTotalRow
            label=" : هزینه ی تمام شده"
            amount={orderTotal}
            lastRow
          />
        </CardTitle>
      </Card>
      <div dir="rtl">
        <FormContainer action={createOrderAction}>
          <SubmitButton
            text="پرداخت"
            className="w-full mt-8 font-Vazir font-bold"
          />
        </FormContainer>
      </div>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm font-Vazir">
        <span>{formatCurrency(amount)}</span>
        <span>{label}</span>
      </p>
      {lastRow ? null : (
        <Separator className="my-2 border border-gray-900 dark:border-hidden" />
      )}
    </>
  );
}

export default CartTotals;
