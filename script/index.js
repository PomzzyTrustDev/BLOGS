
let faBars = document.querySelector('.fa-bars');
let navLinksContainer = document.querySelector('.navLinksContainer');

let faTimes = document.querySelector('.fa-times');

let faSearch = document.querySelector('.fa-search');

let seachContainer = document.querySelector('.seachContainer');

let closeSearch = document.querySelector('#closeSearch');

let previous = document.querySelector('.fa-arrow-left');

let next = document.querySelector('.fa-arrow-right');

let sliderContainer = document.querySelector('.sliderContainer');

let images = document.querySelectorAll('.sliderContainer img');

faBars.addEventListener('click', function(){
    navLinksContainer.classList.add('showNavlinkContainer');

    faBars.style.display = 'none';

    faTimes.style.display = 'block';
})
faTimes.addEventListener('click', function(){
    navLinksContainer.classList.remove('showNavlinkContainer');

    faBars.style.display = 'block';

    faTimes.style.display = 'none';


} )

faSearch.addEventListener('click', function(){
    seachContainer.classList.add('showSearchContainer');

    faSearch.style.display = 'none';
     
    closeSearch.style.display = 'block';
})

closeSearch.addEventListener('click', function(){
    seachContainer.classList.remove('showSearchContainer');

    closeSearch.style.display = 'none';

    faSearch.style.display = 'block';


})

let index = 0;
next.addEventListener('click', function(){
    index++;
    if(index == images.length){
        index =  0;
    }
    updateSlide(); 
})

previous.addEventListener('click', function(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
  updateSlide();  
})

function updateSlide(){

sliderContainer.style.transform = `translate(${-index * 100}%)`;
sliderContainer.style.transition = '.9s';
}

setInterval(function(){
    index++;
    if(index == images.length){
        index = 0;
    }

    updateSlide();  
}, 5000);

// modal box for quick links

let overlay = document.querySelector('.overLayForBlogQuicklinks');
let showMoreArrow =document.querySelector('.showMoreArrow');
let moreBlogQuickLinks = document.querySelector('.moreBlogQuickLinks');
const moreBlogQuickLinksButton = document.querySelectorAll('.moreBlogQuickLinks button');
const popularBlogImageAndContentOverallwrapperTwo = document.querySelector('.popularBlogImageAndContentOverallwrapperTwo');

let blogQuickLinks = document.querySelectorAll('.blogQuickLinks button');

let popularBlogImageAndContentOverallwrapper = document.querySelector('.popularBlogImageAndContentOverallwrapper');

for(let i = 0;  i < blogQuickLinks.length; i++){
    blogQuickLinks[i].addEventListener('focus', function(){

        if(i == blogQuickLinks.length - 1){

            // i = 0;

            for( let i = 0; i < moreBlogQuickLinksButton.length; i++){

    moreBlogQuickLinksButton[i].addEventListener('click', function(){

        popularBlogImageAndContentOverallwrapperTwo.style.transform = `translate(${-i * 100}%)`;

        popularBlogImageAndContentOverallwrapperTwo.style.transition = '.7s';

        popularBlogImageAndContentOverallwrapper.style.display = 'none';

        popularBlogImageAndContentOverallwrapperTwo.style.display = 'flex';

    })
    
}

        // displayBlog();
        }

        else{
            popularBlogImageAndContentOverallwrapperTwo.style.display = 'none';
            popularBlogImageAndContentOverallwrapper.style.display = 'flex';
            displayBlog();
        }
   
    });

    function displayBlog(){
        blogQuickLinks[0].classList.remove('allBtn');
        blogQuickLinks[i].classList.add('hoverStay');
        popularBlogImageAndContentOverallwrapper.style.transform = `translate(${-i * 100}%)`;
        popularBlogImageAndContentOverallwrapper.style.transition = '.8s';
    };
    // console.log(i);

   blogQuickLinks[i].addEventListener('blur', function(){
    blogQuickLinks[i].classList.remove('hoverStay');

    
    
    

   }) ;


}

showMoreArrow.addEventListener('click', function(){
   overlay.classList.add('showOverLay') ;
})

overlay.addEventListener('click', function(){
  overlay.classList.remove('showOverLay');  
})

popularBlogImageAndContentOverallwrapper.addEventListener('click', function(){

})

//  moreBlogQuickLinks model 


// for( let i = 0; i < moreBlogQuickLinksButton.length; i++){

//     moreBlogQuickLinksButton[i].addEventListener('click', function(){

//         popularBlogImageAndContentOverallwrapperTwo.style.transform = `translate(${-i * 100}%)`;

//         popularBlogImageAndContentOverallwrapperTwo.style.transition = '.7s';

//         popularBlogImageAndContentOverallwrapper.style.display = 'none';

//         popularBlogImageAndContentOverallwrapperTwo.style.display = 'flex';

//     })
    
// }

