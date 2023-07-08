import { NavLink } from 'react-router-dom'
import classes from './categoriesListPage.module.css'
import { useGetAllCategoriesQuery } from '../redux/apiSlice'

export const CategoriesListPage = () => {
const {data, isLoading, error} = useGetAllCategoriesQuery()
console.log(isLoading, data, error)
  return (
    <>
      <h1>Магазин лучших вещей</h1>
      <div className={classes.container}>
        {data &&
          data.map((el, index) => (
            <NavLink key={index} to={`/categories/${el}`}>
              <div className={classes.categoryContainer}>{el}</div>
            </NavLink>
          ))}
      </div>
    </>
  )
}
