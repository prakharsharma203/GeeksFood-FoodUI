import { Route, Routes } from "react-router-dom"
import RecipePage from "./components/food"
import FoodDetailsPage from "./components/foodDetails"




function App() {
 

  return (
    <Routes>
    <Route path="/foods" element = {<RecipePage/>}/>
    <Route path="/foods/:id" element = {<FoodDetailsPage/>}/>
    <Route path="/" element = {<RecipePage/>}/>
    </Routes>

  )
}

export default App
