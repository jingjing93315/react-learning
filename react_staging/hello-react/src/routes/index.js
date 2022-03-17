import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Home/Message'
import News from '../pages/Home/News'
import { Navigate } from 'react-router-dom'
import Detail from '../pages/Home/Detail'

const element = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children:[
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail',
            element: <Detail/>
          }
        ]
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  }
]
export default element
