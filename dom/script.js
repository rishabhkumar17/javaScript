const menuClicked = (currEle) => {
  const menuItems = document.getElementsByClassName('menu-item');

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }
  currEle.classList.add('active');
};
