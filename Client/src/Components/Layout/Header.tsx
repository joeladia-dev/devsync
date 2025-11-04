import AvatarGroup from '../Users/AvatarGroup';

interface HeaderProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function Header({ users }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">DevSync</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-gray-500">Team:</span>
            <div className="rounded-full bg-indigo-50 text-indigo-700 px-2 py-1 text-sm">Core</div>
          </div>
          <AvatarGroup users={users} />
          <button className="ml-4 bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
            New Stand-up
          </button>
        </div>
      </div>
    </header>
  );
}
