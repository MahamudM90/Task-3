import { useState } from "react"

export default function Filter() {

    const productsdata = [
        { name: 'Smart-Watch', price: '300', category: 'computing' },
        { name: 'Laptop', price: '610', category: 'computing' },
        { name: 'Polo-Shirt', price: '20', category: 'cloth' },
        { name: 'Jeans-Pant', price: '10', category: 'cloth' },
        { name: 'Mobile', price: '40', category: 'computing' }
    ]

    const [category, setCategory] = useState('All')
    const [price, setPrice] = useState('All')

    //Filter selected product 
    const filterProduct = productsdata.filter(product => {
        const categoryMatch = category = 'All' || product.category === category
        const priceMatch = price = 'All' || (price == 'low' && product.price < 30) || (price === 'moderate' && product.price <= 300) || (price === 'higher' && product.price > 600);
        return categoryMatch && priceMatch;
    })

    return (
        <>

        </>
    )
}