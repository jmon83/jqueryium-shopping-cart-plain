$(document).ready(function() {

  updateTotal();
  $('.qty, .price').on('keyup keypress blur change',
  function(e) {
    updateTotal();
  });});


function updateTotal() {
  var sum = 0.0;
  $('#myTable > tbody > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = (qty * price);
    sum += amount;
    $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
}

$(document).on('click', '#addItem', function() {
  addItem($('#name').val(), $('#cost').val());
});

var addItem = function(name,cost) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $('#theStuff').prepend('<tr>\
  <td>\
    <div class = "product-img">\
      <div class = "img-product">\
        <img src = "https://picsum.photos/50">\
      </div>\
    </div>\
  </td>\
  <td>\
    <p>' + name + '</p>\
  </td>\
  <td>\
    <div class = "button-container">\
      <button class = "cart-qty-plus" value = "+">+</button>\
      <input type = "text" name = "qty" min = "0" class = "qty form-control" value = "0"/>\
      <button class = "cart-qty-minus" type = "button" value = "-">-</button>\
    </div>\
  </td>\
  <td>\
    <input type = "text" value = "' + cost +'" class = "price form-control" disabled>\
  </td>\
  <td align = "right"> $ <span id = "amount" class = "amount"> 0 </span> </td>\
</tr>')
};

var addBtn = $('.cart-qty-plus');
var subBtn = $('.cart-qty-minus');

$(document).on('click', '.cart-qty-plus', function() {
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  $n.val(Number($n.val()) + 1);
  updateTotal();
});

$(document).on("click", '.cart-qty-minus', function() {
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  var qtyVal = Number($n.val());
  if (qtyVal > 0) {
    $n.val(qtyVal - 1);
  }
  updateTotal();
});