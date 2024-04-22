// Scroll Header Fixed
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 200) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

  /* After Login Header UI */
document.querySelector('.btn-member-primary').addEventListener('click', function() {
  // 'btn-member-primary' 클래스를 가진 버튼이 클릭되었을 때 실행되는 함수

  // 변수 선언
  let memberLoginOverlay = document.querySelector('.member-login-overlay');
  let userAlarm = document.querySelector('.user-alarm');
  let loginRegisterButtons = document.querySelector('.login-register-buttons');
  let body = document.body;
  
  // 요소 조작
  memberLoginOverlay.style.display = 'none';  // 'member-login-overlay' 요소의 표시 속성을 'none'으로 변경하여 화면에서 감춤
  userAlarm.style.display = 'block';          // 'user-alarm' 요소의 표시 속성을 'block'으로 변경하여 화면에 표시
  loginRegisterButtons.style.display = 'none'; // 'login-register-buttons' 요소의 표시 속성을 'none'으로 변경하여 화면에서 감춤
  body.classList.remove('active');            // body 요소의 'active' 클래스를 제거
});

// var headerContainer = document.querySelector('.header-include');

// if (headerContainer) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', '/include/header.html', true);

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       headerContainer.innerHTML = xhr.responseText;

//       // Call the function to handle Mega Navigation and other logic
//       handleMegaNavigation();
//     }
//   };

//   xhr.send();
// }

// function handleMegaNavigation() {
//   // Mega Navigation: Mobile & PC Width Check
//   window.addEventListener('resize', function () {
//     // Your existing code for Mega Navigation width check

//     // Update or include any other logic you want to execute
//     // based on the completion of header inclusion
//   });

//   // 초기 호출
//   window.dispatchEvent(new Event('resize'));
// }

/* Include Files */

