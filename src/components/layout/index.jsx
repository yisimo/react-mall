import React from 'react';

import NavTop from 'components/nav-top/index.jsx';
import NavSide from 'components/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div id='wrapper'>
				<NavTop />
				<NavSide />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;