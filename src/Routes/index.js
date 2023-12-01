import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import About from "../pages/About";
import Answers from "../pages/Answers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Quiz from "../pages/Quiz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";

export const Routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'logout',
                element: <Logout />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'topic',
                        element: <Topic />
                    },
                    {
                        path: 'answers',
                        element: <Answers />
                    },
                    {
                        path: 'result/:id',
                        element: <Result />
                    },
                    {
                        path: 'quiz/:id',
                        element: <Quiz />
                    },
                ]
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]