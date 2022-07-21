import React from "react";
import useFetch from "./useFetch";
import CoinList from "./CoinList";


const Home =()=>{    
  
    const {veri:coins,yukleniyor,hata}=useFetch('http://localhost:8000/data')
    return(
        <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor...</div>}
            {coins && <CoinList coinler={coins} baslik="Senin Kripto Paran Bu Adreste"/>
}
        </div>
    )

    
}


export default Home;