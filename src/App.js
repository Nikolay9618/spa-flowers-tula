import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/pages/ProductsPage/Products";
import AboutPage from './components/pages/AboutPage/AboutPage';
import ContactsPage from './components/pages/ContactsPage/ContactsPage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';

import './App.css';
import ShowProdict from "./components/ShowProduct/ShowProduct";

function App(props) {

  const [items, setItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [showProdict, setShowProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState({})

  useEffect(() => {
    setItems([{
      id: 1,
      title: 'Композиция "Зефирка"',
      img: 'photo_2021-05-14_12-41-51.jpg',
      desc: 'Lorem Lorem Lorem Lorem Lorem',
      price: 900
    },
    {
      id: 2,
      title: 'Композиция "С гортензиями"',
      img: 'photo_2021-05-14_12-42-41.jpg',
      desc: 'Lorem Lorem Lorem Lorem Lorem Lorem',
      price: 1200
    },
    {
      id: 3,
      title: 'Композиция "Солнечная"',
      img: 'photo_2021-11-02_18-28-13.jpg',
      desc: 'Lorem Lorem Lorem Lorem Lorem Lorem',
      price: 1400
    },
    {
      id: 4,
      title: 'Композиция из роз',
      img: 'photo_2021-11-12_12-15-25.jpg',
      desc: 'Lorem Lorem Lorem Lorem Lorem Lorem',
      price: 2000
    },
    {
      id: 5,
      title: 'Композиция в ящике',
      img: 'photo_2022-03-07_17-18-08.jpg',
      desc: 'Lorem Lorem Lorem Lorem Lorem Lorem',
      price: 2600
    }

    ])
  }, []);

  useEffect(() => {
    withoutScroll()
  }, [showProdict])

  const withoutScroll = () => {
    if (showProdict) {
      document.querySelector('body').classList.add('withoutScroll')
    } else {
      document.querySelector('body').classList.remove('withoutScroll')
    }
  }

  const addToOrder = (el) => {
    let isInArray = false
    order.forEach(item => {
      if (item.id === el.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      localStorage.setItem('order', JSON.stringify([...order, el]))
    }
  };

  const onDelete = (id) => {
    setOrder(order => order.filter(item => item.id !== id))
  }

  const chooseCategory = (category) => {
    switch (category) {
      case 'all':
        return setCurrentItems(items);
      case 'from 1000':
        return setCurrentItems(items.filter(el => el.price <= 1000));
      case '1000-1500':
        return setCurrentItems(items.filter(el => el.price > 1000 && el.price <= 1500));
      case '1500-2500':
        return setCurrentItems(items.filter(el => el.price > 1500 && el.price <= 2500));
      case 'more-2500':
        return setCurrentItems(items.filter(el => el.price > 2500));
    }
  }

  const onShowItem = (item) => {
    setFullProduct(item);
    setShowProduct(showProdict => showProdict = !showProdict);
  }



  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header order={order} onDelete={onDelete} />
        <div className="mainApp">
          <Routes>
            <Route path="/" element={<Products onShowItem={onShowItem} onCategory={chooseCategory} items={items} currentItems={currentItems} onAdd={addToOrder} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          {showProdict ? <ShowProdict fullProduct={fullProduct} onAdd={addToOrder} onShowItem={onShowItem} /> : null}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
