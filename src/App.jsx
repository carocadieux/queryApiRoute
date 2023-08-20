import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Creatures from "./components/Creatures"



const queryClient = new QueryClient()
function App() {
    return(
      <QueryClientProvider client={queryClient}>
        <Creatures />
      </QueryClientProvider>
    )
}

export default App
