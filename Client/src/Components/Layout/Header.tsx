import AvatarGroup from '../Users/AvatarGroup';
import { SignOutButton, useUser } from '@clerk/clerk-react';

interface HeaderProps {
  users: { id: string; name: string; avatar: string }[];
}

export default function Header({ users }: HeaderProps) {
  const { user } = useUser();

  return (
    <header className='bg-white/80 backdrop-blur-md shadow-lg shadow-purple-100/50 sticky top-0 z-20 border-b border-purple-100'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-1'>
          DevSync
        </h1>
        <div className='flex items-center gap-4'>
          <div className='hidden md:flex items-center gap-2'>
            <span className='text-sm text-gray-600 font-medium'>Team:</span>
            <div className='rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 text-sm font-medium border border-emerald-200'>
              Core
            </div>
          </div>
          <AvatarGroup users={users} />
          <button className='ml-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105'>
            New Stand-up
          </button>
          <div className='flex items-center space-x-3'>
            {user && (
              <>
                <img
                  src={(user as any).profileImageUrl || (user as any).imageUrl}
                  alt={(user as any).firstName || 'avatar'}
                  className='h-8 w-8 rounded-full object-cover ring-2 ring-purple-200'
                />
                <span className='text-sm font-medium text-gray-700'>
                  {(user as any).firstName || 'User'}
                </span>
              </>
            )}
            <SignOutButton>
              <button
                type='button'
                className='px-3 py-2 text-sm bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200'
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
