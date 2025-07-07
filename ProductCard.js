// You have a ProductCard component that displays a product’s name and price.
// Q1: How will you pass these values from the parent component?
const ProductCard =({name, price}) =>{
    return(
        <div>
            <h2>{name}</h2>
            <p>Price: Rs.{price}</p>
        </div>
    )
};

export default ProductCard;