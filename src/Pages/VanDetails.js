import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const VanDetails = () => {
    
    const [van,setVan]=useState([])
    const [loading,setLoading]=useState(false)
    const params=useParams()
    const {id}=params

    useEffect(() => {
        fetch(`/api/vans/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setVan(data.vans);
            setLoading(true)
          });
      }, [params.id]);



  return (
    <div className="van-detail-container">
            {loading ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <Loading/>}
        </div>
  )
}

export default VanDetails