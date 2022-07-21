import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CoinDetails = () => {

    const {id}=useParams();
    const {veri:coin,yukleniyor,hata}=useFetch('http://localhost:8000/data/'+id);

    const handleDelete=()=>{
        fetch('http://localhost:8000/data/'+id,{
            method:"DELETE"
        })
    }
    return (
        <div className="coin-details">
            {yukleniyor && <div>Yükleniyor...</div>}
            {hata && <div>{hata}</div>}
            {coin && (
                <article>
                    <h2>{coin.name}</h2>
                    <p>{coin.symbol}</p>
                    <h3>Merhaba Kripto paranızı silmek istiyor musunuz?</h3>
                    {<button onClick={handleDelete}>OK</button>}
                </article>
            )}
        </div>
    );
}

export default CoinDetails;