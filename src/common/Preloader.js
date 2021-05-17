import React from "react";

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src='https://www.davno.ru/assets/images/cards/big/birthday-1124.gif'/> : null}
        </div>
    )
}

export default Preloader