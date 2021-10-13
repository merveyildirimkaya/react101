import React,{useState,useEffect} from 'react'

const ChangeTitle = () => {
    const[sayac,setSayac]=useState(0);

    const artir=()=>{
        setSayac(sayac+1);
    };

    useEffect(()=>{
        document.title=`${sayac} kere tiklandi`
    }, [sayac]);

    return (
        <div>
            <h2>{sayac} kre tıkladın</h2>
            <button onClick={artir}>TIKLA</button>
        </div>
    )
}

export default ChangeTitle
