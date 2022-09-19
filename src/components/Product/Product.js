import './Product.scss'


function Product(props) {

   const { title, img, desc, price } = props.currentItems

   return (
      <div className="item">
         <img onClick={() => props.onShowItem(props.currentItems)} src={'./img/products/' + img} alt="" />
         <h2>{title}</h2>
         <b>{price}₽</b>
         <div onClick={() => props.onAdd(props.currentItems)} className="add-to-cart">+</div>
      </div>
   )
};

export default Product