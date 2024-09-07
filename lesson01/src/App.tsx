import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routers';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path}  element={<route.component />} />
              ))
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
