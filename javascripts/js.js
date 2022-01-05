
let btn = document.querySelector('.header-menu__icon')
let navMenu = document.querySelector('.nav-menu')


btn.addEventListener('click', ()=>{
     if( navMenu.classList.contains('active') ) {
         navMenu.classList.remove('active')
     } else {
         navMenu.classList.add('active')
     }
    
})


function typing(elelemt) {
    let inner = elelemt.html(), fullText = ``, i = 0,
    interval = setInterval(() => {
      fullText += inner[i]
      i++
      elelemt.html(fullText)
      if(fullText == inner) {
        clearInterval(interval)
      }
    }, 70)
  }
  
  typing($('.header-info__text'))
