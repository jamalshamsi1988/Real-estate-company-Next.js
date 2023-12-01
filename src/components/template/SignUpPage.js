"use client"
import Link from 'next/link';
import  { useState } from 'react'
import styles from './SignUpPage.module.css'

const SignUpPage = () => {
    const [email , setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [rePassword,setRePassword]=useState("")
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label>نام کاربری</label>
        <input type='text' value={email} onChange={e =>setEmail(e.target.value) } />
        <label>رمز عبور</label>
        <input type='password' value={password} onChange={e =>setPassword(e.target.value) } />
        <label>تکرار رمز عبور</label>
        <input type='password' value={rePassword} onChange={e =>setRePassword(e.target.value) } />
        <button type='submit'>ورود</button>
      </form>
      <p>حساب کاربری دارید ؟ <Link href='/signin'>ورود</Link></p>
      
    </div>
  )
}

export default SignUpPage
