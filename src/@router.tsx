import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./scenes/home/Home";
import { Profit } from "./scenes/profit/Profit";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/profit" element={<Profit/>}/>
      </Routes>
    </BrowserRouter>
  )
}
