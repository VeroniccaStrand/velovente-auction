export const ServiceBid = async (bidObject) => {
  console.log(bidObject)
  try {
    const response = await fetch('/api/bids', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify(bidObject)
    })

    
    
    if(response.ok) {
      const data = await response.json()
      return data
    } else {
      const errorMessage = await response.json();
      console.error('Fail adding bid:', errorMessage)
      return false
    }
  } catch (error) {
    console.error('catching error', error.message);
    return false; 
  }
}