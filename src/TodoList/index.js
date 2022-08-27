const TodoList = (props)=>{
    return (
        <li onClick={()=>props.deleteData(props.id)}>{props.itemData}</li>
    )
}
export default TodoList;