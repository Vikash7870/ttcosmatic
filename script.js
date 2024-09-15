 const btnElList =document.querySelectorAll('.tab1');

 btnElList.forEach(btnEl =>{
    btnEl.addEventListener('click',()=>{
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');
    });
 });