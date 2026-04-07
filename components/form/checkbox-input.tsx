'use client';

import { Checkbox } from '@/components/ui';

type CheckboxInputProps = {
  defaultChecked?: boolean;
  label: string;
  name: string;
};

export const CheckboxInput = ({
  defaultChecked = false,
  label,
  name,
}: CheckboxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
