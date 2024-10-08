import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'routes';
import './App.css';

function App() {
  return (
      <>
           <ConfigProvider>
               <RouterProvider router={routers} />
           </ConfigProvider>
      </>
  )
}

export default App
