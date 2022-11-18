
// Getting our variables

const sidebar = document.querySelector('.side_bar')
const sidebarToggle = document.querySelector('.side_bar-toggle')
const sidebarClose = document.querySelector('.close')


// Show SideBAr
if(sidebarToggle){
    sidebarToggle.addEventListener('click',()=> {
        sidebar.classList.add('visible')
        sidebarToggle.classList.add('none')
    })
}

// Hide NavBAr
if(sidebarClose){
    sidebarClose.addEventListener('click',()=> {
        sidebar.classList.remove('visible')
        sidebarToggle.classList.remove('none')

        
    })
}


