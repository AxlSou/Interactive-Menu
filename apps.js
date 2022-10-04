export let menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      video: 'https://thumbs.gfycat.com/GleefulHonoredAfricanjacana-mobile.mp4'
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
  
export let all = 'all'
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
const title = document.querySelector('.btn-container')
const modalContainer = document.querySelector('.modal-container')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

addEventListener('DOMContentLoaded', ()=> {
  displayMenuItems(menu);
  displayBtns(menu)
})
  
export const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
              <img src="${item.img}" class="photo" alt="${item.title}">
              <div class="item-info">
                <header>
                  <h4 class="translate">${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text translate">${item.desc}</p>
              </div>
            </article>`
  })
  displayMenu = displayMenu.join('')
  sectionCenter.classList.remove('animation')
  setTimeout(function(){
    sectionCenter.innerHTML = displayMenu
    sectionCenter.classList.add('animation')
  }, 250)

  // Open modal to show video presentation
  setTimeout(function() {
  const photos = document.querySelectorAll('.photo')
  photos.forEach((photo)=> {
    photo.addEventListener('click', (e)=> {
      const title = e.currentTarget.alt;
      const item = menuItems.filter((i => i.title === title));
      //modalContainer.innerHTML += `<video class="video" width="320" height="240" src="${item[0].video}" autoplay loop></video>`
      modalContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/FLd00Bx4tOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      modalOverlay.classList.add('open-modal')
    })
  })
  }, 300)

  closeBtn.addEventListener('click', ()=> {
      modalOverlay.classList.remove('open-modal')
  })  
}

export const displayBtns = (menuList) => {
  const categories = menuList.reduce(function(values, item){
    if(!values.includes(item.category)){
        values.push(item.category)
      }
      return values
    },
    [all])
    const categoryBtn = categories
    .map((category) => {
      return `<button class="filter-btn translate" type="button" data-id=${category}>${category}</button>`
    })
    .join('')
    
    btnContainer.innerHTML = categoryBtn
    
    const filterBtns = document.querySelectorAll('.filter-btn')
    
    filterBtns.forEach((btn)=> {
      btn.addEventListener('click', (e)=> {
        const category = e.currentTarget.dataset.id
        const menuCategory = menuList.filter(menuItem => menuItem.category === category)
        if (category === all) {
          displayMenuItems(menuList)
        } else {
          displayMenuItems(menuCategory)
        }
      })
    })
}

