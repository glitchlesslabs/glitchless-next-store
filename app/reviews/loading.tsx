'use client';

import { Card, CardHeader, Skeleton } from '@/components/ui';

function loading() {
  return (
    <section className="mt-4 grid gap-8 md:grid-cols-2">
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </section>
  );
}

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="mb-2 h-4 w-37.5" />
            <Skeleton className="h-4 w-37.5" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default loading;
