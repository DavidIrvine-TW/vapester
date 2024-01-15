document.addEventListener('DOMContentLoaded', function () {
    // info 
    const variantSelect = document.getElementById('variant-id');
    const compareAtPriceElement = document.querySelector('.compare-at-price');
    const actualPriceElement = document.querySelector('.actual-price');
    const variantTitleElement = document.querySelector('.variant-title');

    // quantity
    document.querySelector('.decrement').addEventListener('click', decrement);
    document.querySelector('.increment').addEventListener('click', increment);
    let counterValue = 1;
 
    function increment() {
      counterValue++;
      updateCounter();
    }

    function decrement() {
      if(counterValue === 1){
        return
      } else {
        counterValue--;
        updateCounter();
      }  
    }
    function updateCounter() {
      document.querySelector('.quantity-display').textContent = counterValue;
      document.querySelector('.quantity-input-value').value = counterValue;
      document.querySelector('.selected-amount').textContent = counterValue;
  }

    // Set initial values based on the first option
    const defaultOption = variantSelect.options[0];
    const defaultCompareAtPrice = defaultOption.getAttribute('data-compare-at-price');
    const defaultPrice = defaultOption.getAttribute('data-price');
    const defaultTitle = defaultOption.getAttribute('data-title');

    // Display default compare_at_price if available
    if (defaultCompareAtPrice) {
      compareAtPriceElement.textContent = defaultCompareAtPrice;
      compareAtPriceElement.style.display = 'block';
    } else {
      compareAtPriceElement.style.display = 'none';
    }

    // Display the default actual price and variant title
    actualPriceElement.textContent = defaultPrice;
    variantTitleElement.textContent = defaultTitle;

    variantSelect.addEventListener('change', function () {
      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const compareAtPrice = selectedOption.getAttribute('data-compare-at-price');
      const price = selectedOption.getAttribute('data-price');
      const title = selectedOption.getAttribute('data-title');

      // Display compare_at_price if available
      if (compareAtPrice) {
        compareAtPriceElement.textContent = compareAtPrice;
        compareAtPriceElement.style.display = 'block';
      } else {
        compareAtPriceElement.style.display = 'none';
      }

      // Display the actual price and variant title
      actualPriceElement.textContent = price;
      variantTitleElement.textContent = title;
    });
  });