

export async function Login(email, password) {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      
    });
   

    if (response.ok) {
      
      const cookie = document.cookie;
      console.log('Cookie:', cookie);

      const data = await response.json();
      console.log('Login success:', data);
      
      return data
      
    } else {
      const errorMessage = await response.json();
      console.error('Login failed:', errorMessage);
      return false;
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    return false; 
  }
}