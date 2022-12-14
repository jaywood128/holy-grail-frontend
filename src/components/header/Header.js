import PlusMinus from "../plusminus/PlusMinus";
import Data from "../data/Data";

const Header = (props) => {
  return (
    <>
    <header>
        <PlusMinus section="header" handle={props.handle}/>
        <div className="section">Header:{props.data.header}</div>
        <Data data={props.data}/>
    </header>
    </>);

}

export default Header;