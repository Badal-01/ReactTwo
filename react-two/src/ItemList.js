
import { addItem, removeItem } from "./ReduxSlice/itemSlice";
import { item } from "./data";
import { useDispatch } from "react-redux";
const ItemList = () =>{
    const dispatch = useDispatch();
    const addItemHandler = (item)=>{
        dispatch(addItem(item))
    }
    const removeItemHandler = ()=>{
        dispatch(removeItem())
    }
    return (
        <div>
            {item.map((item,index)=>{
                return(
                    <div>
                        <span>{item.name}</span>
                        <button onClick={()=>addItemHandler(item)}>++</button>
                        <button onClick={removeItemHandler}>--</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;