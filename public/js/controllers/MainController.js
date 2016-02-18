app.controller('MainController',
    ['$scope',
        function ($scope) {
            $scope.title = 'top sellers in books';
            $scope.promo = 'Promo';
            $scope.products = [
                {
                    name: 'The Book of Trees',
                    price: 19,
                    pubdate: new Date('2014', '03', '08'),
                    cover: 'img/index.jpeg'
                },
                {
                    name: 'Program or be Programmed',
                    price: 8,
                    pubdate: new Date('2013', '08', '01'),
                    cover: 'img/index.jpeg'
                }
            ]
        }
    ]
);