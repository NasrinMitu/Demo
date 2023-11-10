import "./Father.css";
import Son from "./Son";
function Father(props){
    return (
        <div id="father">
            <Son info={props.info}/>
        </div>
    );
}

export default Father;