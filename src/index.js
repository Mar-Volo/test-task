const questionsTextItems = document.querySelectorAll('.questions__text');
const questionsDiscriptionItems = document.querySelectorAll('.questions__discription');

questionsDiscriptionItems.forEach(discriptionItem => {
  discriptionItem.style.maxHeight = '0';
  discriptionItem.style.overflow = 'hidden';
});

let visibleIndex = null;

questionsTextItems.forEach((textItem, itemIndex) => {
  textItem.addEventListener('click', () => {
    if (visibleIndex !== null) {
      questionsDiscriptionItems[visibleIndex].style.maxHeight = '0';
      questionsDiscriptionItems[visibleIndex].style.borderTop = 'none';
    }
    if (visibleIndex !== itemIndex) {
      questionsDiscriptionItems[itemIndex].style.maxHeight = questionsDiscriptionItems[itemIndex].scrollHeight + 'px';
      questionsDiscriptionItems[itemIndex].style.borderTop = 'solid 1px #ccc';
      visibleIndex = itemIndex;
    } else {
      visibleIndex = null;
    }
    console.log(visibleIndex);
  });
});

