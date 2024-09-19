"use client";
import React, { useEffect } from "react";
// import { GlobalContext } from "@/context/Provider";
// import { getFirebaseMessageToken } from "@/utils/firebase";
// import henceforthApi from "@/utils/henceforthApi";
// import { Button } from "@/lib/AntRegistry";
// import Icons from "./Icons";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
// import { COOKIES_USER_ACCESS_TOKEN } from "@/context/actionTypes";

const GoogleLogin = () => {
    const divRef = React.useRef(null) as any;
    const router = useRouter()
    const loginWithGoogle = async (response: any) => {
        console.log('Google Response', response);
        // setLoading(true)
        // let fcm_token = await getFirebaseMessageToken()
        let items = {
            social_token: response?.credential,
            social_type: "GOOGLE",
            // fcm_token: fcm_token?.tokenId,
            device_type: "WEB"
        }
        try {
            let apiRes = await (items)
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

    }



  


    const googleButton = () => {
        if (divRef.current) {
            const google = (window as any).google
            google?.accounts?.id?.initialize({
                client_id: "532793655516-94neooqgg2paeula8ricuvon7pjkq07i.apps.googleusercontent.com", callback: loginWithGoogle,
                cancel_on_tap_outside: false
            });
            google?.accounts?.id?.renderButton(
                divRef.current,
                { theme: "filled_black", shape: "circle", size: "large", type: 'icon' }
            );
            // console.log(divRef.current);
            // divRef.current.children[0].children[0].children[0].style.maxWidth='100%';
            // divRef.current.children[0].children[0].children[0].style.fontSize='16px';
        }
    }
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.addEventListener("load", googleButton);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [])


    return <div>
        {/* <div className="col-md-6"> */}
        <div ref={divRef}></div>
        {/* </div> */}
        {/* <Button size='middle' onClick={loginWithFacebook} type='default' shape='circle' htmlType='button' style={{ width: 40, height: 40 }} icon={<Icons.FaceBookIcon />} className='btn-blue fw-medium text-white'></Button> */}
        {/* <Button type='default' onClick={loginWithFacebook} size='large' htmlType='button' icon={<Icons.FaceBookIcon />} className='btn-blue text-white' block>Continue with Facebook</Button> */}

    </div>
}

export default GoogleLogin;
