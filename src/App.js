import { useEffect, useState } from 'react'
import './App.css'

import Card from './components/Card'
import Pagination from './components/Pagination'
import uuid from 'react-uuid'

const initialFoods = [
  {
    id: uuid(),
    title: 'Fruit Toast',
    description: 
      `Fruit toast is a delicious and healthy 
      breakfast or snack option that is easy to prepare and 
      packed with nutritious ingredients.`,
    image: 'images/food1.jpg'
  },
  {
    id: uuid(),
    title: 'Macarons',
    description: 
      `Macarons are delightful French confections made from ground almonds and 
      meringue, with a crisp outer 
      shell and a soft, chewy interior, and come in a variety of flavors and colors.`,
    image: './images/food (2).jpg'
  },
  {
    id: uuid(),
    title: 'Paratha',
    description: 
      `Paratha is a popular flatbread from the Indian subcontinent, made with whole wheat 
      flour and layered with ghee or oil, resulting in a 
      crispy and flaky texture. It's often served with 
      curries or chutneys as a main dish or a hearty breakfast.`,
    image: './images/food (3).jpg'
  },
  {
    id: uuid(),
    title: 'Macarons in a box',
    description:
    `Macarons are delightful French confections made from ground almonds and 
    meringue, with a crisp outer 
    shell and a soft, chewy interior, and come in a variety of flavors and colors.`,
    image: './images/food (4).jpg'
  },
  {
    id: uuid(),
    title: 'Cupcake',
    description: 
      `Cupcakes are delicious miniature cakes that come in a 
      variety of flavors and designs, often topped with frosting
      and other decorations. They're a popular dessert for celebrations,
      parties, or as a sweet treat anytime.`,
    image: './images/food (5).jpg'
  },
  {
    id: uuid(),
    title: 'Cup Food',
    description: 
      `Cupcakes are delicious miniature cakes that come in a 
      variety of flavors and designs, often topped with frosting
      and other decorations. They're a popular dessert for celebrations,
      parties, or as a sweet treat anytime.`,
    image: './images/food (6).jpg'
  },
  {
    id: uuid(),
    title: 'Fruit Platter',
    description:
    `A fruit platter is a colorful and healthy 
    display of fresh fruits such as berries, melons, grapes, 
    and more, often served as a refreshing appetizer or dessert.`,
    image: './images/food (7).jpg'
  },
  {
    id: uuid(),
    title: 'Egg Roll',
    description:
    `Egg rolls are a popular and delicious 
    appetizer that are a staple in many Asian cuisines. `,
    image: './images/food (8).jpg'
  },
]

const App = () => {
  const [foods, setFoods] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [foodsPerPage] = useState(3)

  //for check if the arrows should be displayed or not
  const [displayLeft, setDisplayLeft] = useState(false)
  const [displayRight, setDisplayRight] = useState(true)

  useEffect(() => {
    console.log('effect runs');
    const indexOfLastPost = currentPage * foodsPerPage;
    const indexOfFirstPost = indexOfLastPost - foodsPerPage;
    const currentFoods = initialFoods.slice(indexOfFirstPost, indexOfLastPost);
    setFoods(currentFoods);

    if(currentPage !== 1){
      setDisplayLeft(true)
    } else{
      setDisplayLeft(false)
    }

    if(currentPage !== Math.ceil(initialFoods.length / foodsPerPage)){
      setDisplayRight(true)
    } else{
      setDisplayRight(false)
    }
  }, [currentPage, foodsPerPage])

  const handleClick = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber)
  }

  return (
    <div className='container'>
      <h1>Food Items</h1>
      {
        foods.map(food => {
          return (
            <Card key={food.id} food={food} />
          )
        })
      }
      <Pagination 
        items={initialFoods.length}
        foodsPerPage={foodsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleClick={handleClick}
        displayLeft={displayLeft}
        displayRight={displayRight}
      />
    </div>
  )
}

export default App