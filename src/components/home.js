import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import dataActions from '../redux/actions/dataActions'


const Home = (props) => {

    useEffect(() => {
        props.fetchearApiData()
        // eslint-disable-next-line
    }, [])

    function filtrarApi(event) {
        props.filtrar(props.apiData, event.target.value)
    }
    console.log(props)
    return (
        <>
            <h1>Jugando con Redux </h1>
            <input onChange={filtrarApi}></input>
            <div className='listContainer' >

                {props.apiData && props.filterApiData?.map(data =>
                    <div key={data.id} className="listData">{data.name} ,...{data.status} 💰</div>
                )}

            </div>
        </>
    )
}
const mapDispatchToProps = {
    fetchearApiData: dataActions.fetchearApiData,
    filtrar: dataActions.filtrar
}

const mapStateToProps = (state) => {
    return {
        apiData: state.dataReducer.apiData,
        filterApiData: state.dataReducer.filterApiData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);