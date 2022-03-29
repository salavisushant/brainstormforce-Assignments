import './App.css';
import { Home } from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes,Route} from 'react-router-dom'
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={  <Home />}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
