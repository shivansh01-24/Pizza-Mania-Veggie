document.getElementById('distance').addEventListener('input', function() {
    var distance = this.value;
    var cost = distance * 3;
    var ruppes= cost;
    document.getElementById('deliveryCost').innerHTML = ruppes;
});
