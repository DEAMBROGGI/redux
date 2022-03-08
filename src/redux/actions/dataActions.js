import axios from 'axios';

const dataActions = {

    fetchearApiData: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
            dispatch({ type: 'fetch', payload: res.data.results })
        }
    },

    filtrar: (apiData, value) => {
        return (dispatch, getState) => {
            dispatch({ type: 'filtro', payload: { apiData, value } })
        }
    },

}

export default dataActions;