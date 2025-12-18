import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: ' نام باید حداقل دارای 2 کاراکتر باشد',
    })
    .max(100, {
      message: 'نام باید حداکثر دارای 100 کاراکتر باشد',
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: 'قیمت باید عددی مثبت باشد',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'توضیحات باید بین 10 تا 1000 کلمه باشد',
    }
  ),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'حجم تصویر باید کمتر از یک مگابایت باشد')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'فایل ورودی فقط می تواند تصویر باشد');
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
}

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== '', {
    message: 'شناسه ی محصول نمی تواند خالی باشد',
  }),
  authorName: z.string().refine((value) => value !== '', {
    message: 'نام نویسنده نمی تواند خالی باشد',
  }),
  authorImageUrl: z.string().refine((value) => value !== '', {
    message: 'آدرس تصویر اکانت نویسنده نمی تواند خالی باشد',
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: 'نمره ، باید حداقل یک باشد' })
    .max(5, { message: 'نمره ، باید حداکثر 5 باشد' }),
  comment: z
    .string()
    .min(10, { message: 'نظر باید حداقل 10 کاراکتر را داشته باشد' })
    .max(1000, { message: 'نظر باید حداکثر 1000 کاراکتر باشد' }),
});
