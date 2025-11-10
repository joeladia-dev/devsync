import StandupColumn from './StandupColumn';

interface StandupBoardProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function StandupBoard({ users }: StandupBoardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-100/50 p-6 mb-6 border border-purple-100/50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Team Stand-ups — {new Date().toLocaleDateString()}
          </h2>
          <p className="text-sm text-purple-600 font-medium mt-1">Realtime updates — co-edit with your team</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">Live</span>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-3">
        {['Yesterday', 'Today', 'Next'].map((col) => (
          <StandupColumn key={col} title={col} />
        ))}
      </section>
    </div>
  );
}
