let angle1 = 130;
let angle2 = 286;

window.addEventListener('mousemove', (event) => {
    angle1 += (0.001 * event.clientX) * Math.round(Math.random() * 360) * 0.2;
    angle2 += (0.001 * event.clientY) * Math.round(Math.random() * 360) * 0.2;
    // console.log(angle1);
    document.body.style.background = `linear-gradient(${angle1}deg, rgba(255,69,0, 0.4), rgba(255,215,0,0.7) 70%),  linear-gradient(${angle2}deg, rgba(240,128,128, 0.9), rgba(238,232,170, 1))`;
})

/* При создании интерактивности на сайте для мобилок/планшетов нужно учитывать, что события JS будут другие, т.к. нет мыши и клавиатуры, а только НАЖАТИЯ/касания пользователя на экране; 
События следующие: 
touchstart - срабатывает, когда пользователь касается экрана, а именно того html-элемента, к которому и привязано событие; создается touch-point
touchend - вызывается когда пропадает touchpoint(точка касания), а именно когда пользователь убирает палец с экрана; точка касания может пропасть также, если пользователь передвинул палец
touchmove - возникает, когда пользователь передвигает палец по экрану

При срабатывании события, связанного с касаниями, вызывается объект Touch, который заносится в event; здесь: получение первых координат X/Y*/
window.addEventListener('touchmove', (event) => {
    angle1 += (0.001 * event.touches[0].clientX) * Math.round(Math.random() * 360) * 0.5;
    angle2 += (0.001 * event.touches[0].clientY) * Math.round(Math.random() * 360) * 0.5;
    document.body.style.background = `linear-gradient(${angle1}deg, rgba(255,69,0, 0.4), rgba(255,215,0,0.7) 70%),  linear-gradient(${angle2}deg, rgba(240,128,128, 0.9), rgba(238,232,170, 1))`;
})