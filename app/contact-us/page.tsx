'use client'

import React from 'react'

interface MessageData{
    email: string,
    subject: string,
    message: string
}

export default function ContactUs(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const messageDetails: MessageData = {
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string
        }

        if(!messageDetails.email){
            alert('Email is required so we can contact you about the message')
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
            `Your message has been sent. You will recieve an answer sent to email: ${messageDetails.email}`
        )

        e.currentTarget.reset()
    }
    
    
    
    
    return(
        <>
            <form 
                className="flex flex-col border w-[90%] md:w-[50%] gap-5 py-5 items-center"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl lg:text-3xl text-center">Contact us</h1>
                
                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor='email' className='md:text-lg lg:text-xl'>Email:</label>
                    <input
                        type='email'
                        name='email'
                        className='md:text-lg lg:text-xl border rounded-full p-1 px-3 w-full'
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
                        placeholder="Enter title/subject..."
                        className="md:text-lg lg:text-xl border rounded-full p-1 px-3 w-full"
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor="message" className="md:text-lg lg:text-xl">Message: (max 500 characters)</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder="Enter your message..."
                        maxLength={500}
                        className="min-h-40 p-2 border rounded-lg md:text-lg lg:text-xl field-sizing-content"
                        required
                    ></textarea>
                </div>

                <button className="text-lg lg:text-xl border bg-green-400 rounded-lg w-fit px-2 cursor-pointer">
                    Send message
                </button>
            </form>
        </>
    )
}