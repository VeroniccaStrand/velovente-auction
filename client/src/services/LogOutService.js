

export async function Logout () {
  
  try {
    const response = await fetch('/api/users/logout', {
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
    })

    if(response.ok){
      
      return true;
    }
  } catch (error) {
    console.error('Error logging out:', error);
   
    return false;
  }
}