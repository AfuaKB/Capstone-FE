import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MeasurementForm = () => {

    const [values, setValues] = useState({
        pk:0,
        first_name:'',
        last_name:'',
        contact_number:'',
        bust: '',
        waist: '',
        shoulder_to_waist: '',
        shoulder_to_hip:'',
        across_front: '',
        across_back: '',
        lower_waist: '',
        hips:'',
        short_sleeve:'',
        long_sleeve:'',
        skirt_length:'',
        dress_length:''

    })

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
        // console.log(getCookie('csrftoken'));
        // // console.log(values);
        // // return;
        // axios.post('http://127.0.0.1:8000/TheAPI/measurements_list/', values, {headers: {"X-CSRFToken" : getCookie('csrftoken')}})
        //     .then( (response) => {
        //         console.log(response)
        //         //return response.json()
        //     })
        //     .catch( (error) => {
        //         console.log(error)
        // }) 

        e.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('id', values.pk)
        bodyFormData.append('First_Name', values.first_name)
        bodyFormData.append('Last_Name', values.last_name)
        bodyFormData.append('Contact_Number', values.contact_number)
        bodyFormData.append('Bust', values.bust)
        bodyFormData.append('Waist', values.waist)
        bodyFormData.append('Shoulder_to_Waist', values.shoulder_to_waist)
        bodyFormData.append('Across_Front', values.across_front)
        bodyFormData.append('Across_Back', values.across_back)
        bodyFormData.append('Shoulder_to_Hip', values.shoulder_to_hip)
        bodyFormData.append('Lower_Waist', values.lower_waist)
        bodyFormData.append('Hips', values.hips)
        bodyFormData.append('Long_Sleeve', values.long_sleeve)
        bodyFormData.append('Short_Sleeve', values.short_sleeve)
        bodyFormData.append('Skirt_Length', values.skirt_length)
        bodyFormData.append('Dress_Length', values.dress_length)

        axios.post('http://127.0.0.1:8000/TheAPI/measurements_list/', bodyFormData, {headers: {"Content-Type": "application/json"}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className="m-20">

                <div>
                    <div className="pb-8">
                        <h3 className="text-lg font-medium leading-6 text-soft-teal">Your Customer's Profile</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Enter valid and verifiable information about your clients here 
                            for your reference and easy identification 😊</p>
                    </div>

                    <div className="pr-64 mt-5 md:mt-0">
                        
                        <form onSubmit={submit} method="POST">

                            <div className="md:grid md:grid-cols-3 md:gap-6">

                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        autoComplete="given-name"
                                        
                                        className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange = {handleChange}
                                        value = {values.first_name}

                                    />
                                </div>

                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        autoComplete="family-name"
                                        
                                        className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange = {handleChange}
                                        value = {values.last_name}

                                    />
                                </div>

                                <div>
                                <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    name="contact_number"
                                    id="contact_number"
                                    autoComplete="contact-number"
                                    required
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.contact_number}

                                />
                                </div>

                                <div>
                                <label htmlFor="bust" className="block text-sm font-medium text-gray-700">
                                    Bust
                                </label>
                                <input
                                    type="number"
                                    name="bust"
                                    id="bust"
                                    autoComplete="bust"
                                    required
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.bust}
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
                                    required
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.waist}
                                />
                                </div>

                                <div>
                                <label htmlFor="shoulder_to_waist" className="block text-sm font-medium text-gray-700">
                                    Shoulder to Waist
                                </label>
                                <input
                                    type="number"
                                    name="shoulder_to_waist"
                                    id="shoulder_to_waist"
                                    autoComplete="shoulder_to_waist"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.shoulder_to_waist}
                                />
                                </div>

                                <div>
                                <label htmlFor="across_front" className="block text-sm font-medium text-gray-700">
                                    Across Front
                                </label>
                                <input
                                    type="number"
                                    name="across_front"
                                    id="across_front"
                                    autoComplete="across_front"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.across_front}
                                />
                                </div>

                                <div>
                                <label htmlFor="across_back" className="block text-sm font-medium text-gray-700">
                                    Across Back
                                </label>
                                <input
                                    type="number"
                                    name="across_back"
                                    id="across_back"
                                    autoComplete="across_back"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.across_back}
                                />
                                </div>

                                <div>
                                <label htmlFor="shoulder_to_hip" className="block text-sm font-medium text-gray-700">
                                    Shoulder to Hip
                                </label>
                                <input
                                    type="number"
                                    name="shoulder_to_hip"
                                    id="shoulder_to_hip"
                                    autoComplete="shoulder_to_hip"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.shoulder_to_hip}
                                />
                                </div>

                                <div>
                                <label htmlFor="lower_waist" className="block text-sm font-medium text-gray-700">
                                    Lower Waist
                                </label>
                                <input
                                    type="number"
                                    name="lower_waist"
                                    id="lower_waist"
                                    autoComplete="lower_waist"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.lower_waist}
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
                                    required
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.hips}
                                />
                                </div>

                                <div>
                                <label htmlFor="long_sleeve" className="block text-sm font-medium text-gray-700">
                                    Long Sleeve
                                </label>
                                <input
                                    type="number"
                                    name="long_sleeve"
                                    id="long_sleeve"
                                    autoComplete="long_sleeve"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.long_sleeve}
                                />
                                </div>

                                <div>
                                <label htmlFor="short_sleeve" className="block text-sm font-medium text-gray-700">
                                    Short Sleeve
                                </label>
                                <input
                                    type="number"
                                    name="short_sleeve"
                                    id="short_sleeve"
                                    autoComplete="short_sleeve"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.short_sleeve}
                                />
                                </div>

                                <div>
                                <label htmlFor="skirt_length" className="block text-sm font-medium text-gray-700">
                                    Skirt Length
                                </label>
                                <input
                                    type="number"
                                    name="skirt_length"
                                    id="skirt_length"
                                    autoComplete="skirt_length"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.skirt_length}
                                />
                                </div>

                                <div>
                                <label htmlFor="dress_length" className="block text-sm font-medium text-gray-700">
                                    Dress Length
                                </label>
                                <input
                                    type="number"
                                    name="dress_length"
                                    id="dress_length"
                                    autoComplete="dress_length"
                                    className="mt-1 focus:ring-soft-teal focus:border-soft-teal block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange = {handleChange}
                                    value = {values.dress_length}
                                />
                                </div>
                                
                            </div>

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-soft-teal hover:bg-soft-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-teal"
                                    
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default MeasurementForm
