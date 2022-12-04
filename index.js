const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeShow();
  removeBorder();
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  const tabItem = document.querySelector(`#${this.id}`);
  tabContentItem.classList.add('show');
  tabItem.classList.add('border');
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('border');
  })
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
})
