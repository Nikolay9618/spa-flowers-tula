import './Cart.scss'
import { FaTrash } from 'react-icons/fa'

const Cart = (props) => {

   const getSum = () => {
      const arr = props.order.map(el => {
         return el.price
      })
      const sum = arr.reduce((acc, el) => acc + el, 0)
      return sum
   }


   const item = props.order.map(el => {
      return (
         <div className="cart__row" key={el.id}>
            <div className='cart__imgandText'>
               <img src={'./img/products/' + el.img} alt="" />

               <div className='cart__text'>
                  <h2>{el.title}</h2>
                  <b>{el.price}₽</b>
               </div>
            </div>

            <FaTrash className='cart__icon' onClick={() => props.onDelete(el.id)}></FaTrash>

         </div>
      )
   })

   return (
      <div className='cart'>
         {item.length == 0 ? <div className='empty'>Корзина пустая</div> : item}
         <div className="cart__sum">Сумма: {getSum()}₽</div>
         <div className="cart__button">Сделать заказ</div>
      </div>
   )
}

export default Cart