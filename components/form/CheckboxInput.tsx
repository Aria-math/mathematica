'use client';

import { Checkbox } from '@/components/ui/checkbox';

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {
  return (
    <div className="flex items-center gap-2 group">
      <label
        htmlFor={name}
        className="
          text-sm font-Vazir capitalize
          transition-all
          opacity-40
          cursor-not-allowed
          group-has-[button[data-state=checked]]:opacity-100
          group-has-[button[data-state=checked]]:cursor-pointer
        "
      >
        {label}
      </label>

      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
export default CheckboxInput;
