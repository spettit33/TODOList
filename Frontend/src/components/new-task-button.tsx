export function NewTaskButton({handleClick} : {handleClick: () => void}){
    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleClick}>New Task</button>
}