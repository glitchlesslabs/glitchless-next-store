import { LoadingContainer } from '@/components/global';
import { FeaturedProducts, Hero } from '@/components/home';
import { Suspense } from 'react';

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
