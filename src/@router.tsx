import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./scenes/about/About";
import { Home } from "./scenes/home/Home";
import { Profit } from "./scenes/profit/Profit";
import { ViewProfit } from "./scenes/view/ViewProft";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/profit" element={<Profit/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/viewProfit" element={<ViewProfit/>}/>
      </Routes>
    </BrowserRouter>
  )
}
