app.controller('SpaceShipController', ['SpaceShipService', function (SpaceShipService) {
    console.log('SpaceShipController has been loaded');
    const self = this;

    self.getShips = function(){
        SpaceShipService.getShips().then(function(){
            self.ships = SpaceShipService.ships.list;
            console.log(self.ships);
        });
    }
    self.addShip = function(ship) {
        SpaceShipService.addShip(ship).then(function(){
            self.getShips();
        });
    }
    self.removeShip = function (ship) {
        if(ship.current_crew > 0) {
            alert(`You can't delete a ship with crew on board!`);
        } else {
            SpaceShipService.deleteShip(ship.id).then(function(){
                self.getShips();
            })
        }
    }

    self.getShips();
}]);