import React, {useState, useEffect} from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'


const SignIn = () => {

    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState({

    })

    const [isSubmitting, setisSubmitting] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })

    }

    const submit = e => {
        e.preventDefault()
        setisSubmitting(true)
    }

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for Apuskeleke</h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="font-medium text-soft-teal hover:text-soft-teal">
                start your 14-day free trial
                </a>
            </p> */}
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">

                <div>
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-soft-teal focus:border-soft-teal focus:z-10 sm:text-sm"
                        placeholder="User Name"
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    </div>

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
                        value = {values.email}
                        onChange = {handleChange}
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
                        value = {values.password}
                        onChange = {handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="password2" className="sr-only">
                        Confirm Password
                    </label>
                    <input
                        id="password2"
                        name="password2"
                        type="password"
                        autoComplete="confirm-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-soft-teal focus:border-soft-teal focus:z-10 sm:text-sm"
                        placeholder="Confirm Password"
                        value = {values.password2}
                        onChange = {handleChange}
                    />
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
                    Sign up
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignIn
