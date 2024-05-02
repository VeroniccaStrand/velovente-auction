
export async function register (formData) {
  console.log(formData)
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData)
    })

    if (response.ok) {
      const data = await response.json();
      console.log('User registered successfully:', data);
      return true;
    } else {
      const errorData = await response.json();
      console.error('Error registering user:', errorData.message);
      return false;
    }
  } catch (error) {
    console.error('Error registering user:', error.message);
    return false;
  }

}