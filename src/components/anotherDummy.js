import React, { useEffect, useState } from 'react';
import axios from 'axios';




function YourComp(){
    const [res, setRes] = useState('')
    const handleclick = () => {
        console.log('clicked')
        axios.get('http://localhost:5000/api/data')
        .then(function (response) {
            const responseData = response.data
            console.log(responseData.length)
            console.log(responseData)
            console.log(responseData[2].email)
        })
    }
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/api/data')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log('error caught'+err))
    // }, [])
    return (
        <div className='pt-16 text-center'>
            <button className='bg-blue-500 text-white px-4 py-1 rounded-md' onClick={handleclick}>click me</button>
            <p id='json'>json data</p>
        </div>
    )
}

export default YourComp