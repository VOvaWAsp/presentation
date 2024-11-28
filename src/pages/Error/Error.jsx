import { NavLink } from "react-router-dom";

function Error() {
    return (
        <div>
            <NavLink to='/'>Back</NavLink>
            <h2>Error...</h2>
            <img style={{padding: '100px'}} height='700px' width="1500px" src="https://i.pinimg.com/originals/15/97/9c/15979cc0a3d20f14d966a31ea738cbe2.gif" alt="" />
        </div>
    )
}

export default Error;