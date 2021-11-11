
import styles from './NextMission.module.css' ;
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const NextMission = ()=>{
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/launches/upcoming")
        .then((req)=> req.json())
        .then(values => {
            setData([...values]) ;
            console.log(data[0]);
        })
        .catch((e)=>console.log(e));
        console.log(data);
    },[]);

    return (
        <div>
            hi there
        </div>
        );
}


export default NextMission ;