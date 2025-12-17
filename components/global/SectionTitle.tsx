import { Separator } from '@/components/ui/separator';

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8 font-Vazir text-right">
        {text}
      </h2>
      <Separator className="border border-gray-900 dark:border-hidden" />
    </div>
  );
}
export default SectionTitle;
