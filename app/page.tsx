import { Suspense } from 'react';
import { LoadingContainer } from '@/components/global';
import { FeaturedProducts, Hero } from '@/components/home';

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
export default HomePage;
