import React from 'react';

const About = ({ breedDescriptions }) => {
  return (
    <div>
      <h1>About CATS</h1>
      <ul>
        {breedDescriptions.map((breed, index) => (
          <li key={index}>
            <h3>{breed.name}</h3>
            <p>{breed.description}</p>
          </li>
        ))}
      </ul>
      <h2>About Us</h2>
      <p>Welcome to our site where you can learn about different cat breeds and adopt a cat! Our mission is to find loving homes for all cats.</p>
    </div>
  );
}

export default About;
