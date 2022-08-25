import { Suspense } from 'react';
import './i18n'
import './App.css';
import Message from './Message';
import SwitchLanguage from './SwitchLanguage'
function App() {
  return (
    <Suspense>

      <div className="App">

        <Message />
        <SwitchLanguage />
      </div>
    </Suspense>
  );
}

export default App;
