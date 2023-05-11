export default function Post(){
    return (
        <div className="post">
        <div className="image">
          <img src="https://www.ikea.com/us/en/images/products/enrum-lantern-for-candle-indoor-outdoor-black__1095514_pe863921_s5.jpg?f=s"></img>
        </div> 
        <div className="text">
          <h2>Conservation of Energy</h2>
          <p className="info">
            <a className="author">Kaku Kyle</a>
            <time>2023-05-07 4:50</time>
          </p>
          <p className="summary">
            Lanterns always enhance a home’s decor – and when it gets dark outside, their glow creates a cozy atmosphere. 
             The home feels warm, guests feel welcome and a romantic touch is added to every moment.
          </p>
        </div>        
      </div>
    );
}