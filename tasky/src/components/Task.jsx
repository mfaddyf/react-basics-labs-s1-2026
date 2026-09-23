const Task = (props) => {
    const priorityColours = {
        Low: '#5bc47b',
        Medium: '#e6a23c',
        High: '#d9534f'
    };

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : priorityColours[props.priority] }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;
