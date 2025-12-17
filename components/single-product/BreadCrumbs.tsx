import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb>

      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink href='/' className='capitalize text-lg font-Vazir'>
            صفحه ی اصلی
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href='/products' className='capitalize text-lg font-Vazir'>
            محصولات
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage className='capitalize text-lg font-Vazir'>{name}</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>

    </Breadcrumb>
  );
}
export default BreadCrumbs;
