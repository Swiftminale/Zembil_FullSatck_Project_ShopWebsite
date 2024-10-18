export const getCollections = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/collections`
    );

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch collections: ${response.status} ${response.statusText}`
      );
    }

    // Parse JSON only if the response is okay
    return await response.json();
  } catch (error) {
    console.error("Error fetching collections:", error);
    return null; // Or handle error accordingly
  }
};

export const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await response.json();
};

export const getProductsDetails = async (productsId: string) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productsId}`
  );

  // Log the response text to inspect it
  const text = await product.text();
  console.log("Response:", text);

  // Attempt to parse JSON only if the response looks like JSON
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }
};

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`
  );
  return await searchedProducts.json();
};

export const getOrders = async (customerId: string) => {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`
  );
  return await orders.json();
};

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`
  );
  return await relatedProducts.json();
};
