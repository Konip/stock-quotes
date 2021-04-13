import React from 'react'
import { useLocation } from 'react-router';
import StockMarket from './StockMarket'

export default function StockMarketContainer() {
    let location = useLocation();
    return (
        <StockMarket location={location} />
    )
}
