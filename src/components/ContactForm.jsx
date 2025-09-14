import React, { useState } from 'react'

const ContactForm = () => {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // Handle input changes and update state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        // You could also add a message here to let the user know it was successful
        console.log('Form submitted successfully! Check the console for the data.');

        // Reset the form
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className='w-full'>
            <section className='max-w-[800px] rounded-md px-4 py-4 mx-auto my-4 shadow-sm shadow-blue-500 flex items-center justify-between gap-4'>
                <div className='f_content w-1/2 '>
                    <h1 className="text-4xl font-extrabold text-white text-center mb-6">
                        Contact me for collaboration
                    </h1>
                    <p className="text-center mb-8 font-medium">
                        Reach out today to discuss your project needs and start collaborating on something amazing.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 w-1/2 bg-blue-500 p-5 rounded-md">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 px-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Enter name..'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 px-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Enter email..'
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1 px-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Enter password..'
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-400 text-white py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        Sign Up
                    </button>
                </form>

            </section>
        </div>
    )
}

export default ContactForm
