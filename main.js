let slider = document.querySelector('#range');
let title = document.querySelector('.text');
slider.value = 5;

slider.addEventListener('input', function() {
  //var newValue = this.value;
  //title.style.fontVariationSettings = `"wght" ${this.value}`;
  //widthAxis.textContent = this.value;
  document.documentElement.style.setProperty('--wght', this.value);
});


