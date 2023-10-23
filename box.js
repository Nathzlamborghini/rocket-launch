AFRAME.registerComponent('move-box', {
    schema: {
        moveX: {type: "number", default: 1},
        moveY: {type: "number", default: 1},
        rotateX: {type: "number", default: 1},
        rotateY: {type: "number", default: 1},
        rotateZ: {type: "number", default: 1},

    },

    tick: function() {
        this.data.rotateX = this.data.rotateX + 10
        this.data.rotateY = this.data.rotateY + 10
        this.data.rotateZ = this.data.rotateZ + 10
        this.data.moveX = this.data.moveX + 0.01
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.data.moveY = this.data.moveY + 0.01
        var pos = this.el.getAttribute("position")
        pos.y = this.data.moveY
        var rotate = this.el.getAttribute("rotation")
        rotate.x = this.data.rotateX
        rotate.y = this.data.rotateY
        rotate.z = this.data.rotateZ
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
        this.el.setAttribute("rotation", {x: rotate.x, y: rotate.y, z: rotate.z})
    }
})
AFRAME.registerComponent('move-box-on-click', {
    schema: {
        moveX: {type: "number", default: 0},
    },

    tick: function() {
        window.addEventListener("click", (e)=>{
            this.data.moveX = this.data.moveX + 0.01
        })
        var pos = this.el.getAttribute("position")
        pos.x = pos.x+this.data.moveX
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
    }
})