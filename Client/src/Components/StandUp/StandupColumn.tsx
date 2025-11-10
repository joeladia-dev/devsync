import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import StandupCard from './StandupCard';
import AddUpdateInput from './AddUpdateInput';

interface Update {
  id: string;
  name: string;
  message: string;
  time: string;
  detail?: string;
}

export default function StandupColumn({ title }: { title: string }) {
  const { user } = useUser();
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: '1',
      name: 'Joel',
      message: 'Wrote unit tests for flow converter and fixed edge cases.',
      time: '09:12',
      detail: 'PR: #42 • 3 commits'
    },
    {
      id: '2',
      name: 'Maya',
      message: 'Investigating overflow on mobile, reproduced and started fix.',
      time: '10:03'
    }
  ]);

  const getColumnColor = (title: string) => {
    switch (title) {
      case 'Yesterday':
        return 'from-orange-400 to-red-500';
      case 'Today':
        return 'from-blue-400 to-purple-500';
      case 'Next':
        return 'from-emerald-400 to-teal-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const handleAddUpdate = (message: string) => {
    const newUpdate: Update = {
      id: Date.now().toString(),
      name: (user as any)?.firstName || 'Anonymous',
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setUpdates(prev => [newUpdate, ...prev]);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-100/30 p-3 h-[60vh] overflow-auto border border-purple-100/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-bold bg-gradient-to-r ${getColumnColor(title)} bg-clip-text text-transparent`}>
          {title}
        </h3>
        <div className="text-xs text-purple-500 font-medium bg-purple-50 px-2 py-1 rounded-full">
          {updates.length} update{updates.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <StandupCard
            key={update.id}
            name={update.name}
            message={update.message}
            time={update.time}
            detail={update.detail}
          />
        ))}
      </div>

      <AddUpdateInput
        placeholder={`Write a quick ${title.toLowerCase()} update...`}
        onAddUpdate={handleAddUpdate}
      />
    </div>
  );
}
