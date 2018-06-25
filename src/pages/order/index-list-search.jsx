import React from 'react';

class ListSearch extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			orderNumber: ''
		}
	}
	onValueChange(e) {
		let name = e.target.name,
			value = e.target.value;
		this.setState({
			[name]: value
		})
	}
	onSearch() {
		this.props.onSearch(this.state.orderNumber);
	}
	onSearchKeywordKeyUp(e) {
		if(e.keyCode === 13) {
			this.onSearch();
		}
	}
	render() {
		return (
			<div className="row search-wrap">
				<div className="col-md-12">
					<div className="form-inline">
						<div className="form-group">
							<select className='form-control'>
								<option value="0">根据订单号查询</option>
							</select>
						</div>
						<div className="form-group">
							<input type="text" 
								className="form-control"
								placeholder='订单号'
								name='orderNumber'
								onChange={(e) => this.onValueChange(e)}
								onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}/>
						</div>
						<button className='btn btn-primary' onClick={(e) => this.onSearch()}>搜索</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ListSearch;