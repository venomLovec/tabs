window.addEventListener('DOMContentLoaded', ()=>{
//    'use strict'
//Вариант 1 без циклов
//    let tabs = document.querySelectorAll('.info-header-tab')
//    console.log(tabs)
//    let content = document.querySelectorAll('.info-tabcontent')
//    console.log(content)
//    content[1].style.display = 'none'
//    content[2].style.display = 'none'
//    content[3].style.display = 'none'
//    tabs[0].addEventListener('click',()=>{
//        content[0].style.display = 'flex'
//        content[1].style.display = 'none'
//        content[2].style.display = 'none'
//        content[3].style.display = 'none'
//    } ) 
//
//    tabs[1].addEventListener('click',()=>{
//        content[0].style.display = 'none'
//        content[1].style.display = 'flex'
//        content[2].style.display = 'none'
//        content[3].style.display = 'none'
//    } )
//
//    tabs[2].addEventListener('click',()=>{
//        content[0].style.display = 'none'
//        content[1].style.display = 'none'
//        content[2].style.display = 'flex'
//        content[3].style.display = 'none'
//    } )
//
//    tabs[3].addEventListener('click',()=>{
//        content[0].style.display = 'none'
//        content[1].style.display = 'none'
//        content[2].style.display = 'none'
//        content[3].style.display = 'flex'
//    } )
//    
//    let a = new Date()
//    console.log(a)
//    let b = new Date(Date.parse(a).getDate)
//    console.log(b)
//    let frame = document.querySelector('.info-header')
//    let header = document.querySelectorAll('.info-header-tab')
//    let content = document.querySelectorAll('.info-tabcontent')
//Вариат 2 с циклами, но без файла style.css
//    //функция по скрытию всех табов, кроме первого
//    function hideTab(a){
//        for(let i=a; i<header.length; i++){
//            content[i].style.display = 'none'
//        }
//    }
//    hideTab(1)
//    //Функция по отображению конкретного таба
//    function showTab(b){
//        for(let i=b; i<header.length; i++){
//            content[b].style.display = 'flex'
//        }
//    }
//    //Делегирование событий: повесили обработчик событий на родителя табов    
//    frame.addEventListener('click', (event)=>{
//        for(let i=0; i<header.length; i++){
//        if(event.target == header[i]){
//            hideTab(0)
//            showTab(i)
//           } 
//        }
//    })
//Вариат 3 с циклами, и работа с файлом style.css через style.classList.add/remove/contains
//    function hideTab(b){
//        for(let i=b; i<header.length; i++){
//            content[i].classList.remove('show')
//            content[i].classList.add('hide')
//        }
//    }
//    hideTab(1)
//
//    function showTab(a){
//        for(let i=a; i<header.length; i++){
//            content[a].classList.remove('hide')
//            content[a].classList.add('show')
//        }
//    }
//    
//    frame.addEventListener('click', (event)=>{
//        if(event.target && event.target.classList.contains('info-header-tab'))
//        {
//            for(let i=0; i<header.length; i++)
//            {
//                if(event.target == header[i]){hideTab(0); showTab(i); console.log(i); console.log(event.target)}
//            }
//        }
//    }
//)    
//Повторим Вариант 3.1 (проще)
    let frame = document.querySelector('.info-header')
    let header = document.querySelectorAll('.info-header-tab')
    let content = document.querySelectorAll('.info-tabcontent')
    
    function hideTabContent(a){
        for(let i=a; i<header.length; i++){
            content[i].classList.remove('show')
            content[i].classList.add('hide')
        }
    }
    hideTabContent(1)
    
    function showTabContent(b){
        for(let i=b; i<header.length; i++){
            content[b].classList.add('show')
        }
    }
    
    frame.addEventListener('click', (event)=>{
        for(let i=0; i<content.length; i++){
        if(event.target == header[i]){hideTabContent(0); showTabContent(i)}
           }
    })

    let knowMore = document.querySelector('.more')
    console.log(knowMore)
    
    knowMore.addEventListener('click', ()=>{
        let overlay = document.querySelector('.overlay')
        overlay.style.display = 'block'
        document.body.style.overflow = 'hidden'
        let popUpClose = document.querySelector('.popup-close')
        popUpClose.addEventListener('click', ()=>{
            overlay.style.display = 'none'
            document.body.style.overflow = ''
        })
    //    knowMore.style.display = 'none'
    //    knowMore.setAttribute('disableb', true)
    //    knowMore.style.visibility = 'hidden'
    })
    

    ////////////////////////// TIMER/////////////////////////////////
    let timer = document.querySelector('.timer')
    let timerTitle = document.querySelector('.timer-title')
    let timerAction = document.querySelector('.timer-action')
    let timerNumbers = document.querySelector('.timer-numbers')    
    let days = timerNumbers.getElementsByClassName('days')[0]
    let hours = timerNumbers.getElementsByClassName('hours')[0]
    let min = timerNumbers.getElementsByClassName('minutes')[0]
    let sec = timerNumbers.getElementsByClassName('seconds')[0]  

    let deadline = "2021-11-13T00:00:00"
    
    function result(){
        let close = setInterval(()=>{
            let now = new Date()
            let time =(Date.parse(deadline) - Date.parse(now))
            let data = {
                total: time,
                days: Math.floor(time/1000/60/60/24%24) + 'd',
                hours: Math.floor(time/1000/60/60%24) + 'h',
                min: Math.floor(time/1000/60%60) + 'm',
                sec: Math.floor(time/1000%60) + 's'
            }

            days.textContent = data.days
            hours.textContent = data.hours
            min.textContent = data.min
            sec.textContent = data.sec

            if(data.total <= 0){
                clearInterval(close)
                timer.style.display = 'none'
                knowMore.style.display = 'none'
                // timer.removeChild(timerAction, timerNumbers, timerTitle)                
            }

            return data
        }, 1000)
    } 
    result()
//////////////////////////////////////////////////////////////////////
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
