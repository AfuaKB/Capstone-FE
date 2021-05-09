import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PredictionForm = () => {

    const [values, setValues] = useState({
        bust:'',
        waist:'',
        hips:''
    })

    const [isSubmitting, setisSubmitting] = useState(false)

    const getCookie = (name) => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log('Name:', name)
        console.log('Value:', value)
        return { handleChange }

    }
    
    const submit = e => {
        // axios.defaults.xsrfCookieName ='csrftoken';
        // axios.defaults.xsrfHeaderName ='X-CSRFToken';
        // e.preventDefault()
        // axios.post('http://127.0.0.1:8000/TheAPI/predict/', values, {headers: {"X-CSRFToken" : getCookie('csrftoken')}})
        //     .then(function (response) {
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        // }) 
        e.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('Bust', values.bust)
        bodyFormData.append('Waist', values.waist)
        bodyFormData.append('Hips', values.hips)

        axios.post('http://127.0.0.1:8000/TheAPI/size_predictor/', bodyFormData, {headers: {"Content-Type": "application/json"}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    



    return (
        <>
            <div className="m-20">

                <div>
                    <div className="pb-8">
                        <h3 className="text-lg font-medium leading-6 text-soft-teal">Size Finder</h3>
                        <div className="mt-1 text-sm text-gray-600">
                            <p>Hi👋🏾! Just a quick reminder that the Size Finder feature is still in beta mode.</p>
                            <p> Therefore, there is a possibility of a wrong size prediction.</p>
                            <p>Not to worry, your interaction allows us to create a better system for better predictions😊.</p></div>
                    </div>

                    <div className="pr-64 mt-5 md:mt-0">
                        
                        <form action="#" method="POST" onSubmit={submit}>

                            <div className="md:grid md:grid-cols-3 md:gap-6">

                                <div>
                                    <label htmlFor="bust" className="block text-sm font-medium text-gray-700">
                                        Bust
                                    </label>

                                    <input
                                        type="number"
                                        name="bust"
                                        id="bust"
                                        autoComplete="bust"
                                        className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value = {values.bust}
                                        onChange = {handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
                                        Waist
                                    </label>
                                    <input
                                        type="number"
                                        name="waist"
                                        id="waist"
                                        autoComplete="waist"
                                        className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value = {values.waist}
                                        onChange = {handleChange}
                                    />
                                </div>

                                <div>
                                <label htmlFor="hips" className="block text-sm font-medium text-gray-700">
                                    Hips
                                </label>
                                <input
                                    type="number"
                                    name="hips"
                                    id="hips"
                                    autoComplete="hips"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    value = {values.hips}
                                    onChange = {handleChange}
                                />
                                </div>

                            </div>

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-soft-teal hover:bg-soft-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-teal"
                                    
                                >
                                    Predict
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            
        </>
    )
}


export default PredictionForm
