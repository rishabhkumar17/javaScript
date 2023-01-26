const menuClicked = (currEle) => {
  // const menuItems = document.getElementsByClassName('menu-item');
  document.querySelector('.active').classList.remove('active');
  // for (let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].classList.remove('active');
  // }
  currEle.classList.add('active');
};

const subjects = document.querySelector('.subjects');
subjects;
{
  /* <ul class=​"subjects">​…​</ul>​<li>​…​</li>​<li class=​"fav-subject">​…​</li>​<li>​…​</li>​</ul>​ */
}
subjects.firstElementChild;
{
  /* <li>​…​</li>​::marker​"Maths"</li>​ */
}
subjects.lastElementChild;
{
  /* <li>​…​</li>​::marker​"English"</li>​ */
}
const favSubject = document.querySelector('.fav-subject');
favSubject;
{
  /* <li class=​"fav-subject">​…​</li>​::marker​"Science"</li>​ */
}
favSubject.previousElementSibling;
{
  /* <li>​…​</li>​::marker​"Maths"</li>​ */
}
favSubject.nextElementSibling;
{
  /* <li>​…​</li>​::marker​"English"</li>​ */
}
favSubject.parentElement;
{
  /* <ul class=​"subjects">​<li>​…​</li>​<li class=​"fav-subject">​…​</li>​<li>​…​</li>​</ul>​ */
}
favSubject.remove();
