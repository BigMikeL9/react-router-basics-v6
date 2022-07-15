import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />

      <main>
        {/* '<Routes>' instead of '<Switch>' */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />

          <Route path="/welcome/*" element={<Welcome />}>
            {/*   -- Nested Route 👇👇👇
                  〰 content inside the nested route will be laoded when url path is  ' path="/welcome/new-user" ' 
                  〰 HAVE to tell react-router where to insert the nested route content, inside the '<Welcome/>' component, if the route matches, by using the '<Outlet/>' component in the '<Welcome/>' component
            */}
            <Route path="user-login" element={<p>This is a nested Route.</p>} />
          </Route>

          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
