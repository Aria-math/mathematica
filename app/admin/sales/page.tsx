import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { fetchAdminOrders } from '@/utils/actions';
import { formatCurrency, formatDate } from '@/utils/format';

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <Table>
      <TableCaption className="font-Vazir">
        تعداد کل محصولات : {orders.length}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-Vazir text-center">ایمیل</TableHead>
          <TableHead className="font-Vazir text-center">
            تعداد محصولات خریداری شده
          </TableHead>
          <TableHead className="font-Vazir text-center">قیمت تمام شده</TableHead>
          <TableHead className="font-Vazir text-center">
            مالیات بر ارزش افزوده
          </TableHead>
          <TableHead className="font-Vazir text-center">هزینه ی ارسال</TableHead>
          <TableHead className="font-Vazir text-center">تاریخ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const { products, orderTotal, tax, shipping, createdAt, email } =
            order;
          return (
            <TableRow key={order.id}>
              <TableCell className="text-center">{email}</TableCell>
              <TableCell className="text-center font-Vazir">{products}</TableCell>
              <TableCell className="text-center font-Vazir">
                {formatCurrency(orderTotal)}
              </TableCell>
              <TableCell className="text-center font-Vazir">
                {formatCurrency(tax)}
              </TableCell>
              <TableCell className="text-center font-Vazir">
                {formatCurrency(shipping)}
              </TableCell>
              <TableCell className="text-center font-Vazir">
                {formatDate(createdAt)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default SalesPage;
