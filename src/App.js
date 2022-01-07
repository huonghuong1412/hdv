import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { setCurrentUser, logout } from './actions/UserActions'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import Register from './pages/Account/Register';
import DetailProduct from './pages/Product/DetailProduct';
import ProductsPage from './pages/Product/ProductsPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderAdmin from './components/HeaderAdmin';
import HeaderSale from './components/HeaderSale';
import HeaderStock from './components/HeaderStock';
import OverviewAccount from './pages/Account/OverviewAccount';
import Login from './pages/Account/Login'
import CartPage from './pages/Cart/CartPage';
import Profile from './pages/Account/Profile';
import ScrollToTop from './ScrollToTop';

import HomePageAdmin from './pages/Admin/HomePage'
import AddProduct from './pages/Admin/Product/AddProduct';
import Products from './pages/Admin/Product/Products';
import Categories from './pages/Admin/Category/Categories';
import CategoryActions from './pages/Admin/Category/CategoryActions';
import Subcategories from './pages/Admin/Subcategory/Subcategories';
import SubCategoryActions from './pages/Admin/Subcategory/SubCategoryActions';
import Authors from './pages/Admin/Author/Authors';
import Publisher from './pages/Admin/Publisher/Publisher';
import Brands from './pages/Admin/Brand/Brands';
import Colors from './pages/Admin/Color/Colors';
import Sizes from './pages/Admin/Size/Sizes';
import UpdateProducts from './pages/Admin/Product/UpdateProducts';
import Comments from './pages/Admin/Comment/Comments';
import OrderPage from './pages/Order/OrderPage';
import OrderUser from './pages/Account/OrderUser';
import ResultPayment from './pages/Order/ResultPayment';
import ManageOrder from './pages/Admin/Order/ManageOrder';
import User from './pages/Admin/User/User';
import Stock from './pages/Admin/Stock/Stock';

function App() {

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("roles");
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      if (Date.now() / 1000 > decoded.exp) {
        dispatch(logout());
      }
    }
  }, [dispatch, token]);

  const showHeader = (role) => {
    if (role === "ROLE_ADMIN") {
      return <HeaderAdmin />
    } else if (role === "ROLE_STAFF_BUSINESS" || role === "ROLE_STAFF_STOCK") {
      return <HeaderStock />
    } else if (role === "ROLE_STAFF_SALE") {

      return <HeaderSale />
    } else {
      return <Header />
    }
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        {
          // role === "ROLE_ADMIN" ? <HeaderAdmin /> : <Header />
          showHeader(role)
        }
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/admin" component={HomePageAdmin}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/dasboard-account" component={OverviewAccount}></Route>
          <Route exact path="/dasboard-profile" component={Profile}></Route>
          <Route exact path="/dasboard-my-order" component={OrderUser}></Route>
          <Route exact path="/dasboard-my-payment" component={ResultPayment}></Route>
          <Route exact path="/cart" component={CartPage}></Route>
          <Route exact path="/order" component={OrderPage}></Route>

          <Route exact path="/admin/products/add" component={AddProduct}></Route>
          <Route exact path="/admin/products/:id/update" component={UpdateProducts}></Route>
          <Route
            exact
            path="/admin/products/:category"
            // component={Products}
            render={(props) => <Products {...props} key={props.location.key} />}
          ></Route>

          <Route exact path="/admin/stock" component={Stock}></Route>
          <Route exact path="/admin/user" component={User}></Route>

          <Route exact path="/admin/category" component={Categories}></Route>
          <Route exact path="/admin/category/add" component={CategoryActions}></Route>

          <Route exact path="/admin/subcategory" component={Subcategories}></Route>
          <Route exact path="/admin/subcategory/add" component={SubCategoryActions}></Route>

          <Route exact path="/admin/authors" component={Authors}></Route>
          <Route exact path="/admin/publisher" component={Publisher}></Route>
          <Route exact path="/admin/brands" component={Brands}></Route>
          <Route exact path="/admin/colors" component={Colors}></Route>
          <Route exact path="/admin/sizes" component={Sizes}></Route>

          <Route exact path="/admin/orders" component={ManageOrder}></Route>
          <Route exact path="/admin/comments" component={Comments}></Route>

          <Route
            exact
            path="/:category"
            render={(props) => <ProductsPage {...props} key={props.location.key} />}
          ></Route>
          <Route
            exact
            path="/:category/:subcategory"
            render={(props) => <ProductsPage {...props} key={props.location.key} />}
          ></Route>
          <Route
            exact
            path="/san-pham/:id/:slug"
            render={(props) => <DetailProduct {...props} key={props.location.key} />}
          ></Route>





        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
