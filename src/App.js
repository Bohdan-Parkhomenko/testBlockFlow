import './App.css';
import Main from './pages/Main/index'
import {useRoutes} from "react-router-dom";
import Layout from "./components/Layout";




const element = ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "main", element: <Main/>,},
            {path: "page1", element: <Page1/>,},
            {path: "page2", element: <Page2/>,},
            {path: "page3", element: <Page3/>,},
            {path: "settings", element: <Settings/>,},
            {path: "*", element: <Main/>,}
        ]
    }
]);

function App() {
    return useRoutes(element);
}

function Page1() {
    return (
        <div>page1</div>
    );
}

function Page2() {
    return (
        <div>page2</div>
    );
}

function Page3() {
    return (
        <div>page3</div>
    );
}

function Settings() {
    return <div>Settings</div>
}

export default App;
