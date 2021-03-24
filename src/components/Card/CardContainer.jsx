import React from 'react'
import Card from './Card'
import { requestThunk } from "../../store/stock-reducer"
import { connect } from 'react-redux';
const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

function CardContainer({ title, type }) {
    return (
        <div>
            <Card title={"Акции"} type={STOCK} />
        </div>
    )
}
let mapToDispatchProps = (dispatch) => {
    return {
        request: (type, time, pair) => {
            dispatch(requestThunk(type, time, pair))
        }
    }
}

export default connect(null, mapToDispatchProps)(Card);
