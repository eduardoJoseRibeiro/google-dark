window.onload = () => {
  let backgroundColor = '#424242'
  let color = 'white'

  // Pagina Inicial
  // Paginas de Buscas
  let colorSelector = `
    a.gb_P, #gb#gb a.gb_P, .Q8LRLc, a.Fx4vi, #hdtb.notl div
  `

  let backgroundSelector = `
    .ctr-p, #cnt
  `

  let borderNoneSelector = `
    #fbar, .b2hzT
  `

  let fbar = document.querySelector('.fbar') // Content Inferior

  if (fbar)
    fbar.style.backgroundColor = '#212121' // backgroundColor

  let colorSet = document.querySelectorAll(colorSelector) // Link Superiores

  if (colorSet) {
    if (colorSet.length) {
      colorSet.forEach(element => {
        element.style.color = color
      })
    } else {
      colorSet.style.color = color
    }
  }

  let backgroundColorSet = document.querySelectorAll(backgroundSelector) // Background em cores padrões

  if (backgroundColorSet) {
    if (backgroundColorSet.length) {
      backgroundColorSet.forEach(element => {
        element.style.backgroundColor = backgroundColor
      })
    } else {
      backgroundColorSet.style.backgroundColor = backgroundColor
    }
  }

  let borderNoneSet = document.querySelectorAll(borderNoneSelector) // Tira bordas

  if (borderNoneSet) {
    if (borderNoneSet.length) {
      borderNoneSet.forEach(element => {
        element.style.border = 'none'
      })
    } else {
      borderNoneSet.style.border = 'none'
    }
  }
}