export async function getSellingProducts() {
  try {
    const response = await fetch(`/api/products/selling`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    });
    if (response.ok) {
      const data = await response.json();
      
      return data
     
  
    } else {
      console.log('Error retrieving Selling Products:', response.statusText);
     
    }

  } catch (error) {
    console.error('error fetching Selling products', error)
  }
}