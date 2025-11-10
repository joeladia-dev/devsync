import AvatarGroup from '../Users/AvatarGroup';
import { SignOutButton, useUser } from '@clerk/clerk-react';

interface HeaderProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function Header({ users }: HeaderProps) {
  const { user } = useUser();

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
          <div className="flex items-center space-x-3">
            {user && (
              <>
                <img
                  src={(user as any).profileImageUrl || (user as any).imageUrl}
                  alt={(user as any).firstName || 'avatar'}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{(user as any).firstName || 'User'}</span>
              </>
            )}
            <SignOutButton>
              <button
                type="button"
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign out
              </button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </header>
  );
}
