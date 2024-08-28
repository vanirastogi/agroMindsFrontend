import React from 'react';
import './Services.css';
import gardenFence from '../assets/images/garden-fence.jpg';
import gardenWatering from '../assets/images/garden-watering.jpg';
import gardenSupplies from '../assets/images/garden-supplies.jpg';

const Services = () => {
    const servicesData = [
        {
            img: gardenFence,
            title: 'Garden Fence',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
        },
        {
            img: gardenWatering,
            title: 'Garden Watering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
        },
        {
            img: gardenSupplies,
            title: 'Garden Supplies',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
        },
    ];

    return (
        <div className="services-container">
            <h2 className="services-heading">Our Best Services</h2>
            <div className="services-cards">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.img} alt={service.title} className="service-image" />
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
