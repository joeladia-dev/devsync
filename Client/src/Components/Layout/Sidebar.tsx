interface SidebarProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function Sidebar({ users }: SidebarProps) {
  return (
    <aside className="col-span-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-100/50 p-5 h-[72vh] overflow-auto border border-purple-100/50">
      <div className="mb-5">
        <input
          placeholder="Search notes, people..."
          className="w-full border border-purple-200 rounded-lg px-4 py-3 text-sm bg-purple-50/50 focus:bg-white focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          Quick Links
        </h3>
        {['Today', 'Team Summary', 'My History'].map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-purple-700 transition-all duration-200 font-medium"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
          People
        </h3>
        <ul className="mt-3 space-y-3">
          {users.map((u) => (
            <li key={u.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                {u.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{u.name}</div>
                <div className="text-xs text-purple-600 font-medium">Frontend Engineer</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
