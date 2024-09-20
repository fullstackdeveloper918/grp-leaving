"use client";
import { loginRequest, setupMSALConfig } from '@/utils/microsoftConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import React, { useEffect, useState } from 'react';

const MicroSoftLogin = () => {
  const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);

  useEffect(() => {
    const initializeMSAL = async () => {
      const msalConfig = await setupMSALConfig();
      const instance = new PublicClientApplication(msalConfig);
      setMsalInstance(instance);
      
      try {
        // Handle redirect response
        const authResult = await instance.handleRedirectPromise();
        if (authResult) {
          loginWithMicrosoft(authResult); // Handle the login response
        }
      } catch (error) {
        console.error('Error during MSAL initialization:', error);
      }
    };

    initializeMSAL();
  }, []);

  const handleLogin = async () => {
    console.log(msalInstance,"msalInstance");
    
    if (msalInstance) {
      try {
        await msalInstance.loginRedirect(loginRequest); 
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  const loginWithMicrosoft = async (loginResponse: any) => {
    console.log('Microsoft login successful:', loginResponse);
    const items = {
      social_token: loginResponse?.account?.idToken,
      social_type: "MICROSOFT",
      device_type: "WEB",
    };

    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API response:', data);
    } catch (error) {
      console.error('Failed to send data to API:', error);
    }
  };


  return (
    <div>
     <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
};

export default MicroSoftLogin;
