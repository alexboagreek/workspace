const citySelect = document.querySelector('#city');
console.log(citySelect);
const cityChoices = new Choices(citySelect, {
  searchEnabled: false,
  itemSelectText: '',
});