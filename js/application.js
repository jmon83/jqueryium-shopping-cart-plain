$(document).ready(function() {

  updateTotal();
  $('.qty, .price').on('keyup keypress blur change',
  function(e) {
    updateTotal();
  });
});

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

var plusQty;
var minusQty;
var addBtn = $('.cart-qty-plus');
var subBtn = $('.cart-qty-minus');

var plusQty = addBtn.click(function() {
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  $n.val(Number($n.val()) + 1);
  updateTotal();
});

var minusQty = subBtn.click(function() {
  var $n = $(this)
  .parent(".button-container")
  .find(".qty");
  var qtyVal = Number($n.val());
  if (qtyVal > 0) {
    $n.val(qtyVal - 1);
  }
  updateTotal();


});