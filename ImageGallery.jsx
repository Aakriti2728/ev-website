import React from 'react';
import './ImageGallery.css';
import Car1 from '../../assets/Car1.png';
import Car2 from '../../assets/Car2.png';
import Car3 from '../../assets/Car3.png';
import Car4 from '../../assets/Car4.png';
import Car5 from '../../assets/Car5.png';
import Car6 from '../../assets/Car6.png';

const images = [
  {
    src: Car1,
    title: "Tesla Model 3",
   description: "A sleek electric sedan known for its minimalist interior, impressive range, and advanced autopilot features, shown here in an elegant white finish.",
    price: "₹50 Lakh"
  },
  {
    src: Car2,
    title: "Mercedes-Benz EQS",
    description: "A flagship luxury electric sedan featuring a distinctive illuminated grille, sleek aerodynamic design, and premium interior with advanced AI-powered infotainment system.",
    price: "₹1.6 Crore"
  },
  {
    src: Car3,
    title: "Mahindra BE 6e",
    description: "A futuristic electric coupe-SUV with bold, head-turning design and impressive 500+ km range, targeting young buyers who want performance and cutting-edge technology. ",
    price: "₹18.90 Lakh"
  },
  {
    src: Car4,
   title: "Tesla Cybertruck",
    description: "An angular, stainless steel electric pickup truck with a distinctive geometric design, bulletproof body panels, and impressive towing capacity.",
    price: "₹60 Lakh"
  },
  {
    src: Car5,
   title: "Toyota bZ4X",
    description: "Toyota's electric crossover SUV featuring a modern design with a distinctive light bar, all-wheel drive capability, and Toyota's reliability heritage.",
    price: "₹55 Lakh"
  },
  {
    src: Car6,
    title: "Citroën Ami",
    description: "A compact, boxy electric microcar designed for urban mobility with a quirky, minimalist design and ultra-affordable pricing.",
    price: "₹7 Lakh"
  },
];

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      {images.map((item, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={item.src} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p className="price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
