import { Separator } from '@/components/ui/separator';
import Sidebar from './Sidebar';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl pl-4 font-Vazir text-right">: داشبورد</h2>
      <Separator className="mt-2 border border-gray-900 dark:border-hidden" />

      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>

        <div className="lg:col-span-10 px-4 min-w-0 overflow-x-auto">
          {children}
        </div>
      </section>
    </>
  );
}
export default DashboardLayout;
