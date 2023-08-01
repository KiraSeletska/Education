import { ProductsList } from './pages/ProductsListPage'
import { SingleProduct } from './pages/SingleProductPage'
import { Header } from './components/Header'
import { CategoriesListPage } from './pages/CategoriesListPage'
import { Outlet } from 'react-router-dom'
import { Form } from './components/Form'
function App() {
  return (
    <div>
      <Header />
      <Form />
      <Outlet />
    </div>
  )
}

export default App
