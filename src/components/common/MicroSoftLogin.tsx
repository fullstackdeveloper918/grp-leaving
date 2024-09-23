"use client";
import { useMsal } from '@azure/msal-react';
import Image from 'next/image';
import Images from "../../constants/images"
const MicroSoftLogin = () => {
  const { instance, accounts } = useMsal();
  const handleLogin = () => {
    instance.loginPopup()
      .then(response => {
        console.log('Logged in:', response);
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div>
     <button onClick={handleLogin}>
      <Image src={Images.microsoftLogo}   alt="Microsoft Logo" style={{ width: '18%', height:'18%', borderRadius: '50%',border: '1px solid gray',
        objectFit: 'cover'}} />
      </button>
    </div>
  );
};

export default MicroSoftLogin;
