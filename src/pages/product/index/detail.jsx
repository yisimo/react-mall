import React from 'react';
import PageTitle from 'components/page-title/index.jsx';
import CategorySelector from './category-selector.jsx';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

import './save.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductDetail extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.pid,
			name: '',
			subtitle: '',
			categoryId: 0, 
			parentCategoryId: 0,
			price: '',
			stock: '',
			subImages: [],
			detail: '',
			status: 1
		};
	}
	componentDidMount() {
		this.loadProduct();
	}
	// 加载商品信息
	loadProduct() {
		if(this.state.id) {
			_product.getProduct(this.state.id).then((res) => {
				let images = res.subImages.split(',');
				res.subImages = images.map((imgUri) => {
					return {
						uri: imgUri,
						url: res.imageHost + imgUri
					}
				});
				res.defaultDetail = res.detail;
				this.setState(res);
			}, (errMsg) => {
				_mm.errorTips(errMsg);
			})
		}
	}
	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title='添加商品' />
				<div className="form-horizontal">
					<div className="form-group">
						<label className="col-md-2 control-label">商品名称</label>
						<div className="col-md-5">
							<p className="from-control-static">{this.state.name}</p>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品描述</label>
						<div className="col-md-5">
							<p className="from-control-static">{this.state.subtitle}</p>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">所属分类</label>
						<CategorySelector 
							readOnly
							categoryId={this.state.categoryId}
							parentCategoryId={this.state.parentCategoryId}/>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">价格</label>
						<div className="col-md-3">
							<div className="input-group">
								<input type="number" className="form-control" placeholder="请输入商品价格" 
									readOnly
									value={this.state.price}/>
								<span className="input-group-addon">元</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">库存</label>
						<div className="col-md-3">
							<div className="input-group">
								<input type="number" className="form-control" placeholder="请输入商品库存" 
									readOnly
									value={this.state.stock}/>
								<span className="input-group-addon">件</span>
							</div>
						</div>
					</div>
					<div className="form-group"> 
						<label className="col-md-2 control-label">商品图片</label>
						<div className="col-md-10">
							{this.state.subImages.length > 0 
								? (this.state.subImages.map((image, index) => 
									<div className='img-con' key={index}>
										<img className='img' src={image.url}/>
									</div>))
								: (<div>暂无图片</div>)
							}
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">详情</label>
						<div className="col-md-10">
							<div dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;