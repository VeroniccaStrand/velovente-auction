import { useState, useContext } from 'react';
import { register } from '../../services/RegisterService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

function RegisterForm() {
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, username } = formData;

    if (!email || !password || !username || !firstName || !lastName) {
      setError('Please fill out all fields');
      return;
    }

    setError('');

    try {
      const success = await register({
        firstName,
        lastName,
        username,
        email,
        password,
      });

      if (success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          username: '',
        });

        handleLogin(email, password);

        navigate('/');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='grid grid-cols-2 gap-8 p-4'>
      <div className='flex flex-col max-w-lg p-4'>
        <p className='uppercase font-bold text-3xl text-white mb-4'>
          Create Account
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className='input input-bordered mb-2'
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className='input input-bordered mb-2'
          />
          <div className='input input-bordered flex items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='input input-bordered flex items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='text-zinc-200 uppercase mt-4 font-bold btn bg-orange-950 hover:bg-orange-400 w-36'
          >
            Create
          </button>
        </form>
      </div>
      <div>
        <img
          src='https://source.unsplash.com/man-in-red-jacket-riding-motocross-dirt-bike-Nvvmuwm5hUw'
          alt=''
          className='w-full h-auto'
        />
      </div>
    </div>
  );
}

export default RegisterForm;
