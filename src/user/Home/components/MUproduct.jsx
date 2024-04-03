import React from 'react'
import { Link } from 'react-router-dom'

function MUproduct() {
    let medicalProducts = [
        {
            id: 1,
            img1: "data:image/jpeg;base64,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",
            title: "Foley Catheter",
            price: "$12.90"
        },
        {
            id: 2,
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfURLHhSWlBpvH4Q6KaHTiSjkeLY5DLUQM_1rdzkdPxtcTNxZIFI8nLoVCYCB9EWMqSWw&usqp=CAU",
            title: "Thermometer",
            price: "$8.98"
        },
        {
            id: 3,
            img1: "data:image/jpeg;base64,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",
            title: "Non Breathable Mask",
            price: "$3.32"
        },
        {
            id: 4,
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTso78wXY9UtCL2N7-2ct1wjPkD9hoDuxOg&usqp=CAU",
            title: "Foley Catheter",
            price: "$3.90"
        },
    ]

    let upcomingProducts = [
        {
            id: 1,
            img1: "data:image/jpeg;base64,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",
            title: "Foley Catheter",
            price: "$12.90"
        },
        {
            id: 2,
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfURLHhSWlBpvH4Q6KaHTiSjkeLY5DLUQM_1rdzkdPxtcTNxZIFI8nLoVCYCB9EWMqSWw&usqp=CAU",
            title: "Thermometer",
            price: "$8.98"
        },
        {
            id: 3,
            img1: "data:image/jpeg;base64,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",
            title: "Non Breathable Mask",
            price: "$3.32"
        },
        {
            id: 4,
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTso78wXY9UtCL2N7-2ct1wjPkD9hoDuxOg&usqp=CAU",
            title: "Foley Catheter",
            price: "$3.90"
        },
    ]
    return (
        <>
            <div className='m-5'>
                <h1 className='text-center text-xl fw-bolder '>Medical Products</h1>
                <div className="flex justify-around items-center gap-3 p-4">
                    {
                        medicalProducts.map((item) => {
                            return (
                                <>
                                    <div className="border-2 border-teal-700 w-40   rounded ">
                                        <img className='p-1' src={item.img1} alt="" />
                                        <div className="border-t-2 p-1">
                                            <p> {item.title} </p>
                                            <p> {item.price} </p>
                                        </div>
                                        <div className="bg-teal-600 text-slate-300 p-1 flex items-center justify-between ">
                                            <p>Add to Cart </p>
                                            <i class="fa-solid fa-basket-shopping"></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <h1 className='text-center text-xl fw-bolder '>Upcoming Products</h1>
                <div className="text-right ">
                    <Link to={'view-all'}>
                        <button className='text-teal-900 sm:text-lg  '>View All <i class="fa-solid fa-arrow-right"></i></button>

                    </Link>
                </div>
                <div className="flex justify-around items-center gap-3 p-4 ">
                    {
                        upcomingProducts.map((item) => {
                            return (
                                <>
                                    <div className="border-2 border-teal-700  w-[130px] sm:w-[250px] h-fit m-5  rounded ">
                                        <img src={item.img1} className='p-2' alt="" />
                                        <div className="border-t-2 p-1">
                                            <p className='' > {item.title} </p>
                                            <p> {item.price} </p>
                                        </div>
                                        <div className="bg-teal-600 text-slate-300 p-1 flex items-center justify-between ">
                                            <p>Add to Cart </p>
                                            <i class="fa-solid fa-basket-shopping"></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>

            <div className="flex justify-evenly items-center p-3 text-slate-500 bg-slate-300 m-3">
                <div className="">
                    <p className=' fs-6'>Today's Hot Offer</p>
                    <h2 className='fw-bolder fs-2 text-xl p-1'>Unlock 50% Off on <br />
                        Essential Medicines!</h2>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Optio alias fuga debitis labore dolor eaque corrupti non aperiam tempore totam, minus,<br /> reiciendis enim. Saepe, sit doloribus incidunt suscipit quasi ducimus.</p>

                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaru8B75smQzrq1GMvH18NDbNt9mv-0PMnJLJ9GqnWQfeAx4pxhNFgP0D_sXhJZ1RJU4&usqp=CAU" width="400 " alt="" />
            </div>

        </>
    )
}

export default MUproduct
