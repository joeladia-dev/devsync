export default function AddUpdateInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="mt-4">
      <div className="text-xs text-gray-500 mb-2">Add update</div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded-md px-3 py-2 text-sm" placeholder={placeholder} />
        <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm">Post</button>
      </div>
    </div>
  );
}
