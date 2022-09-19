import { useState } from "react";

import './Categories.scss'


const Categories = (props) => {

   const [categories, setCategories] = useState([
      {
         key: 'all',
         name: 'Все товары'
      },
      {
         key: 'from 1000',
         name: 'До 1000₽'
      },
      {
         key: '1000-1500',
         name: '1000 - 1500₽'
      },
      {
         key: '1500-2500',
         name: '1500 - 2500₽'
      },
      {
         key: 'more-2500',
         name: 'Более 2500₽'
      },
   ])

   return (
      <div className="categories">
         {categories.map(el => (
            <div onClick={() => props.onCategory(el.key)} className="categories__item" key={el.key}>{el.name}</div>
         ))}
      </div>
   )

}


export default Categories