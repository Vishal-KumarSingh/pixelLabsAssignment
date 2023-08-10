import "./App.css";
import Header from "./component/Header";


function App() {
 
  return (
    <div className="App">
      <Header />

      <main>
        <div className="scrolling-image-container">
          <div className="scrolling-image"  id="scrollslide" onClick={function(){
            
              document.getElementById('scrollslide').style.backgroundPositionX = "10000000000%";  
            console.log("interval called");
              // setInterval(() => {
              //     document.getElementById('scrollslide').style.backgroundPositionX = "0";  
              // }, 2000);
          }}/>
         
        </div>
        <div 
            className="walking-man"
          />
        <div className="page">
        <h3 className="securetext secure">
            SECURE, RELIABLE, PRECISE
        </h3>
        <h1 className="securetext">
           <b className="algorand"> ALGORAND ORACLE</b>
          </h1>
        <p className="securetext p-1 folksfeed">
          <span className="font-bold"><b>FOLKS FEED ORACLE (FFO) </b></span>IS AN
          ORACLE DEVELOPED ON THE ALGORAND 
          <br className="hidden lg:block" />
          BLOCKCHAIN THAT PROVIDES REAL-WORLD DATA TO WEB3 APPLICATIONS
        </p> 
        <div className="d-flex flexbuttons justify-content-around mt-4" >
          <div className="d-flex justify-content-around">
          <button className="mybtn bg-black">
            EXPLORE FEEDS
          </button>
          <button className="mybtn bg-brown">
            ADMIN OPERATIONS
          </button>
          </div>
        </div>
        <div className="bottom-menu-bar mobile">
          <div>
            <svg
              width={50}
              height={50}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={50} height={50} fill="black" />
              <rect x={22} y={10} width={6} height={6} fill="white" />
              <rect x={22} y={22} width={6} height={6} fill="white" />
              <rect x={22} y={34} width={6} height={6} fill="white" />
            </svg>
          </div>
        </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
