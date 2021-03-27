let canvas = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.game = setInterval(game, 10);
    },
    stop : function() {
        clearInterval(this.game);
    }
}
