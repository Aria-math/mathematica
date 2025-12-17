import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text='شما محصولی را نپسندیده اید' />;

  return (
    <div>
      <SectionTitle text=': پسندیده ها' />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}
export default FavoritesPage;
