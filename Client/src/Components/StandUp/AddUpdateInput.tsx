import { useState } from 'react';

interface AddUpdateInputProps {
  placeholder: string;
  onAddUpdate: (message: string) => void;
}

export default function AddUpdateInput({ placeholder, onAddUpdate }: AddUpdateInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddUpdate(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="mt-6">
      <div className="text-sm text-purple-600 font-medium mb-2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        Add update
      </div>
      <form onSubmit={handleSubmit} className="flex gap-1">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border border-purple-200 rounded-md px-2 py-1.5 text-sm bg-white focus:bg-purple-50/50 focus:ring-1 focus:ring-purple-300 focus:border-purple-400 transition-all duration-200"
          placeholder={placeholder}
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white px-2 py-1.5 rounded-md text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 disabled:transform-none whitespace-nowrap"
        >
          Post
        </button>
      </form>
    </div>
  );
}
