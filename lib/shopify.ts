const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function ShopifyData(query: string) {
  const URL = `https://${domain}/api/2023-10/graphql.json`;

  const options = {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json();
    });
    return data;
  } catch (error) {
    throw new Error('Products not fetched');
  }
}

export async function getProductsInCollection() {
  const query = `
    {
      collection(handle: "frontpage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);
  const allProducts = response.data.collection.products.edges ? response.data.collection.products.edges : [];
  return allProducts;
}
