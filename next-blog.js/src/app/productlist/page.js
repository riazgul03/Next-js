"use client"
import { useEffect, useState } from "react"

export default function Page() {
    useEffect(() => {
        let data = awaitfetch("https://dummyjson.com/products");
        data = awaitdata.json();
        console.log(data);
        setProduct(data.prroducts)
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            {
                prroduct.map((item) => (
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}