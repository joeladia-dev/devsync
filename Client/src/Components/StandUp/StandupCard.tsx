interface Props {
  name: string;
  message: string;
  time: string;
  detail?: string;
}

export default function StandupCard({ name, message, time, detail }: Props) {
  return (
    <div className="border rounded-md p-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-gray-500 mt-1">{message}</div>
          {detail && (
            <pre className="mt-2 text-xs bg-gray-50 p-2 rounded text-gray-700">{detail}</pre>
          )}
        </div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <button className="text-xs px-2 py-1 border rounded">Comment</button>
        <button className="text-xs px-2 py-1 border rounded">Share</button>
      </div>
    </div>
  );
}
