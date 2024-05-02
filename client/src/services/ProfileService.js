

export async function GetProfile() {
 

  try {
    
    const response = await fetch(`/api/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User profile retrieved:', data);
      return data
     

    } else {
      console.log('Error retrieving profile:', response.statusText);
     
    }

  } catch (error) {
    console.error('Error fetching profile:', error);
    
  }
}