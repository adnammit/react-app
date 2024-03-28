import Navigation from '../components/Navigation';
import Stepper from '../components/Stepper';

function Home() {
  return (
    <>
      <Navigation />
      <h1 className="text-center text-xl font-semibold text-yellow-500">
        You're Home!
      </h1>
      <Stepper />
    </>
  );
}

export default Home;
