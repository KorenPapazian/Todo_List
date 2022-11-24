function Todos({todo, setTodos, todos}) {
    return (
        <li><input defaultChecked={todo.checked} type="checkbox" onClick={() => {
            setTodos((prevState) => {
                const index = prevState.findIndex(el => el.id == todo.id);
                const newState = [...prevState];
                newState[index] = {...prevState[index], checked: !prevState[index].checked}
                return newState;
            });
        }}/>{todo.value}</li>
    )
}

export default Todos