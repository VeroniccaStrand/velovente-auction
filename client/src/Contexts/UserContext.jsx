import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { Login } from '../services/LoginService.js';
import { Logout } from '../services/LogOutService.js';
import { GetProfile } from '../services/ProfileService.js';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const token = document.cookie
      .split(';')
      .find((cookie) => cookie.trim().startsWith('jwt='));

    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loggedIn) {
          const profileData = await GetProfile();
          setUserProfile(profileData);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchData();
  }, [loggedIn]);

  const handleLogin = async (email, password) => {
    try {
      const success = await Login(email, password);
      if (success !== false) {
        setLoggedIn(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      const success = await Logout();
      if (success) {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error('Error logging out ');
    }
  };

  const handleProfile = async () => {
    try {
      const profileData = await GetProfile();
      setUserProfile(profileData);
      // Uppdatera userProfile med hämtad profildata
    } catch (error) {
      console.log('Error fetching profile:', error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        handleLogin,
        handleLogout,

        userProfile,
        handleProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext };
