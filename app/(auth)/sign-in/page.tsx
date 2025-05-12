"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { authClient } from '@/lib/auth-client'

const page = () => {
    const handleSignIn = async () => { 
        return await authClient.signIn.social({
            provider: 'google',
            
        })
    }
    return (
        <main className='sign-in'>
            <aside className='testimonial'>
                <Link href={'/s'}>
                    <Image src='/assets/icons/logo.svg'
                        width={32} height={32}
                        alt='testimonial' />
                    <h1>SnapCast</h1>
                </Link>
                <div className='description'>
                    <section>
                        <figure>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Image
                                    key={index}
                                    src='/assets/icons/star.svg'
                                    width={20}
                                    height={20}
                                    alt='testimonial'
                                    className='rounded-full aspect-square'
                                />
                            ))}
                        </figure>
                        <p>
                            SnapCast makes screen recording easy. From quick walkthroughs to
                            full presentations, it&apos;s fast, smooth, and shareable in seconds
                        </p>
                        <article>
                            <Image
                                src="/assets/images/jason.png"
                                alt="Jason"
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <h2>Jason Rivera</h2>
                                <p>Product Designer, NovaByte</p>
                            </div>
                        </article>
                    </section>
                </div>
                <p>© Snapcast {(new Date()).getFullYear()}</p>
            </aside>
            <aside className='google-sign-in'>
                <section>
                    <Link href="/">
                        <Image
                            src="/assets/icons/logo.svg"
                            alt="SnapChat Logo"
                            width={40}
                            height={40}
                        />
                        <h1>SnapCast</h1>

                    </Link>
                    <p>
                        Create and share your very first <span>SnapCast video</span> in no
                        time!
                    </p>
                    <button onClick={handleSignIn}>
                       <Image src='/assets/icons/google.svg' alt={'google icon'} width={24} height={24}>
                       </Image> 
                            <span>
                                Sign in with Google
                            </span>
                    </button>

                </section>
            </aside>
            <div className='overlay '>

            </div>
        </main>
    )
}

export default page
