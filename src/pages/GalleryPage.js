import React, { useState } from "react";
import MainGallery from "../GalleryPage/MainGallery";
import CategoryMenu from "../GalleryPage/CategoryMenu";
import imageData from "../imageData";
import { Navbar } from '../components';
import { Footer } from "../container"



function GalleryPage() {
  const categories = [...new Set(imageData.map((image) => image.category))];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredImages = imageData.filter(
    (image) => image.category === activeCategory
  );

  return (
      <div>
        <Navbar />
        <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory} 
        />
        <MainGallery images={filteredImages} />
        <Footer/>
      </div>

  )
};

export default GalleryPage;