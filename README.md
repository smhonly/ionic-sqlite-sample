# ionic-sqlite-sample
sample for ionic sqlite crud

1.npm install -g cordova ionic
2.ionic start myApp tabs
3.cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage
4.bower install pouchdb
5.add <script src="lib/pouchdb/dist/pouchdb.min.js"></script> to index.html
6.modify controllers.js as following:
   .controller('DashCtrl', function ($scope) {
    var _db = new PouchDB('birthday', {adapter: 'websql'});
    var birthday = {
      _id:'111',
      a: "aaa",
      b: "bbb",
      date:new Date()
    }
    _db.post(birthday);
    _db.allDocs({
      include_docs: true
    }).then(function (res) {
      console.log(res);
      _db.remove({_id:'111'});
    });
  })
7.run ionic serve, test _db operation in chrome. Crud is ok.