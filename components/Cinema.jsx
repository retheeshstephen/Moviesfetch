import React, {  useState } from 'react'
import './comp.css'
import BgVideo from '../photo/video1.mp4'
import axios from 'axios'
import { Card } from 'react-bootstrap'




 
function Cinema() {
  const [movie,setMovie]=useState()
  const[name,setName]=useState('')

  const Search = () => {
    if (name || "") {
      axios.get(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${name}`)
        .then((res) => {
          if (res.data.Response === 'True') {
            // Valid movie data
            setMovie(res.data);
          } else {
            // Movie not found or other error
            alert('Please enter a valid movie name');
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
          alert('An error occurred while fetching movie data. Please try again later.');
        });
    } else {
      alert('Please enter a movie name');
    }
  };



  
    
  return (
    <div className='body'>

      <video src={BgVideo} autoPlay muted loop className='video-bg'/>
      <div className="nav">
      <h1 className='header'>Movies.com</h1>
      </div>
    
    <div className="container text-align-center" >
        <h3>Movie Name</h3>
        <input id='input' className='form-control' value={name} onChange={(e)=>(setName(e.target.value))} type="email" placeholder="Enter Movie Name" />
        <br />
      <button className='btn btn-primary' onClick={Search} >Search</button>

    </div>

    {
    movie?(
      <div className="content " id='pic'>
        <br />
        <div className="first d-flex text-align-center ">
<Card style={{ width: '18rem',border:"none" }} className='first'>
      <Card.Img variant="top" style={{height:'200px'}} src={movie?.Poster} />
      <Card.Body className='cardinside'>
        <Card.Title className='text-center'>{movie?.Title}</Card.Title>
        <Card.Text className='text-center'>
         {movie?.Plot}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <br />
    <div className="balance">

    <Card  className='second' >
      <Card.Body className='inside'>
        <Card.Title>Release Date</Card.Title>
        <Card.Text>
          {movie?.Released}
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card  className='secondi' >
      <Card.Body  className='inside'>
        <Card.Title>Actors</Card.Title>
        <Card.Text>
          {movie?.Actors}
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card   className='second' >
      <Card.Body  className='inside'>
        <Card.Title>IMDB Rating</Card.Title>
        <Card.Text>
          {movie?.imdbRating}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
      </div>
      
      
    ):(
      <>No Data Found</>
    
    )
}
    </div>

      
  )
}
   
  
export default Cinema