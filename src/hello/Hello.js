import Comp from "../components/comp/Comp";
import Jsx from "../components/jsx/Jsx";
import Style from "../components/style/Style";
import InternalStyle from "../components/style/InternalStyle";
const Hello =()=>{
    return <div>Bu benim ilk komponentim
        <Comp />
        <Jsx/>
        <Style/>
        <InternalStyle/>
    </div>;
};
export default Hello;