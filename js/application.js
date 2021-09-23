$(document).ready(function(){

    var totalPrice = 0;

    var sum = function() {
        var prices = $('#itemPrice');
        var itemQty = $('#itemQty');

        totalPrice = 0;

        for (i=0; i<itemQty.length, i++) {
            var price = Number($(prices[i]).text().replace(/\$/,""));
            var subPrice = (Number($(itemQty[i]).val())) * price;
            if (subPrice !=0) {
                $($('.itemSub')[i]).text("$" + subPrice);
            } else {
                $($('.itemSub')[i]).text("N/A");
            }
            totalPrice += subPrice;
        }
        return totalPrice;
    }
    var addItem = function(name, cost) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        $('#item-list').prepend('<div class="row item"> \
        <div class="item-name col-xs-3"> \ '
        +  name + '\
        </div> \
        <div class="item-price col-xs-3"> \
          $' + cost + '.00 \
        </div> \
        <div class="item-qty col-xs-3"> \
          <label>QTY</label> \
          <input class="quantity"> \
        </div> \
        <div class="col-xs-1"> \
          <button class="remove"> \
            Remove \
          </button> \
        </div> \
        <div class="item-subtotal col-xs-2"> \
        $--.-- \
        </div> \
      </div>');
    }

})

