import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes/routes';

function App() {
  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
        {
          routes.map((route)=>(
             <Route path={route.path} Component={route.element} key={route.id}/>
          ))
        }
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
