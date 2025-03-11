// 'use server'

// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// export async function setAuthToken(token: string) {
  
//   if (typeof token === 'string') {
//     cookies().set('auth_token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     })
//   }
  
//   redirect('/')
// }