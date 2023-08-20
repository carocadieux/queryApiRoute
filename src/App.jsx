import { QueryClientProvider } from "@tanstack/react-query"
import People from "./components/People"


function App() {
    return(
      <QueryClientProvider>
        <People />
      </QueryClientProvider>
    )
}

export default App
