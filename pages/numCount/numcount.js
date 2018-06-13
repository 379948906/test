// pages/numCount/numcount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    IP: 'http://192.168.42.38:3333',
    IP1:'http://192.168.42.38:3001',
    list: [],
  },
  //点击－
  numDec: function () {
    this.setData({
      count: this.data.count - 1,
    })
  },
  //点击+
  numAdd: function () {
    this.setData({
      count: this.data.count + 1,
    })
  },
  //获取歌单
  getSong:function(){
    wx.navigateTo({
      url: '../song/song'
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: this.data.IP + '/songList/find', //仅为示例，并非真实的接口地址
      // method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          list:res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})