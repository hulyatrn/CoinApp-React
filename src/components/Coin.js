import { useState } from "react";
import { useHistory } from "react-router-dom";

const Coin = ()=>{

    const [name,setName]=useState("");
    const [sembol,setSembol]=useState("");
    const [slug,setSlug]=useState("");


    const [yukleniyor,setYukleniyor]=useState(false);

    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setYukleniyor(true);
        const coin={name,sembol,slug}
        console.log(coin)

        fetch('http://localhost:8000/data/',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(coin)
        }).then(()=>{
            console.log("eklendi")
            setYukleniyor(false)

            history.push("/");

        })
    }
    return(
        <div className="new-coin">
            <form onSubmit={handleSubmit}>
                <label>Coin Adı:</label>
                <input type="text" required value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>Coin Sembolünü Giriniz:</label>
                <input type="text" value={sembol} onChange={(e)=>setSembol(e.target.value)}></input>
                <label>Slug Bilgisini Giriniz:</label>
                <input type="text" value={slug} onChange={(e)=>setSlug(e.target.value)}></input>
                {!yukleniyor && <button>Coini Ekle</button>}
                {yukleniyor && <button disabled>Yükleniyor...</button>}

            </form>
        </div>
    );
}

export default Coin;