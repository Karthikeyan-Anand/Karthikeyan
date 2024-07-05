import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const err= useRouteError();
    return(
    <div>
        <h1> OOPS !!!</h1>
        <h2>Something went wrong!!</h2>
        <h3>{err.stsatus}:{err.status.text}</h3>
    </div>
    );
};