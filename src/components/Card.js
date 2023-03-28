const Card = ({food}) => {
  return (
    <div className="card">
        <img src={food.image} alt={food.title} className='card--img' loading="lazy"/>
        <div className="card--content">
            <p className="title">{food.title}</p>
            <p className="description">{food.description}</p>
        </div>
    </div>
  )
}

export default Card