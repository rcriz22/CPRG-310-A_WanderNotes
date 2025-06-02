import heroimage from '../assets/heroimage.png'

function Home() {
    return (
      <>
      <div className='homediv'>
        
        <div className="hero"> 
          <img src={heroimage} alt="Sunset at Beach"/>
          <h1>Tasting the world, one journey at a time.</h1>
        </div>

        <h1 className='home'> More content will be up soon. </h1>
      
      </div>
      </>
    ) 
}

export default Home;
