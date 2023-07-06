import { useSelector } from 'react-redux'
import { ProductInBasket } from '../components/ProductInBasket'


export const BasketPage = () => {
  const returnedValue = useSelector((state) => state.basket.products)
  console.log(returnedValue);

  return (
    <div>
      <div>
        {returnedValue.map((product) => (
          <ProductInBasket key={product.id} {...product} />
        ))}
      </div>
      <h2> Итого</h2> <button onClick={()=>{}}>Очистить корзину</button>
    </div>
  )
}
