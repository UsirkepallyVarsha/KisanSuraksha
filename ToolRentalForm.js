import React, { useState } from 'react';

const ToolRentalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        selectedTools: [],
        rentalDuration: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleToolSelect = (tool) => {
        setFormData((prev) => ({
            ...prev,
            selectedTools: prev.selectedTools.includes(tool)
                ? prev.selectedTools.filter((item) => item !== tool)
                : [...prev.selectedTools, tool],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with API call or any processing you need
        console.log('Form Data:', formData);
        alert('Registration Successful!');
        // Reset the form
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            selectedTools: [],
            rentalDuration: '',
        });
    };

    return (
        <div className="RegistrationForm">
            <h2> Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
              
                <div>
                    <label>Last Duration (days):</label>
                    <input
                        type="number"
                        name="rentalDuration"
                        value={formData.rentalDuration}
                        onChange={handleChange}
                        required
                        min="1"
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ToolRentalForm;