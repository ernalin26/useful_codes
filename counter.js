
// Before Body Tag
// Add counter class on the element

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js'></script>
<script src='https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js'></script>
<script>
$('.counter').counterUp({
 delay: 10,
 time: 1000
});
$('.counter').addClass('animated fadeIn');
</script>
