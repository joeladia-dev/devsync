import { useState } from 'react';

interface Props {
  name: string;
  message: string;
  time: string;
  detail?: string;
}

export default function StandupCard({ name, message, time, detail }: Props) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-purple-100/50 hover:shadow-lg transition-all duration-200"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-800">{name}</div>
          <div className="text-sm text-gray-600 mt-1 leading-relaxed">{message}</div>
          {detail && (
            <pre className="mt-3 text-xs bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg text-gray-700 border border-purple-100 font-mono">{detail}</pre>
          )}
        </div>
        <div className="text-xs text-purple-500 font-medium ml-3">{time}</div>
      </div>
      <div className={`flex items-center gap-2 mt-4 transition-all duration-200 ${showActions ? 'opacity-100' : 'opacity-0'}`}>
        <button className="text-xs px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-lg font-medium transition-all duration-200">
          💬 Comment
        </button>
        <button className="text-xs px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-medium transition-all duration-200">
          🔗 Share
        </button>
      </div>
    </div>
  );
}
