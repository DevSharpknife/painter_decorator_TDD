const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paintcan = require('../paintcan.js')

describe('Decorator', function() {
    let decorator;
    beforeEach(function() {
        decorator = new Decorator();
        paintcan = new Paintcan(40);
    })

    it('should start with no paint', function() {
        const actual = decorator.paintStockVolume;
        assert.strictEqual(actual, 0);
    })

    it('should be able to increase paint stock', function() {
        decorator.addPaintToStock(paintcan);
        const actual = decorator.paintStockVolume;
        assert.strictEqual(actual, 40);
    });

    it(' should be able to check if it can paint a full room', function() {
        const room = new Room(40);
        decorator.addPaintToStock(paintcan);
        console.log(decorator.paintStockVolume)
        const actual = decorator.canPaintFullRoom(room);
        assert.strictEqual(actual, true);
    });
    // it ('should be able to paint room', )
})