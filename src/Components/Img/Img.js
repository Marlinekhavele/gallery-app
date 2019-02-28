import React from 'react';

const Img = props =>
    <li> 
        
        <a href={props.link}>
            <img src={props.url} alt="beautiful"/>
        </a>
        <p>
            Photo by
            <a href={props.user}>{props.name}</a>
            <a href={props.link}> See on Unsplash</a>  
        </p>
        <div className="input-group col-lg-4 offset-lg-4">
        <div className="input-group-btn">
          <button className="btn btn-primary" onClick={props.handleClick}>Download</button>
        </div>
        </div>
        
        
        
    </li>;

export default Img;