const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productdescription = document.getElementById('product-description');
const productCategory = document.getElementById('product-category');
const submitButton = document.getElementById('submit-button');
const featuredText = document.getElementById('featured-text')

let validName = false;
let validPrice = false;
let validDescripton = false;
let validCategory = false;

productName.addEventListener('focusout', (event) => {
  let nameValue = event.target.value;
  const warningLabel = event.target.nextElementSibling.nextElementSibling
  if(nameValue.split('').length < 3) {
    warningLabel.classList.remove('display-none')
    validName = false;
    submitButton.classList.add('disabled')
  } else if (nameValue.split('').length > 3) {
    warningLabel.classList.add('display-none')
    validName = true;
    enableButton()
  }
})


productPrice.addEventListener('focusout', (event) => {
  let priceValue = event.target.valueAsNumber;
  const warningLabel = event.target.nextElementSibling.nextElementSibling
  if(isNaN(priceValue)) {
    warningLabel.classList.remove('display-none')
    submitButton.classList.add('disabled')
    validPrice = false;
  } else if(priceValue > .01) {
    warningLabel.classList.add('display-none')
    validPrice = true;
    enableButton()
  }
})

productdescription.addEventListener('focusout', (event) => {
  let descriptionValue = event.target.value;
  const warningLabel = event.target.nextElementSibling.nextElementSibling
  if(descriptionValue === "") {
    warningLabel.classList.remove('display-none')
    submitButton.classList.add('disabled')
    validDescripton = false;
  } else if(descriptionValue.split("").length > 20) {
    warningLabel.classList.add('display-none')
    validDescripton = true
    enableButton();
  }
})

productCategory.addEventListener('change', (event) => {
  let categoryValue = event.target.value;
  const warningLabel = event.target.nextElementSibling
  if(categoryValue === '') {
    warningLabel.classList.remove('display-none')
    validCategory = false
  } else {
    warningLabel.classList.add('display-none')
    validCategory = true;
    enableButton()
  }
})


function enableButton() {
  if( validName && validPrice && validDescripton && validCategory) {
    featuredText.nextElementSibling.classList.add('grey-text', 'text-darken-4')
    submitButton.classList.remove('disabled')
  }
}