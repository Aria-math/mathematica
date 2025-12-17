import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import SectionTitle from '@/components/global/SectionTitle';
import { fetchUserOrders } from '@/utils/actions';
import { formatCurrency, formatDate } from '@/utils/format';

async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <>
      <SectionTitle text=" : کل محصولات خریداری شده" />
      <Table>
        <TableCaption className="font-Vazir">
          تعداد کل فروش ها : {orders.length}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="font-Vazir text-center">
              تعداد محصولات خریداری شده
            </TableHead>
            <TableHead className="font-Vazir text-center">
              قیمت تمام شده
            </TableHead>
            <TableHead className="font-Vazir text-center">مالیات بر ارزش افزوده</TableHead>
            <TableHead className="font-Vazir text-center">هزینه ی ارسال</TableHead>
            <TableHead className="font-Vazir text-center">تاریخ</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => {
            const { products, orderTotal, tax, shipping, createdAt } = order;
            return (
              <TableRow key={order.id}>
                <TableCell className="font-Vazir text-center">
                  {products}
                </TableCell>
                <TableCell className="font-Vazir text-center">
                  {formatCurrency(orderTotal)}
                </TableCell>
                <TableCell className="font-Vazir text-center">
                  {formatCurrency(tax)}
                </TableCell>
                <TableCell className="font-Vazir text-center">
                  {formatCurrency(shipping)}
                </TableCell>
                <TableCell className="font-Vazir text-center">
                  {formatDate(createdAt)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
export default OrdersPage;
