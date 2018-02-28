const initialState = {
    data: [],
    error: '',
}

const tabularData = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return Object.assign({}, state, {
                data: action.data
            })
        case 'ERROR':
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state
    }
}

export default tabularData;