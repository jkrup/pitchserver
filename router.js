Router.route('save', {
  path: '/save',
  where: 'server',
  action: function () {
    var datum = {
      'w' : this.request.body.w,
      'x' : this.request.body.x,
      'y' : this.request.body.y,
      'z' : this.request.body.z
    };

    OculusData.insert(datum);

    this.response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    this.response.end(JSON.stringify(resp));
  }
});
