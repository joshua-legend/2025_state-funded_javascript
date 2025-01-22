const calculator = {
  result: 0,
  history: [],
  add: function (x) {
    this.result = this.result + x;
    this.history.push(this.result);
  },
  minus: function (x) {
    this.result = this.result - x;
    this.history.push(this.result);
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.history.push(this.result);
  },
  divide: function (x) {
    if (x == 0) console.log("에러");
    else {
      this.result = this.result / x;
      this.history.push(this.result);
    }
  },
  square: function (x) {
    this.result = this.result ** x;
    this.history.push(this.result);
  },
  clear: function () {
    this.result = 0;
  },
  showHistory: function () {
    console.log(this.history);
  },
};
