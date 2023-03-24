import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import CourseBody from './components/CourseBody';
import Main from './components/Main';
import Body from './components/Body';

function App() {

  const routes = createBrowserRouter([{
                path:'/',
                element:<Main/>,
                children:[{
                        path:'',
                        element:<Body/>
                },
                {
                        path:':courseId',
                        element:<CourseBody/>
                }]
        }
]);

  return (
        <Provider store={store}>
                <RouterProvider router = {routes}/>
        </Provider>
  );
}

export default App;




