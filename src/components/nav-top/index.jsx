import React from 'react';

import { Link } from 'react-router-dom';

class NavTop extends React.Component{
	constructor(props) {
		super(props);
	}
	// 退出登录
	logout() {

	}
	render() {
		return (
			<div className="navbar navbar-default top-navbar" role="navigation">
	            <div className="navbar-header">
	                <Link className="navbar-brand" to="/"><b>REACT</b>MALL</Link>
	            </div>

	            <ul className="nav navbar-top-links navbar-right">
	                <li className="dropdown">
	                    <a className="dropdown-toggle" href="javascript:;">
	                        <i className="fa fa-user fa-fw"></i>
	                        <span>欢迎你，Vince</span>
	                        <i className="fa fa-caret-down"></i>
	                    </a>
	                    <ul className="dropdown-menu dropdown-user">
	                        <li>
	                        	<a href="#" onClick={() => {this.logout()}}>
	                        		<i className="fa fa-sign-out fa-fw"></i> 
	                        		退出登录
	                        	</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
	        </div>
		);
	}
}

export default NavTop;