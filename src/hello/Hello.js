import Comp from "../components/comp/Comp";
import Jsx from "../components/jsx/Jsx";
import Style from "../components/style/Style";
import InternalStyle from "../components/style/InternalStyle";
import Clock1 from "../components/clock1/Clock1";
import Props from "../components/props/Props";

const Hello =()=>{
    return <div>
    <Props ad="Merve" soyad = "sari"/>
    <Props ad="Murat" soyad = "siyah"/>
    <Props ad="Ali" soyad = "mavi"/>
    <Props ad="Ahmet" soyad = "mor"/>
    </div>
    
    
    /*<div>Bu benim ilk komponentim
        <Comp />
        <Jsx/>
        <Style/>
        <InternalStyle/>
        <Clock1/>
    </div>;*/
};
export default Hello;