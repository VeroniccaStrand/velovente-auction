import { useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon, LockClosedIcon } from '@heroicons/react/16/solid';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Fill out email and password for validation');
      return;
    }

    const response = await handleLogin(email, password);
    console.log(response);
    if (!response) {
      setError('Invalid email or password');
    } else {
      navigate('/profile');
      setError('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='grid grid-cols-2 p-4'>
      <div className=' flex-col max-w-lg p-4'>
        <p className=' uppercase font-bold text-3xl text-white mb-4 ml-8'>
          Account Login
        </p>
        <form onSubmit={handleSubmit} className=' container text-white '>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input input-bordered flex items-center gap-2 mb-2'>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='text-zinc-200 uppercase mt-4 font-bold btn bg-orange-950 hover:bg-orange-400 w-36'
          >
            Log in
          </button>
        </form>
        <div className='mt-4 flex gap-4 mt-20 ml-8'>
          <div className='flex gap-2'>
            <UserPlusIcon className='h-6 w-6 ' />
            <Link to='/account/create' className='underline'>
              Create account
            </Link>
          </div>
          <div className='flex gap-2'>
            <LockClosedIcon className='h-6 w-6 ' />
            <Link className='underline'>Forgot Password?</Link>
          </div>
        </div>
      </div>

      {/* Höger kolumn */}
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

export default LoginForm;
