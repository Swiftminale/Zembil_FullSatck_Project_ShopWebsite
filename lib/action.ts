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
}