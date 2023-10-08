
import { Toaster } from 'react-hot-toast';
import Header from './src/Components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
         <Toaster/>
        </div>
    );
};

export default MainLayout;