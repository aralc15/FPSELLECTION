let prevBut = document.getElementById('but-prev');
let nextBut = document.getElementById('but-next');
let container = document.querySelector('.Container')
let Items = container.querySelectorAll('.List .Item');
let Indicator = document.querySelector('.Indicadores');
let dots = Indicator.querySelectorAll('ul li');
let list = container.querySelector('.List')

let active = 0;
let PrimeiraPosicao = 0;
let UltimaPosicao = Items.length - 1;

function SetSLider(){


    let itemOld = container.querySelector('.List .Item.Active');
    itemOld.classList.remove('Active')

    let dotsOld = Indicator.querySelector('ul li.Ativo')
    dotsOld.classList.remove('Ativo');
    dots[active].classList.add('Ativo')

    Indicator.querySelector('.Number').innerHTML = '0' + (active + 1)


    
}

nextBut.onclick = ( ) => { 
    list.style.setProperty('--calculation', 1)
    active = active + 1 > UltimaPosicao ? 0 : active + 1
    SetSLider()
    Items[active].classList.add('Active');


    
}

prevBut.onclick = ( ) => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < PrimeiraPosicao ? UltimaPosicao : active - 1
    SetSLider()
    Items[active].classList.add('Active');

    
    
}


