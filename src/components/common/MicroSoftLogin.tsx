"use client"
import React, { useEffect, useRef } from 'react';

const MicroSoftLogin = () => {
  const divRef = useRef<any>(null);

  const loginWithMicrosoft = async(loginResponse:any) => {
    console.log('Microsoft login successful:', loginResponse);
    let items = {
        social_token: loginResponse?.credential,
        social_type: "GOOGLE",
        // fcm_token: fcm_token?.tokenId,
        device_type: "WEB",
      };
      try {
        let apiRes = await items;
        // if (userInfo?.access_token) {
        //     henceforthApi.setToken('')
        // }
        // setUserInfo(apiRes)
        // if (apiRes.type == "ARTIST") {
        //     // router.replace('/artist/dashboard')
        //     // redirect
        //     // if (router.query?.redirect) {
        //     let url = router.query?.redirect ? String(router.query?.redirect).replaceAll("_", '/') : null
        //     let oldQuery = router?.query
        //     delete oldQuery['redirect']
        //     delete oldQuery['type']
  
        //     router.replace({ pathname: url ? `/${url}` as string : '/', query: { ...oldQuery } })
        //     // }
        // } else {
        //     router.replace('/')
        // }
        // setCookie(this, COOKIES_USER_ACCESS_TOKEN, apiRes?.access_token, { path: '/' })
        // henceforthApi.setToken(apiRes?.access_token)
        // Toast.success("Login Successfully")
      } catch (error) {
        // Toast.error(error)
      } finally {
        // setLoading(false)
      }
  };

  const microsoftButton = () => {
    if (divRef.current) {
      const msal = (window as any).msal;
      const msalConfig = {
        auth: {
          clientId: "YOUR_MICROSOFT_CLIENT_ID", // Replace with your Microsoft app client ID
          redirectUri: "YOUR_REDIRECT_URI", // Replace with your redirect URI
        },
      };

      const msalInstance = new msal.PublicClientApplication(msalConfig);

      // Create a login button
      const loginButton = document.createElement('button');
      loginButton.innerText = 'Login with Microsoft';
      loginButton.style.border = 'none';
      loginButton.style.boxShadow = 'none';
      loginButton.style.cursor = 'pointer';

      loginButton.onclick = async () => {
        try {
          const loginResponse = await msalInstance.loginPopup();
          loginWithMicrosoft(loginResponse); // Call the login handler
        } catch (error) {
          console.error(error);
        }
      };

      divRef.current.appendChild(loginButton);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://alcdn.msauth.net/browser/2.17.1/js/msal-browser.min.js"; // Load MSAL
    script.async = true;
    script.defer = true;
    script.addEventListener("load", microsoftButton);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={divRef}></div>;
};

export default MicroSoftLogin;
