import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          nulla nisi excepturi cupiditate molestias. Saepe tempore harum quia
          vero quidem.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products" className="capitalize">
            our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
