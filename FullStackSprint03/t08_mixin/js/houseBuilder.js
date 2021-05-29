let houseBlueprint = {
    address: this.address,
    date: {
        toDateString: function() {
            return new Date();            
        }
    },
    description: this.description,
    owner: this.owner,
    size: this.size,
    getDaysToBuild: function(){
        return this.size / this._building_speed 
    }

}

function HouseBuilder(address, description, owner, size, roomCount, _building_speed) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this._building_speed = 0.5;
}

HouseBuilder.prototype = houseBlueprint;
