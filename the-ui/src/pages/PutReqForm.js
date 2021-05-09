import React from 'react'
import CustomMeasurementForm from '../components/CustomMeasurementForm'

const PutReqForm = () => {
    return (
        <div>
            <CustomMeasurementForm requestType="PUT" measurementID = {null}/>
        </div>
    )
}

export default PutReqForm
