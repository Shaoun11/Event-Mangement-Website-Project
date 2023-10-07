import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from './Card';

const Details = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [card,setcard]=useState();


 useEffect(()=>{
    const findservice=data.find((service)=>service.id==id)
    setcard(findservice);
 },[id,data]);
    
    return (
        <div>
         <Card card={card}></Card>
        </div>
    );
};

export default Details;