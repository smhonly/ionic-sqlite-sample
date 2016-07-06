# ionic-sqlite-sample
sample for ionic sqlite crud

1.npm install -g cordova ionic<br>
2.ionic start myApp tabs<br>
3.cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage<br>
4.bower install pouchdb<br>
5.add <script src="lib/pouchdb/dist/pouchdb.min.js"></script> to index.html<br>
6.modify controllers.js as following:<br>
   .controller('DashCtrl', function ($scope) {<br>
    var _db = new PouchDB('birthday', {adapter: 'websql'});<br>
    var birthday = {<br>
      _id:'111',<br>
      a: "aaa",<br>
      b: "bbb",<br>
      date:new Date()<br>
    }<br>
    _db.post(birthday);<br>
    _db.allDocs({<br>
      include_docs: true<br>
    }).then(function (res) {<br>
      console.log(res);<br><br>
      _db.remove({_id:'111'});<br>
    });<br>
  })<br>
7.run ionic serve, test _db operation in chrome. Crud is ok.<br>
