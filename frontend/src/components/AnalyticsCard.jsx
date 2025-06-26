import React from 'react'

const AnalyticsCard = ({ title, value }) => {
    return (
        <div className='border shadow p-3 space-y-6 rounded-lg'>
            <h1 className='text-gray-600 font-semibold'>{title}</h1>
            <h4 className='font-bold text-2xl'>{value}</h4>
        </div>
    )
}

export default AnalyticsCard