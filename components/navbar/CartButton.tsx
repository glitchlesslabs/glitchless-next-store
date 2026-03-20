import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { Button } from '../ui/button';
import { fetchCartItems } from '@/utils/actions';

async function CartButton() {
  // temp
  const numItemsInCart = await fetchCartItems();

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
