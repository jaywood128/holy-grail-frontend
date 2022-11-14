import PlusMinus from "../plusminus/PlusMinus";
import Data from "../data/Data";

const Right = (props) => {
  return (<>
    <aside>
        <PlusMinus section="right" handle={props.handle}/>
        <div className="section">Right:{props.data.right}</div>
        <Data data={props.data}/>            
    </aside>
</>);

}
export default Right;