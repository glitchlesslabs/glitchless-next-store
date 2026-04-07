import { cn } from '@/lib/utils';

export const EmptyList = ({
  heading = 'No items found.',
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <h2 className={cn('text-xl', className)}>{heading}</h2>;
};
