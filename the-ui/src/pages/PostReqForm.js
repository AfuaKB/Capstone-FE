import React from 'react'
import CustomMeasurementForm from '../components/CustomMeasurementForm'
import axios from 'axios'

const PostReqForm = () => {
    return (
        <div>
            <CustomMeasurementForm requestType="POST" measurementID = {null}/>
        </div>
    )
}

export default PostReqForm
