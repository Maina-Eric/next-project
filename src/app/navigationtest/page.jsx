"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () => {
        console.log("clicked")
        router.replace("/")
    }
  return (
    <div>
      <Link href="/" prefetch={false}>Click Here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
