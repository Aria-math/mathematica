import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { createProductAction } from '@/utils/actions';

function CreateProductPage() {
  

  return (
    <section dir="rtl">
      <h1 className="text-2xl font-semibold mb-8 capitalize font-Vazir">
        افزودن محصول جدید
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4 font-Vazir">
            <FormInput
              type="text"
              name="name"
              label="نام محصول : "
              defaultValue={'حسابان کنکور - از دهم تا دوازدهم'}
            />
            <FormInput
              type="text"
              name="company"
              label="نام استاد : "
              defaultValue={'آریا عباس دخت'}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="توضیحات محصول : "
            defaultValue={
              'پکیج حسابان کنکور آریا عباس‌دخت یک مجموعه جامع و کاربردی است که تمامی مباحث حسابان را به زبان ساده و قدم‌به‌قدم پوشش می‌دهد. با تمرکز ویژه بر نکات پرتکرار کنکور و ارائه مثال‌های متنوع، این پکیج به دانش‌آموزان کمک می‌کند مفاهیم سخت ریاضی را به راحتی یاد بگیرند و در آزمون‌های سراسری به تسلط برسند. روش تدریس آریا عباس‌دخت به گونه‌ای طراحی شده که یادگیری عمیق و ماندگار فراهم شود و دانش‌آموزان با اعتماد به نفس بالا به سراغ تست‌های دشوار بروند. این پکیج برای تمام کسانی که می‌خواهند نمره عالی در درس حسابان کسب کنند، یک انتخاب ایده‌آل و ارزشمند است.'
            }
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="محصول ویژه؟" />
          </div>
          <SubmitButton text="ساخت محصول" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
