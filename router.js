Router.route('get', {
  path: '/get',
  where: 'server',
  action: function () {
    this.response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    var resp = OculusData.find({},{sort: {timestamp: -1}, fields: {_id: 0}, limit: 1 }).fetch()[0];
    this.response.end(JSON.stringify(resp));
  }
})
Router.route('save', {
  path: '/save',
  where: 'server',
  action: function () {
    var datum = {
      'w' : this.request.body.w,
      'x' : this.request.body.x,
      'y' : this.request.body.y,
      'z' : this.request.body.z,
      'timestamp' : new Date()
    };

    OculusData.insert(datum);

    this.response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    this.response.end(JSON.stringify(datum));
  }
});
