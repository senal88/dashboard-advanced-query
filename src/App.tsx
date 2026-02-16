import { useState } from "react";
import TopBar from "./components/TopBar";
import FilterSidebar from "./components/FilterSidebar";
import DataTable from "./components/DataTable";

interface Filters {
  status: string;
  role: string;
  search: string;
}

function App() {
  const [filters, setFilters] = useState<Filters>({
    status: "",
    role: "",
    search: "",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />

      <div className="flex h-[calc(100vh-64px)]">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <main className="flex-1 overflow-auto p-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="mb-8 text-gray-600">
              Advanced query interface com filtros URL-driven
            </p>

            <DataTable filters={filters} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
