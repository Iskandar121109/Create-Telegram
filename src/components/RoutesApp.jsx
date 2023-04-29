import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Telegram } from './Telegram'

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Telegram />} />
        </Routes>
    )
}
