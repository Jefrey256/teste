import { Route, Routes } from "react-router-dom";
import { Main } from "../elements/main";



export const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}