const section22 = {
  multi: 'Multi-Post Stories',
  multiDesktop: 'Keeping track of hundreds  of components website',
  buttonArray: ['html', 'bootstrap', 'Ruby on Rail'],
  lorem:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  loremDesktop:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image10: 'images/Portfolio.png',
  seeSource: 'images/Enable.png',
  seeGithub: 'images/seeSource.png',
  image10Desktop: 'images/Portfolio1.png',
};
function mobilePopup() {
}
function desktopPopup() {
}
const section2p = document.querySelector('.section2p');
const see1 = document.querySelector('.see1');
const seeProject = document.querySelectorAll('.project');
const desktopPop = document.querySelector('.desktop-popup');
const see2 = document.querySelector('.see2');
const myProject = document.querySelector('.my-project');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
see1.addEventListener('click', () => {
  section2p.style.display = 'block';
  section1.style.display = 'block';
  section1.style.marginTop = '-698px';
  section1.style.height = '730px';
  section1.style.opacity = '1';
  section1.style.opacity = '0.7';
  section2.style.opacity = '0';
  section3.style.opacity = '0';
  section4.style.opacity = '0';
  mobilePopup();
});
seeProject.forEach((n) => n.addEventListener('click', (e) => {
  e.preventDefault();
  section2p.style.display = 'block';
  section1.style.display = 'block';
  section1.style.marginTop = '-698px';
  section1.style.height = '730px';
  section1.style.opacity = '1';
  section1.style.opacity = '0.7';
  section2.style.opacity = '0';
  section3.style.opacity = '0';
  section4.style.opacity = '0';
  mobilePopup();
}));
see2.addEventListener('click', () => {
  section1.style.marginTop = '-620px';
  section1.style.height = '650px';
  section1.style.opacity = '0.9';
  section2.style.opacity = '0';
  section3.style.opacity = '0';
  section4.style.opacity = '0';
  desktopPop.style.display = 'block';
  desktopPop.style.marginBottom = '-40px';
  desktopPopup();
});
myProject.addEventListener('click', (e) => {
  e.preventDefault();
  section1.style.marginTop = '-620px';
  section2.style.opacity = '0';
  section3.style.opacity = '0';
  section4.style.opacity = '0';
  desktopPop.style.display = 'block';
  desktopPop.style.marginBottom = '-40px';
  desktopPopup();
});
mobilePopup(); {
  const detailPopup = `<div class="multi-p">
        <h2 class="multi-postp">${section22.multi}</h2>
        <p class="close1">x</p>
      </div>
      <div class="buttonsp">
        <ul>
          <li>
            <button class="btnp">${section22.buttonArray[0]}</button></li>
          <li><button class="btnp">${section22.buttonArray[1]}</button></li>
          <li><button class="btnp">${section22.buttonArray[2]}</button></li>
        </ul>
      </div>
      <div class="image-pop">
        <img src=${section22.image10} alt="number10" id="image-10">
      </div>
      <div class="lorem-pop">
        <h3 class="lorem">${section22.lorem}</h3>
      </div>
      <div class="seeButtons">
        <img src=${section22.seeSource} alt="Source" id="seeSource">
        <img src=${section22.seeGithub} alt="Github" id="seeGithub">
      </div>`;
  const section = document.querySelector('.section2p');
  const classDetail = document.createElement('div');
  classDetail.classList.add('detail');
  classDetail.insertAdjacentHTML('beforeend', detailPopup);
  section.appendChild(classDetail);
  document.querySelector('.close1').addEventListener('click', () => {
    section2.style.opacity = '1';
    section3.style.opacity = '1';
    section4.style.opacity = '1';
    section2p.style.display = 'none';
    section1.style.marginTop = '0';
    section2p.classList.remove('active');
  });
}
desktopPopup(); {
  const desktopDetailSection = `<div class="multi-p">
        <h2 class="multi-postp-desktop">${section22.multiDesktop}</h2>
        <p class="close2">&times;</p>
      </div>
      <div class="buttonsp">
        <ul>
          <li>
            <button class="btnp-desktop">${section22.buttonArray[0]}</button></li>
          <li><button class="btnp-desktop">${section22.buttonArray[1]}</button></li>
          <li><button class="btnp-desktop">${section22.buttonArray[2]}</button></li>
        </ul>
      </div>
      <div class="desktop-popup-bottom">
        <div class="desktop-top">
          <div class="image-pop">
            <img src=${section22.image10Desktop} alt="number10" id="image-10-desktop">
          </div>
        </div>
        <div class="desktop-bottom">
          <div class="lorem-pop">
            <h3 class="lorem-desktop">${section22.loremDesktop}</h3>
          </div>
          <div class="seeButtons">
            <img src=${section22.seeSource} alt="Source" id="seeSource-desktop">
            <img src=${section22.seeGithub} alt="Github" id="seeGithub-desktop">
          </div>
        </div>   
      </div>`;
  const desktopDetailpopup = document.createElement('div');
  desktopDetailpopup.classList.add('detail');
  desktopDetailpopup.insertAdjacentHTML('beforeend', desktopDetailSection);
  const desktopSection = document.querySelector('.desktop-popup');
  desktopSection.appendChild(desktopDetailpopup);
  document.querySelector('.close2').addEventListener('click', () => {
    section2.style.opacity = '1';
    section3.style.opacity = '1';
    section4.style.opacity = '1';
    section1.style.marginTop = '0';
    desktopPop.style.display = 'none';
  });
}
