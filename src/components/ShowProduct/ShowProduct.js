import './ShowProduct.scss'

const ShowProdict = (props) => {

   const { title, img, desc, price } = props.fullProduct

   return (
      <div className="product">
         <div className="product__modal">
            <div className='product__img'>
               <img src={'./img/products/' + img} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <b>{price}₽</b>
            <div onClick={() => props.onAdd(props.fullProduct)} className="add-to-cart">+</div>
            <div onClick={(e) => props.onShowItem(e)} className='close'>+</div>
         </div>
      </div>
   )

}

export default ShowProdict