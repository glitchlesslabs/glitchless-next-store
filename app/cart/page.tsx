import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { CartItemsList, CartTotals } from '@/components/cart';
import { SectionTitle } from '@/components/global';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';

async function CartPage() {
  const user = await currentUser();

  if (!user?.id) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId: user.id });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) return <SectionTitle text="Empty Cart" />;

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;
