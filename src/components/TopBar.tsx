import { Menu } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
        </div>
      </div>
    </div>
  )
}
