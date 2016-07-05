angular.module('starter.controllers', [])

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

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
