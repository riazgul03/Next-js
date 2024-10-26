"use client"
export default function Lecture({ params }) {
    console.log(params);
    return (
        <div>
            <h1>day of College: {params.lecture[0]}</h1>
            <h2>Leture No: {params.lecture[1]}</h2>
            <h1>day of College: {params.lecture[2]}</h1>
            <h2>Leture No: {params.lecture[3]}</h2>
            <h1>day of College: {params.lecture[4]}</h1>
            <h3>Leture No: {params.lecture[5]}</h3>

        </div>
    )
}