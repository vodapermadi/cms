import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar/>
      <section className='flex-1'>Content left</section>
      <section className='w-96 bg-green-500 rounded-tl-3xl rounded overflow-hidden'></section>
    </div>
  );
}

export default App;
