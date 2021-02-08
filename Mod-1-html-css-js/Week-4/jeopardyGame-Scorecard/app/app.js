class Team {
    constructor(name, $el) { //class template for score board
        this.name = name; // name of the team in score board
        this.score = 0;
        this.$el = $el; // the element that received the click event
        //this.increaseBy=100;
    }
    increaseScore(pointValue) { //method will increase points by 100 
            this.score += pointValue; //increase
            this.$el.children().eq(0).text(this.score); // first element of child div -0- is the first
        } // //this will now allow us to grab the 1st element and input the score as the text
        //what is eq? it stands for equals and selects children in arry
        // the first child is the h1
    decreaseScore(pointValue) { //decrease method 
        this.score -= pointValue;
        this.$el.children().eq(0).text(this.score);
    }
    setup() { // this method will create click event 
        this.$el.children().eq(1).on('click', () => { //select your 2nd child because thats your btn
            this.increaseScore(100) //when you click // we use increaseBy and increase by eventTarget
        })
        this.$el.children().eq(2).on('click', () => { //
            this.decreaseScore(100) //increaseBy instead of 100 we can change event by increaseBy.we use increaseBy and increase by eventTarget
        })
        return this; // call these methods when you instantiate the class
    }
}


$(() => {
    const $tiles = $('.tile').on('click', (event) => {
        $(event.currentTarget).toggleClass('active');
        // const currentTileValue = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));
        //   team1.increaseBy =currentTileValue; // it will add eventtarget to each team
        //   team2.increaseBy =currentTileValue;
        //   team3.increaseBy =currentTileValue;

    });
    const pointValue = 100; // point value will go and down
    const team1 = new Team('team1', $('#team1')).setup(); //name, and score arguments
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();

    $(function() { //this function will drag the scoreboard anywhere in webpage
        $('#scoreboard').draggable();
    });


    $(function() { // this function keeps dragged box in same place after you refresh the page
        var sPositions = localStorage.positions || "{}",
            positions = JSON.parse(sPositions);
        $.each(positions, function(id, pos) {
            $("#" + id).css(pos)
        })
        $("#scoreboard").draggable({
            containment: "#containment-wrapper",
            scroll: false,
            stop: function(event, ui) {
                positions[this.id] = ui.position
                localStorage.positions = JSON.stringify(positions) //Convert a JavaScript object into a string with
            }
        });
    });




})


// const currentTileValue = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));