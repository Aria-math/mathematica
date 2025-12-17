import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section dir="rtl">
      <h1 className="text-2xl font-semibold mb-8 capitalize font-Vazir">
        ویرایش محصول
      </h1>
      <div className="border p-8 rounded font-Vazir">
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="ویرایش تصویر"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>

        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            {/* 1 */}
            <input type="hidden" name="id" value={id} />

            {/* 2 */}
            <FormInput
              type="text"
              name="name"
              label="نام محصول : "
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="نام استاد : "
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="توضیحات محصول : "
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="محصول ویژه؟"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="ویرایش" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;
