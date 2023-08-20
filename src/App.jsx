import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import People from "./components/People"



const queryClient = new QueryClient()
function App() {
    return(
      <QueryClientProvider client={queryClient}>
        <People />
      </QueryClientProvider>
    )
}

export default App
