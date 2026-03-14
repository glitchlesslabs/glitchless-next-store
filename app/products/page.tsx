import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const layoutParam = resolvedSearchParams.layout;
  const searchParam = resolvedSearchParams.search;

  const layout =
    (Array.isArray(layoutParam) ? layoutParam[0] : layoutParam) || 'grid';
  const search =
    (Array.isArray(searchParam) ? searchParam[0] : searchParam) || '';

  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
