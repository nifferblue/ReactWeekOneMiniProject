

function Card({image,title,description,className}){
  return (
    <div className={`card-container ${className}`}>
      <img src={image} alt="{title}" />
      <h3 className="card-title">{title}</h3>
      <p>{description}</p>
         <button>Learn More</button>
    </div>
  )
}

export default Card