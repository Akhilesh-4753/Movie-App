import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import superman from '../Images/superman.jpg';
import batman from '../Images/batman.webp'

const Carousels = () => {

  const objectArray = [
    {name:"Avengers", description:"The Avengers are a fictional team of superheroes in the Marvel Comics universe, created by writer Stan Lee and artist Jack Kirby. They first appeared in 'The Avengers' #1 in 1963.", images:"https://wallpapers.com/images/hd/4k-avengers-artwork-6mfog3k2t9nhwtcw.jpg"},
    {name:"Spiderman", description:"Spider-Man is a fictional superhero created by writer Stan Lee and artist Steve Ditko. He first appeared 'Amazing fantacy' #15 in 1962. The character is the alter ego of Peter Parker, a high school student who gains spider-like abilities after being bitten by a radioactive spider.", images:"https://wallpapers.com/images/featured/4k-spider-man-ph3fw6k03ddbmbmh.jpg"},
    {name:"Batman", description:"Batman is a fictional superhero created by artist Bob Kane and writer Bill Finger. He first appeared in 'Detective Comics' #27 in 1939. The character is the alter ego of Bruce Wayne, a wealthy industrialist and philanthropist who witnesses the murder of his parents as a child.", images:batman},
    {name:"Superman", description:"Superman is a fictional superhero created by writer Jerry Siegel and artist Joe Shuster. He first appeared in 'Action Comics' #1 in 1938 and is often regarded as the archetype of the superhero genre. Born as Kal-El on the planet Krypton.", images: superman}
  ];

  return (
    <Carousel fade>
    {objectArray.map((i,index)=>{
      return(
        <Carousel.Item key={index}>
        <img className='image' src={i.images} text="First slide" />
        <Carousel.Caption>
          <h3>{i.name}</h3>
          <p>{i.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })}
    </Carousel >
  )
}

export default Carousels

// This page didnt work because of we already created Banner.jsx file for home screen.

