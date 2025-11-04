import StandupCard from './StandupCard';
import AddUpdateInput from './AddUpdateInput';

export default function StandupColumn({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-[60vh] overflow-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="text-xs text-gray-400">3 updates</div>
      </div>

      <div className="space-y-4">
        <StandupCard
          name="Joel"
          message="Wrote unit tests for flow converter and fixed edge cases."
          time="09:12"
          detail="PR: #42 • 3 commits"
        />
        <StandupCard
          name="Maya"
          message="Investigating overflow on mobile, reproduced and started fix."
          time="10:03"
        />
      </div>

      <AddUpdateInput placeholder={`Write a quick ${title.toLowerCase()} update...`} />
    </div>
  );
}
