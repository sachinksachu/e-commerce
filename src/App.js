import AppContent from './components/layouts/AppContent';
import AppHeader from './components/layouts/AppHeader';
import AppSidebar from './components/layouts/AppSidebar';

import "./css/App.css";

function App() {
  return (
    <div id="app">
      <AppHeader />
      <div id="app-content">
        <AppSidebar />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
