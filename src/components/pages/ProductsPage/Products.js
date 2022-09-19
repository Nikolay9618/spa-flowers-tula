
import Categories from '../../Categories/Categories'
import Product from '../../Product/Product'
import './Products.scss'

function Products(props) {

   const item = props.currentItems.length ? props.currentItems.map(el => {
      return (
         <Product onShowItem={props.onShowItem} key={el.id} currentItems={el} onAdd={props.onAdd} />
      )
   }) : props.items.map(el => {
      return (
         <Product onShowItem={props.onShowItem} key={el.id} currentItems={el} onAdd={props.onAdd} />
      )
   })

   return (
      <>
         <div className="container">
            <div className="presentation"></div>
            <h1>Цветы из мыла Тула</h1>
            <Categories onCategory={props.onCategory}></Categories>
            <main className='main'>{item}</main>
         </div>
      </>
   )
}

export default Products;
