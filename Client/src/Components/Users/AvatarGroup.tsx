interface AvatarGroupProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function AvatarGroup({ users }: AvatarGroupProps) {
  return (
    <div className="flex items-center -space-x-2">
      {users.map((u) => (
        <div
          key={u.id}
          className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm ring-2 ring-white"
          title={u.name}
        >
          {u.avatar}
        </div>
      ))}
    </div>
  );
}
