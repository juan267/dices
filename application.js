// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


    Controller = function(model, view) {
      this.model = model,
      this.view = view
      this.button_add_listener()
      this.button_roll_listener()
    };

    Controller.prototype = {

      button_add_listener: function() {
        $('#roller button.add').on('click', this.add_dice.bind(this))
      },

      button_roll_listener: function() {
        $('#roller button.roll').on('click', this.roll_dices.bind(this))
      },

      add_dice: function(){
        this.view.render_dice()
      },
      roll_dices: function() {
        that = this
        $('.die').each(function(index, die) {
          value = that.model.change_value;
          that.view.render_value(die,value)
        })
      }
    };

    Die = function() { //model
    };

    Die.prototype = {
      change_value: function(){
        return Math.floor((Math.random()*6)+1)
      }
    };

    View = function() {
    };

    View.prototype = {
      render_dice: function() {
        $('.dice').append('<div class="die">0</div>')
      },
      render_value: function(dice,value) {
        $(dice).text(value)
      }
    };

    var model = new Die
    var view = new View
    var controller = new Controller(model, view)

    // i know that this solutions adds a lot of lines and code but i hink its the most OO oriented way that i can do it , i would be happy to get suggestions on how to refactor this code and still keep it the most OO oriented. For example i dont know if it is a good idea to create controctor functions for the view and model as they dont have any arguments, and insted i might be better to let them be just objects with functions.




