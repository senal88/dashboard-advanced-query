import { ChevronDown } from "lucide-react";
import { useState, Dispatch, SetStateAction } from "react";

interface Filters {
  status: string;
  role: string;
  search: string;
}

interface FilterSidebarProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export default function FilterSidebar({
  filters,
  setFilters,
}: FilterSidebarProps) {
  const [expanded, setExpanded] = useState(true);

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <aside
      className={`border-r border-gray-200 bg-white transition-all ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="h-10 w-10 rounded-lg hover:bg-gray-100"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {expanded && (
        <div className="space-y-6 p-4">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">Status</h3>
            <select
              value={filters.status || ""}
              onChange={(e) => handleFilterChange("status", e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="">Todos</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900">Role</h3>
            <select
              value={filters.role || ""}
              onChange={(e) => handleFilterChange("role", e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="">Todos</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-gray-900">Buscar</h3>
            <input
              type="text"
              value={filters.search || ""}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              placeholder="Digite aqui..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>
        </div>
      )}
    </aside>
  );
}
