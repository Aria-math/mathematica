import { fetchProductRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

async function ProductRating({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);

  const countValue = `تعداد نظرات : ${count} عدد`;

  return (
    <div dir='rtl'>
      <span className="flex gap-1 items-center text-md mt-1 mb-2 font-Vazir">
        میانگین نمرات : {rating}
        <div className="items-center justify-center mb-1">
          <FaStar />
        </div>
      </span>
      <div className='font-Vazir mb-6'>{countValue}</div>
    </div>
  );
}

export default ProductRating;
