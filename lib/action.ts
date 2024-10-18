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
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await products.json();
};

export const getProductDetails = async (productId: string) => {
  try {
    const product = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );

    // Check if the response is successful (status code 200-299)
    if (!product.ok) {
      throw new Error(
        `Failed to fetch product details: ${product.status} ${product.statusText}`
      );
    }

    // Parse JSON only if the response is okay
    return await product.json();
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null; // Or handle error accordingly
  }
};

