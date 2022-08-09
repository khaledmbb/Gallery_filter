const galleryTypes = document.querySelectorAll('.gallery-types ul li'),
  gallery = document.querySelectorAll('.gallery img'),
  searchBar = document.getElementById('search')

galleryTypes.forEach(el => {
  el.addEventListener('click', (e) => {
    galleryTypes.forEach(ele => {
      ele.classList.remove('active')
    })
    el.classList.add('active')

    filterImages(e.target)
  })
})

function filterImages(el) {
  gallery.forEach(ele => {
    if (ele.classList.contains(el.dataset.type)) {
      ele.classList.remove('hide')
    } else {
      ele.classList.add('hide')
    }
  })
}

searchBar.addEventListener('input', (e) => {
  let txt = e.target.value.toLowerCase()
  gallery.forEach(el => {
    if (el.className.toLowerCase().includes(txt)) {
      el.classList.remove('hide')
    } else {
      el.classList.add('hide')
    }
  })
})