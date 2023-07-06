import { useParams } from 'react-router-dom'
import classes from './singleProductPage.module.css'
import { useGetProductsByProductQuery } from '../redux/apiSlice'
import { addProductToBasket } from '../redux/basketSlice'
import { useDispatch } from 'react-redux'

export const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsByProductQuery(id);
  const dispatch = useDispatch();
  const addProductToBasketHandler = (product) => {
    console.log(product);
    dispatch(addProductToBasket(product))
  }

  return (
    <div>
      { isLoading ? <h1>LOADING...</h1> : 
      (<div className={classes.container}>
        <img src={data.image} />
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>Price: {data.price}</p>
          <button onClick={()=> addProductToBasketHandler(data)}>Добавить в корзину</button>
        </div>
        </div>)
      }
    </div>
  )
}
