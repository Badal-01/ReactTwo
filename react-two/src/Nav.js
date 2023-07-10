import { useSelector } from "react-redux";
import store from "./Store/store";
const Nav = () =>{
    const items = useSelector(store => store.item.items);
    return(
        <div>
            Total Card Item {items.length}
        </div>
    )
}

export default Nav;