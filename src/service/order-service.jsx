import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order{
	getOrderList(listParam) {
		let url = '',
			data = {};
		if(listParam.listType === 'list') {
			url = '/manage/order/list.do';
			data.pageNum = listParam.pageNum;
		} else if(listParam.listType === 'search') {
			url = '/manage/order/search.do';
			data.pageNum = listParam.pageNum;
			data.orderNo = listParam.orderNo;
		}
		return _mm.request({
			url: url,
			type: 'post',
			data: data
		})
	}
	
	getOrderDetail(orderNo) {
		return _mm.request({
			url: '/manage/order/detail.do',
			type: 'post',
			data: {
				orderNo: orderNo
			}
		})
	}

	sendGoods(orderNo) {
		return _mm.request({
			url: '/manage/order/send_goods.do',
			typr: 'post',
			data: {
				orderNo: orderNo
			}
		})
	}
}

export default Order;