import MainContent from './components/MainContent';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='p-6 container relative'>
      <div className='w-22 fixed hidden md:block'>
        <SideBar />
      </div>
      <MainContent />
    </div>
  );
}

export default App;
