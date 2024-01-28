import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes/routes';

function AppContent() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route)=>(
             <Route path={route.path} Component={route.element} key={route.id}/>
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default AppContent;
