const DATA_URL =
  "https://opensheet.elk.sh/1setblbEegkM7_fshbPRWLS_uxK_WzfYOt0Rs0qr0FHs/Product";

const COLOR_URL =
  "https://opensheet.elk.sh/1setblbEegkM7_fshbPRWLS_uxK_WzfYOt0Rs0qr0FHs/Color";

export async function loadProducts() {
  const [productsRes, colorsRes] = await Promise.all([
    fetch(DATA_URL),
    fetch(COLOR_URL),
  ]);

  const products = await productsRes.json();
  const colors = await colorsRes.json();

  return products.map((product) => ({
    ...product,
    id: Number(product.id),
    price: Number(product.price),
    bestseller: product.bestseller === "TRUE",
    colors: colors.filter(
      (color) => Number(color.productid) === Number(product.id)
    ),
  }));
}