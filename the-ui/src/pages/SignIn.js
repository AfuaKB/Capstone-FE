import React, {useState, useEffect} from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom'


const SignIn = () => {

    const [value, setValue] = useState({
        username:'',
        password:''
    })

    
    const handleChange = e => {

    }

    const [isSubmitting, setisSubmitting] = useState(false)


    const submit = e => {
        e.preventDefault()
        setisSubmitting(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to="/sign-up" className="font-medium text-soft-teal hover:text-soft-teal">
                start your 14-day free trial by signing
                </Link>
            </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-soft-teal focus:border-soft-teal focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-soft-teal focus:border-soft-teal focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-soft-teal focus:ring-soft-teal border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                    </div>

                    <div className="text-sm">
                    <a href="#" className="font-medium text-soft-teal hover:text-soft-teal">
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-soft-teal hover:bg-soft-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-soft-teal group-hover:text-soft-teal" aria-hidden="true" />
                    </span>
                    Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
    
}

export default SignIn
