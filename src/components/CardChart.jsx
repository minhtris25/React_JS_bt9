function CardChart() {
  return (
    <div className="columns">
      <div className="column is-half">
        <div className="card">
          <div className="card-content has-text-centered">
            <div className="image">
              <img src="https://cdn1.smartprix.com/rx-iZIwUapU9-w420-h420/hp-15s-fr4000tu-lapt.jpg" alt="Laptop" />
            </div>
            <div className="icon is-large">
              <i className="fas fa-chart-pie" style={{ fontSize: '40px' }}></i>
            </div>
            <p className="title is-4 mt-2">$915</p>
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="card">
          <div className="card-content has-text-centered">
            <div className="image">
              <img src="https://tse3.mm.bing.net/th/id/OIP.FRhA8HhxuZd-tVTyrUmpDgHaGW?cb=iwp2&rs=1&pid=ImgDetMain" alt="Smartphone" />
            </div>
            <div className="icon is-large">
              <i className="fas fa-chart-line" style={{ fontSize: '40px' }}></i>
            </div>
            <p className="title is-4 mt-2">123%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardChart;