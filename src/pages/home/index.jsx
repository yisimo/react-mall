import React from 'react';

import './index.css';

import PageTitle from 'components/page-title/index.jsx';

class Home extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title='首页' />
				<div className="row">
					<div className="col-md-12">body</div>
				</div>
			</div>
		);
	}
}

export default Home;