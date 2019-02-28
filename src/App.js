import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
import Navbar from 'react-bootstrap/Navbar';



export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=21&query=${query}&client_id=67148e3ee5523b5c4637cbba6d317bdd39d16055a114b1b4700bc85d43b5b9fd`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<>

  <Navbar className="main1-header" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' Shujaaz'}
    </Navbar.Brand>
  </Navbar>
</>;
				
				<div className="main-header">
					<div className="inner">
						{/* <h1 className="main-title">Shujaaz</h1> */}
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}