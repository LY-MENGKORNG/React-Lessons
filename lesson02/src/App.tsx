import Chart from './components/Chart';
import Navigation from './components/Navigation';
import {Button} from './components/ui/button';

function App() {
    return (
        <div className="flex flex-col items-center min-h-svh">
            <Navigation/>
            <Button variant={'default'}>Secondary</Button>
            <Chart/>
        </div>
    );
}

export default App;
