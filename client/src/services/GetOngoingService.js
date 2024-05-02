export async function GetOngoingService() {
try {
  const response = await fetch(`/api/products/bidding`, {
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
    console.log('Error retrieving ongoingBids:', response.statusText);
   
  }
} catch (error) {
  console.error('Error fetching ongoingBids:', error);
}
}