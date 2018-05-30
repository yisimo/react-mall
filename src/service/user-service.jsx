import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User{
	// 用户登录
	login(userInfo) {
		return _mm.request({
			url: '/manage/user/login.do',
			type: 'post',
			data: userInfo
		})
	}
	// 检查登录的接口数据是否合法
	checkLoginInfo(loginInfo) {
		let username = $.trim(loginInfo.username);
		let password = $.trim(loginInfo.password);
		if(typeof username !== 'string' || username.length === 0) {
			return {
				status: false,
				msg: '用户名不能为空！'
			};
		}
		if(typeof password !== 'string' || password.length === 0) {
			return {
				status: false,
				msg: '密码不能为空！'
			};
		}
		return {
			status: true,
			msg: '验证通过！'
		}
	}
	// 退出登录
	logout() {
		return _mm.request({
			url: '/user/logout.do',
			type: 'post'
		})
	}

	getUserList(pageNum) {
		return _mm.request({
			url: '/manage/user/list.do',
			type: 'post',
			data: {
				pageNum: pageNum
			}
		})
	}
}

export default User;