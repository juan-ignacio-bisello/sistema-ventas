import { Routes, Route } from "react-router-dom"
import { HomePage } from "../ventas"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route>
                <Route path="/" element={ <HomePage /> } />
            </Route>
        </Routes>
    </>
  )
}
