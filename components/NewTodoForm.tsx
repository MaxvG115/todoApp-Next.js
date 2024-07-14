import { newTodo } from "@/utils/actions"

const NewTodoForm = () => {
    return ( 
    <center>
        <div>
            <form action={newTodo}>
                <input name="content" type="text" className="border border-black/50"/>
                <button type="submit">New Todo</button>
            </form>
        </div>
    </center>
    )
}

export default NewTodoForm