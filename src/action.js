
const reqOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}

const url = "http://34.217.79.249:81/";

const submitData = (formData) => {
    const success = (data) => {
        return {
            type: 'SUCCESS',
            data
        }
    }

    const error = (error) => {
        return {
            type: 'ERROR',
            error
        }
    }   
    return dispatch => {
        sendData(formData).then(
            response => {
                if(response.status === 'success') {
                    dispatch(success(response.data))
                } else {
                    dispatch(error(response.error))
                }
            }
        )
    }
}

const sendData = (formData) => {
    reqOptions.body = JSON.stringify(formData)
    reqOptions.method = 'POST'
    return fetch(url + 'getData', reqOptions)
            .then(response => {
                return response.json();
            })
            .then(response => {
                return response
            });
}

export const action = {
    submitData
}