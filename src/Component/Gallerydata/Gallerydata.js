import React, { useState, useEffect } from 'react';
import './Gallerydata.css';

import basket1 from '../../Assets/img6.jpg';
import basket2 from '../../Assets/img8.jpg';
import basket3 from '../../Assets/basket30.jpg';
import basket4 from '../../Assets/basket29.jpg';
import basket5 from '../../Assets/basket5.jpg';
import basket6 from '../../Assets/basket6.jpg';
import basket7 from '../../Assets/basket7.jpg';
import basket8 from '../../Assets/basket8.jpg';
import basket9 from '../../Assets/nikkah3.jpg';
import basket10 from '../../Assets/nikkah7.jpg';
import basket11 from '../../Assets/nikkah8.jpg';
import basket12 from '../../Assets/basket32.jpg';

// Data
const GalleryData = [
  { id: 1, title: "Bouquet", image: basket1, materials: "Silk, Ribbon", size: "30cm x 20cm", price: "$50", customization: "Available" },
  { id: 2, title: "Bouquet", image: basket2, materials: "Fresh Flowers, Ribbon", size: "35cm x 25cm", price: "$70", customization: "Available" },
  { id: 3, title: "Bouquet", image: basket3, materials: "Paper, Glitter", size: "25cm x 15cm", price: "$40", customization: "Not Available" },
  { id: 4, title: "Bouquet", image: basket4, materials: "Plastic, Fabric", size: "28cm x 18cm", price: "$60", customization: "Available" },
  { id: 5, title: "Basket", image: basket5, materials: "Wood, Paint", size: "40cm x 30cm", price: "$90", customization: "Available" },
  { id: 6, title: "Basket", image: basket6, materials: "Wicker, Fabric", size: "45cm x 35cm", price: "$100", customization: "Not Available" },
  { id: 7, title: "Basket", image: basket7, materials: "Metal, Paint", size: "50cm x 40cm", price: "$120", customization: "Available" },
  { id: 8, title: "Basket", image: basket8, materials: "Plastic, Fabric", size: "38cm x 28cm", price: "$80", customization: "Available" },
  { id: 9, title: "Nikkah", image: basket9, materials: "Gold, Silk", size: "20cm x 15cm", price: "$150", customization: "Available" },
  { id: 10, title: "Nikkah", image: basket10, materials: "Silver, Fabric", size: "22cm x 18cm", price: "$140", customization: "Available" },
  { id: 11, title: "Nikkah", image: basket11, materials: "Bronze, Velvet", size: "24cm x 16cm", price: "$130", customization: "Not Available" },
  { id: 12, title: "Nikkah", image: basket12, materials: "Crystal, Fabric", size: "26cm x 19cm", price: "$160", customization: "Available" }
];

const DetailModal = ({ show, item, onClose }) => {
  if (!show || !item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p><strong>Materials:</strong> {item.materials}</p>
        <p><strong>Size:</strong> {item.size}</p>
        <p><strong>Price:</strong> {item.price}</p>
        <p><strong>Customization:</strong> {item.customization}</p>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setData(GalleryData.slice(0, 8));
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const galleryFilter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title === itemData).slice(0, 8);
    setData(filterData);
  };

  const showAll = () => {
    setData(GalleryData.slice(0, 8));
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-page">
      <div className="filter-item">
        <ul>
          <li><button onClick={showAll}>All</button></li>
          {collection.map((item, index) => (
            <li key={index}>
              <button onClick={() => galleryFilter(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery-container">
        {data.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => openModal(item)}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <DetailModal show={!!selectedItem} item={selectedItem} onClose={closeModal} />
    </div>
  );
};

export default GalleryPage;
