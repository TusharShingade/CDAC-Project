import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import VendorRegistration from './components/VendorRegistration';
import Home from './components/Home'
import AboutComp from './components/AboutComp';
import FooterComp from './components/FooterComp';
import HeaderComp from './components/HeaderComp';
import AdminHomeComp from './components/AdminHomeComp';import VenderHomeComp from './components/VendorHomeComp';
import CustomerHomeComp from './components/CustomerHomeComp';
import { useAccordionButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import LoginComp from './components/LoginComp';
import ViewProduct from './components/ViewProduct';
import ViewCategory from './components/ViewCategories';
import AddCategory from './components/AddCategory';
import VendorHomeComp from './components/VendorHomeComp';
import ViewCustomer from './components/ViewCustomer';
import ViewVendor from './components/ViewVendor';
import NavigationBar from './components/NavigationBar';
import AddProduct from './components/AddProduct';
import ViewProductVendor from './components/ViewProductVendor';
import ViewWalletAdmin from './components/ViewWalletAdmin';
import CustomerRegistration from './components/CustomerRegistration';
import ViewWalletCustomer from './components/ViewWalletCustomer';
import ViewWalletVendor from './components/ViewWalletVendor';
import UpdateWalletCustomer from './components/UpdateWalletCustomer';
import WalletSuccess from './components/WalletSuccess';
import ViewProductHome from './components/ViewProductHome';
import ViewCart from './components/ViewCart'
import OrderSuccessfull from './components/OrderSuccessfull';
import ViewOrder from './components/ViewOrder';
import ViewOrderCustomer from './components/ViewOrderCustomer';
import ViewVendorAdmin from './components/ViewVendorAdmin';

function App() {
  return (
    
    <div className="App "> 
      
      <NavigationBar></NavigationBar>

      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<AboutComp></AboutComp>}></Route>
        <Route path='/login' element={<LoginComp></LoginComp>}></Route>
        <Route path='/cregistration' element={<CustomerRegistration></CustomerRegistration>}></Route>
        <Route path='/vregistration' element={<VendorRegistration></VendorRegistration>}></Route>
        <Route path='/adminhome' element={<AdminHomeComp></AdminHomeComp>}></Route> 
        <Route path='/vendorhome' element={<VendorHomeComp></VendorHomeComp>}></Route>
        <Route path='/customerhome' element={<CustomerHomeComp></CustomerHomeComp>}></Route>
        <Route path='/logout' element={<LogoutComp></LogoutComp>}></Route>
        <Route path='/viewproducthome' element={<ViewProductHome></ViewProductHome>}></Route>
        
      </Routes>

      <Routes>
            <Route path='/viewcategories' element={<ViewCategory></ViewCategory>}></Route>
            <Route path='/addcategories' element={<AddCategory></AddCategory>}></Route>
            <Route path='/viewproduct' element={<ViewProduct></ViewProduct>}></Route>
            <Route path='/viewcustomers' element={<ViewCustomer></ViewCustomer>}></Route>
            <Route path='/viewvendor' element={<ViewVendor></ViewVendor>}></Route>
            <Route path='/viewvendoradmin' element={<ViewVendorAdmin></ViewVendorAdmin>}></Route>
            <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route> 
            <Route path='/viewproductvendor' element={<ViewProductVendor></ViewProductVendor>}></Route>
            <Route path='/viewwalletadmin' element={<ViewWalletAdmin></ViewWalletAdmin>}></Route>
            <Route path='/viewwalletcustomer' element={<ViewWalletCustomer></ViewWalletCustomer>}></Route>
            <Route path='/viewwalletvendor' element={<ViewWalletVendor></ViewWalletVendor>}></Route>
            <Route path='/updatewalletcustomer' element={<UpdateWalletCustomer></UpdateWalletCustomer>}></Route>
            <Route path='/walletsuccess' element={<WalletSuccess></WalletSuccess>}></Route>
            <Route path='/viewcart' element={<ViewCart></ViewCart>}></Route>
            <Route path='/ordersuccessfull' element={<OrderSuccessfull></OrderSuccessfull>}></Route>
            <Route path='/vieworder' element={<ViewOrder></ViewOrder>}></Route>
            <Route path='/viewCustomerOrder' element={<ViewOrderCustomer></ViewOrderCustomer>}></Route>
      </Routes>





    </div>
    

  );
}

export default App;
