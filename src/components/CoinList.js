import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function CoinList({coinler,baslik}) {

  

    const {id}=useParams();
    const handleDelete=()=>{
        fetch('http://localhost:8000/data/'+id,{
            method:"DELETE"
        })
    }

  return (
    <div>
        <h2>{baslik}</h2>
    <div className='coin-list'>
    {coinler.map((coin)=>(
        <div className="coin-preview" key={coin.id}>
            <Link to={`/coins/${coin.id}`}>
                    <img className='data-img' src={coin.image} alt=""/>
                    <h3 className='coin-name'>{coin.name}</h3>
                    <p>Sembol:{coin.symbol}</p>
                    <p>Slug:{coin.slug}</p>
                    <p>Total:{coin.total_supply}</p>
                    <p>Price:{coin.price}</p>
                    <button onClick={handleDelete}>SİL</button>            
            </Link>
        </div>
    ))}
</div>
</div>
    )
}
