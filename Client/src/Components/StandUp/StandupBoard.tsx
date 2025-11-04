import StandupColumn from './StandupColumn';

interface StandupBoardProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function StandupBoard({ users }: StandupBoardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">
            Team Stand-ups — {new Date().toLocaleDateString()}
          </h2>
          <p className="text-sm text-gray-500">Realtime updates — co-edit with your team</p>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-4">
        {['Yesterday', 'Today', 'Next'].map((col) => (
          <StandupColumn key={col} title={col} />
        ))}
      </section>
    </div>
  );
}
