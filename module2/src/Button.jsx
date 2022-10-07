const Button = ({delta,text,changeCount}) =>{

const handleClick = (e) => {
    changeCount(parseInt(e))
}

return (
<button data-delta={delta} onClick={(e) => handleClick(e.target.dataset.delta)}>{text}</button>
)
}
export {Button};