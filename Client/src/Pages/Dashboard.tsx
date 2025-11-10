import Header from '../Components/Layout/Header';
import Sidebar from '../Components/Layout/Sidebar';
import StandupBoard from '../Components/StandUp/StandupBoard';
// import { UserProfile } from '../api';
import { mockUsers } from '../Data/mockUsers';

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800'>
      <Header users={mockUsers} />
      <div className='max-w-7xl mx-auto p-4 grid grid-cols-12 gap-6'>
        <Sidebar users={mockUsers} />
        <main className='col-span-9'>
          {/* <UserProfile /> */}
          <StandupBoard users={mockUsers} />
        </main>
      </div>
    </div>
  );
}
