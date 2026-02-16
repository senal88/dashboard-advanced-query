import { useState } from "react";

interface Filters {
  status: string;
  role: string;
  search: string;
}

interface DataTableProps {
  filters: Filters;
}

const SAMPLE_DATA = [
  { id: 1, name: "Alice Johnson", role: "admin", status: "active" },
  { id: 2, name: "Bob Smith", role: "user", status: "active" },
  { id: 3, name: "Carol White", role: "user", status: "inactive" },
  { id: 4, name: "David Lee", role: "admin", status: "active" },
  { id: 5, name: "Eve Davis", role: "user", status: "active" },
];

export default function DataTable({ filters }: DataTableProps) {
  const [sortBy, setSortBy] = useState<string | null>(null);

  const filteredData = SAMPLE_DATA.filter((item) => {
    if (filters.status && item.status !== filters.status) return false;
    if (filters.role && item.role !== filters.role) return false;
    if (
      filters.search &&
      !item.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              <button
                onClick={() => setSortBy("name")}
                className="hover:text-blue-600"
              >
                Nome {sortBy === "name" ? "↓" : ""}
              </button>
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 capitalize">
                  {item.role}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status === "active" ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800">
                    Editar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-12 text-center text-gray-600">
                Nenhum resultado encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
