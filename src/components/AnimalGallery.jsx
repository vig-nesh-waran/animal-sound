import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import animalData from "../assets/data/animalData.json";


// Import images and sounds
import dogImg from "../assets/img/dog.jpeg";
import horseImg from "../assets/img/horse.jpg";
import roosterImg from "../assets/img/rooster.jpg";
import wolfImg from "../assets/img/wolf.jpg";
import cowImg from "../assets/img/cow.jpg";
import catImg from "../assets/img/cat.webp";

import dogSound from "../assets/sounds/dog.wav";
import horseSound from "../assets/sounds/horse.wav";
import roosterSound from "../assets/sounds/rooster.wav";
import wolfSound from "../assets/sounds/wolf.wav";
import cowSound from "../assets/sounds/cow.wav";
import catSound from "../assets/sounds/cat.wav";

// Map animal names to images and sounds
const images = {
  dog: dogImg,
  horse: horseImg,
  rooster: roosterImg,
  wolf: wolfImg,
  cow: cowImg,
  cat: catImg,
};

const sounds = {
  dog: dogSound,
  horse: horseSound,
  rooster: roosterSound,
  wolf: wolfSound,
  cow: cowSound,
  cat: catSound,
};


const AnimalGallery = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setAnimals(animalData);
  }, []);

  return (
    <div className="bg-green-100 p-4 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          image={images[animal.image]}
          sound={sounds[animal.sound]}
        />
      ))}
    </div>
  );
};

export default AnimalGallery;
