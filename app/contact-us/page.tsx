'use client'

import React from 'react'

interface MessageData{
    fullName: string,
    email: string,
    subject: string,
    message: string
}

export default function ContactUs(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const messageDetails: MessageData = {
            fullName: formData.get('fullName') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string
        }

        if(!messageDetails.email || !messageDetails.fullName){
            alert('Email and name is required')
            return
        }

        if(!messageDetails.subject){
            alert('Your message need a subject')
            return
        }

        if(!messageDetails.message){
            alert('You cannot send an empty message')
            return
        }

        console.log('Message details', messageDetails)

        alert(
            `Your message has been sent ${messageDetails.fullName}. You will recieve an answer sent to email: ${messageDetails.email}`
        )

        e.currentTarget.reset()
    }
    
    
    
    
    return(
        <>
            <form 
                className="flex flex-col border w-[90%] md:w-[50%] gap-5 py-5 px-2 items-center dark:bg-gray-800"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl lg:text-3xl text-center underline">Contact us</h1>
                
                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor='fullName' className='md:text-lg lg:text-xl'>Full Name:</label>
                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        className='md:text-lg lg:text-xl border rounded-full p-1 px-3 w-full dark:bg-gray-900 focus:border-purple-400 focus:outline-none'
                        placeholder='Enter your name'
                        minLength={3}
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor='email' className='md:text-lg lg:text-xl'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='md:text-lg lg:text-xl border rounded-full p-1 px-3 w-full dark:bg-gray-900 focus:border-purple-400 focus:outline-none'
                        placeholder='Enter your email'
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2 justify-between">
                    <label htmlFor="subject" className="md:text-lg lg:text-xl">Subject:</label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        minLength={3}
                        placeholder="Enter title/subject..."
                        className="md:text-lg lg:text-xl border rounded-full p-1 px-3 w-full dark:bg-gray-900 focus:border-purple-400 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor="message" className="md:text-lg lg:text-xl">Message: (max 500 characters)</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder="Enter your message..."
                        minLength={10}
                        maxLength={500}
                        className="min-h-40 p-2 border rounded-lg md:text-lg lg:text-xl field-sizing-content dark:bg-gray-900 focus:border-purple-400 focus:outline-none"
                        required
                    ></textarea>
                </div>

                <button className="
                    text-lg lg:text-xl border border-black bg-green-500 rounded-lg 
                    w-fit px-2 cursor-pointer shadow-lg shadow-green-500/50
                ">
                    Send message
                </button>
            </form>
        </>
    )
}