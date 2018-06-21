import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
	// 获取商品列表
	getProductList(listParam) {
		let url = '',
		data = {};
		if(listParam.listType === 'list') {
			url = '/manage/product/list.do';
			data.pageNum = listParam.pageNum;
		} else if(listParam.listType === 'search') {
			url = '/manage/product/search.do';
			data.pageNum = listParam.pageNum;
			data[listParam.searchType] = listParam.keyword;
		}
		return _mm.request({
			url: url,
			type: 'post',
			data: data
		});
	}
	// 获取商品信息
	getProduct(productId) {
		return _mm.request({
			url: '/manage/product/detail.do',
			type: 'post',
			data: {
				productId: productId
			}
		})
	}
	//变更商品销售状态
	setProductStatus(productInfo) {
		return _mm.request({
			url: '/manage/product/set_sale_status.do',
			type: 'post',
			data: productInfo
		});
	}

	//获取品类
	getCotegoryList(parentCategoryId) {
		return _mm.request({
			url: '/manage/category/get_category.do',
			data: {
				categoryId: parentCategoryId || 0
			}
		});
	}

	// 检查保存商品的表单数据
	checkProduct(product) {
		let result = {
			status: true,
			msg: '验证通过'
		}
		// 商品名称
		if(typeof product.name !== 'string' || product.name.length === 0) {
			return {
				status: false,
				msg: '商品名称不能为空'
			}
		}
		// 商品描述
		if(typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
			return {
				status: false,
				msg: '商品描述不能为空'
			}
		}
		// 商品品类
		if(typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
			return {
				status: false,
				msg: '请选择商品类别'
			}
		}
		// 商品价格
		if(typeof product.price !== 'number' || !(product.price >= 0)) {
			return {
				status: false,
				msg: '请输入正确的商品价格'
			}
		}
		// 商品库存
		if(typeof product.stock !== 'number' || !(product.stock >= 0)) {
			return {
				status: false,
				msg: '请输入正确的商品库存'
			}
		}
		// 商品图片
		if(typeof product.subImages !== 'string' || product.subImages.length === 0) {
			return {
				status: false,
				msg: '请上传商品图片'
			}
		}
		// 商品详情
		if(typeof product.detail !== 'string' || product.detail.length === 0) {
			return {
				status: false,
				msg: '请输入商品详情'
			}
		}
		return result;
	}

	// 保存商品
	saveProduct(product) {
		return _mm.request({
			url: '/manage/product/save.do',
			type: 'post',
			data: product
		});
	}
}

export default Product;