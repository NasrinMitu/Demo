import "./Grand.css";
import Father from "./Father";
function Grand(){
    const info = {name:"Shamima Mitu", designation:"Software Developer"};
    return(
        <div id="grand">
            <Father info = {info}/>
        </div>
    );
}

export default Grand;