import "./To-do-list.css"
export const ToDoList = () => {
    return (
        <div className="to-do-list-wrapper">
            <div className="to-do-list">
                <h1 className="heading">TO DO LIST</h1>
                <div className="to-do-list-input-wrapper">
                    <input placeholder="add item..." className="to-do-list-input" />
                </div>
                <button className="add-btn">ADD</button>
                <div className="lists-wapper">
                    <li className="list-item"> task 1 <span className="delete-btn">Delete</span><span className="edit-btn">Edite</span></li>
                </div>
            </div>
        </div>
    )
}