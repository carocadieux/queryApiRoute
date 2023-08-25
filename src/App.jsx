import { Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Creatures from "./creatures/components/Creatures";
import Creature from "./creatures/components/Creature";



const queryClient = new QueryClient()
function App() {
    return(
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Creatures />} />
          <Route path="/creatures/:id" element={<Creature />} />
        </Routes>
      </QueryClientProvider>
    )
}

export default App
