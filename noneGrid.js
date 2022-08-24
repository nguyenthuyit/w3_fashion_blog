// none/hide  model
const btn = document.querySelector('.js-subs')
const model = document.querySelector('.js-model')
const btnClose = document.querySelector('.js-btn-close')
btn.addEventListener('click', function(){
    model.classList.add('open');
})

btnClose.addEventListener('click', function(){
    model.classList.remove('open');
})
// none/hide comment

function myFunction(id) {
    var btnOpen = document.getElementById(id);
    if (btnOpen.className.indexOf("open") == -1) {
      btnOpen.className += " open";
    } else { 
      btnOpen.className = btnOpen.className.replace(" open", "");
    }
  }
  
// /ý nghĩa của đoạn code none/hiện comment:
// - lấy những biến có id gán cho biến btnOpen
// -nếu biến btnOpen không tìm thấy lớp open, thì thêm vào, ngược lại nếu tìm thấy thì bỏ qua lớp open
