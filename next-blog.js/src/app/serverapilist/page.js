async function productlist() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}

export default function Page() {
    let products = productlist();
    console.log(products);
    return (
        <div>
            <h1>Product List</h1>
        </div>
    )
}