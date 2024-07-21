import {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return (

          <body class="d-flex h-100 text-center text-bg-dark" data-new-gr-c-s-check-loaded="14.1188.0" data-gr-ext-installed="">
            <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5" >
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" 
    >
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/15526369/pexels-photo-15526369/free-photo-of-black-convertible-car-on-a-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"data-bs-theme="dark">ABC Automobiles</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><Link className="nav-link" to="/vehicle-list">Vehicles</Link></button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
        </div>
      </div>
    </div>
  </div>






  <div className="row row-cols-1 row-cols-md-3 g-4"data-bs-theme="dark">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/22815218/pexels-photo-22815218/free-photo-of-black-old-fashioned-car.png?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/97458/pexels-photo-97458.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </div>
            </body>
        )
    }
}
export default About;
