import React from 'react';

const About = ({ breedFacts }) => {
  return (
    <div>
      <h1>Meet The Cats~!</h1>
      <ul>
        {breedFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
