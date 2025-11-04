interface SidebarProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function Sidebar({ users }: SidebarProps) {
  return (
    <aside className="col-span-3 bg-white rounded-lg shadow-sm p-4 h-[72vh] overflow-auto">
      <div className="mb-4">
        <input
          placeholder="Search notes, people..."
          className="w-full border rounded-md px-3 py-2 text-sm"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-600">Quick Links</h3>
        {['Today', 'Team Summary', 'My History'].map((item) => (
          <button
            key={item}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-600">People</h3>
        <ul className="mt-2 space-y-2">
          {users.map((u) => (
            <li key={u.id} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
                {u.avatar}
              </div>
              <div>
                <div className="text-sm font-medium">{u.name}</div>
                <div className="text-xs text-gray-500">Frontend Engineer</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
