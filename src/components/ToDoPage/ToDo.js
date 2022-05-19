import React, { useState } from 'react'

const ToDo = () => {
    const [toDo, setToDo] = useState([])
    fetch('todo.json')
        .then((res) => res.json())
        .then((data) => setToDo(data))
    const handAdd = (e) => {
        e.preventDefault()
        const product_name = e.target.title.value
        const body = e.target.description.value
    }
    return (
        <div className="max-w-xl mx-auto mt-20">
            {toDo.map((p) => (
                <div>
                    <p className="text-2xl">{p.title}</p>
                    <p>{p.body}</p>
                </div>
            ))}
            <form onSubmit={handAdd} className="mt-40">
                <div className="md:flex ">
                    <div
                        className="md:w-full"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <label
                            htmlFor="username"
                            className="block text-sm text-gray-200"
                        >
                            Title:
                        </label>
                        <input
                            name="title"
                            placeholder="Title"
                            type="text"
                            className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                </div>

                <div
                    className="mt-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block text-sm text-gray-200"
                        >
                            Description:
                        </label>
                    </div>

                    <textarea
                        name="description"
                        placeholder="Description"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                    />
                </div>

                <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors ease-in-out duration-500 transform bg-green-500 font-bold rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700 "
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ToDo
