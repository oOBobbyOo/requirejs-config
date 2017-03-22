define(['jquery'], function () {
	return {
		fixZero: function (num, length) {
			var str = "" + num;
			var len = str.length;
			var s = "";
			for (var i = length; i-- > len;) {
				s += "0";
			}
			return s + str;
		},
		formatDate: function (now) {
			var now = new Date(now * 1000);
			var year = now.getFullYear();
			var month = now.getMonth() + 1;
			var date = now.getDate();
			var hour = now.getHours();
			var minute = now.getMinutes();
			var second = now.getSeconds();
			return year + "/" + this.fixZero(month, 2) + "/" + this.fixZero(date, 2) + "/" + this.fixZero(hour, 2) + ":" + this.fixZero(minute, 2) + ":" + this.fixZero(second, 2);
		}
	}
});