import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ProductList from 'pages/product/index/index.jsx';
import ProductSave from 'pages/product/index/save.jsx';
import ProductDetail from 'pages/product/index/detail.jsx';

class ProductRouter extends React.Component{
	render() {
		return (
			<Switch>
				<Route path='/product/index' component={ProductList} />
				<Route path='/product/save/:pid?' component={ProductSave} />
				<Route path='/product/detail/:pid' component={ProductDetail} />
				<Redirect exact form='/product' to='/product/index' />
			</Switch>
		);
	}
}

export default ProductRouter;