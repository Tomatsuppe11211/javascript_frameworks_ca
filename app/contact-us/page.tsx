'use client'

import React, { useState } from 'react'

interface MessageData{
    fullName: string,
    email: string,
    subject: string,
    message: string
}

export default function ContactUs(){
    const [ nameErrorMessage , setNameErrorMessage ] = useState('')
    const [ nameError, setNameError ] = useState(false)

    const [ emailErrorMessage, setEmailErrorMessage ] = useState('')
    const [ emailError, setEmailError ] = useState(false)

    const [ subjectErrorMessage, setSubjectErrorMessage ] = useState('')
    const [ subjectError, setSubjectError ] = useState(false)

    const [ messageErrorMessage, setMessageErrorMessage ] = useState('')
    const [ messageError, setMessageError ] = useState(false)

    const [ sentMessage, setSentMessage ] = useState(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    
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

        setSentMessage(true)

        setTimeout(() => {
            setSentMessage(false)
        }, 5000);
        
        e.currentTarget.reset()
    }
    
    return(
        <>
            <form 
                className="
                    flex flex-col border border-black w-9/10 md:w-1/2 lg:w-1/3
                    gap-5 py-5 px-2 mb-10 items-center dark:bg-gray-800 
                    shadow-lg shadow-black rounded-xl dark:shadow-gray-800/50
                "
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl lg:text-3xl text-center underline">Contact us</h1>
                
                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor='fullName' className='md:text-lg lg:text-xl'>Full Name:</label>

                    {nameError && (
                        <p className='text-sm md:text-bas lg:text-lg text-red-500 font-bold'>{nameErrorMessage}</p>
                    )}

                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        className='
                            md:text-lg lg:text-xl border rounded-full p-1 px-3 
                            w-full dark:bg-gray-900 focus:border-purple-400 
                            focus:outline-none inset-shadow-sm inset-shadow-black
                            dark:inset-shadow-none
                        '
                        placeholder='Enter your name'
                        onChange={(e) => {
                            const name = e.target.value

                            if(name.length < 3 && name !== ''){
                                setNameError(true)
                                setNameErrorMessage(`your name must contain at least 3 characters`)
                                return
                            }
                                
                            setNameError(false)
                            
                        }}
                        minLength={3}
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor='email' className='md:text-lg lg:text-xl'>Email:</label>

                    { emailError && (
                        <p className='text-sm md:text-bas lg:text-lg text-red-500 font-bold'>{emailErrorMessage}</p>
                    )}

                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='
                            md:text-lg lg:text-xl border rounded-full p-1 px-3 
                            w-full dark:bg-gray-900 focus:border-purple-400 
                            focus:outline-none inset-shadow-sm inset-shadow-black
                            dark:inset-shadow-none
                        '
                        onChange={(e) => {
                            const email = e.target.value

                            if(!email.match(emailRegex) && email !== ''){
                                setEmailError(true)
                                setEmailErrorMessage('Invalid email')
                                return
                            }

                            setEmailError(false)
                        }}
                        placeholder='Enter your email'
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2 justify-between">
                    <label htmlFor="subject" className="md:text-lg lg:text-xl">Subject: (Max 25 characters)</label>

                    {subjectError && (
                        <p className='text-sm md:text-bas lg:text-lg text-red-500 font-bold'>{subjectErrorMessage}</p>
                    )}

                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        minLength={3}
                        maxLength={25}
                        placeholder="Enter title/subject..."
                        className="
                            md:text-lg lg:text-xl border rounded-full p-1 px-3 
                            w-full dark:bg-gray-900 focus:border-purple-400 
                            focus:outline-none inset-shadow-sm inset-shadow-black
                            dark:inset-shadow-none
                        "
                        onChange={(e) => {
                            const subject = e.target.value

                            if(subject.length < 3 && subject !== ''){
                                setSubjectError(true)
                                setSubjectErrorMessage('Subject must contain at least 3 characters')
                                return
                            }
                            
                            setSubjectError(false)
                        }}
                        required
                    />
                </div>

                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor="message" className="md:text-lg lg:text-xl">Message: (max 500 characters)</label>

                    {messageError && (
                        <p className='text-sm md:text-bas lg:text-lg text-red-500 font-bold'>{messageErrorMessage}</p>
                    )}

                    <textarea
                        id='message'
                        name='message'
                        placeholder="Enter your message..."
                        minLength={10}
                        maxLength={500}
                        className="
                            min-h-40 p-2 border rounded-lg md:text-lg lg:text-xl 
                            field-sizing-content dark:bg-gray-900 
                            focus:border-purple-400 focus:outline-none
                            inset-shadow-sm inset-shadow-black
                            dark:inset-shadow-none
                        "
                        onChange={(e) => {
                            const message = e.target.value

                            if(message.length < 10 && message !== ''){
                                setMessageError(true)
                                setMessageErrorMessage('Message must contain at least 10 caracters.')
                                return
                            }

                            setMessageError(false)
                        }}
                        required
                    ></textarea>
                </div>

                <button className="
                    text-lg lg:text-xl border border-black bg-green-500 
                    rounded-lg w-fit px-2 cursor-pointer  shadow-md text-white
                    dark:shadow-lg shadow-black dark:shadow-green-500/50
                "
                >
                    Send message
                </button>
            </form>

            {sentMessage && (
                <div className='
                    w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-green-500 p-2
                    fixed bottom-0 right-0 flex flex-col gap-2 md:rounded-tl-lg
                    text-white border border-black
                '>
                    <h1 className='text-lg lg:text-xl xl:text-2xl w-9/10'>Message sent!</h1>
                    <p className="text-sm md:text-base xl:text-lg w-9/10">
                        Your message was sent successfully. You will recieve
                        answer to the provided mail address.
                    </p>
                </div>
            )}
        </>
    )
}