import Header from '@/components/Header'
import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params
    
    return (
        <div>
            <div className='text-2xl font-karla'>
                <Header subHeader='ma2030g@hotmail' title='Profile | mohamed'
                    userImg='/assets/images/dummy.jpg'
                >

                </Header>
                user id:{id}
            </div>
        </div>
    )
}

export default page
