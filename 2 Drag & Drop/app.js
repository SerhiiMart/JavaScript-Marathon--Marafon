const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
  event.target.classList.add('hold')
  setTimeout(() => 
    event.target.classList.add('hide'), 0
  )
}

function dragEnd(event) {
 // event.target.classList.remove('hold', 'hide')
  event.target.className = 'item'
}

function dragOver(event) {
  event.preventDefault()
  // console.log('drag over')
}
function dragEnter(event) {
  event.target.classList.add('hovered')
  // console.log('drag enter')
}
function dragLeave(event) {
  event.target.classList.remove('hovered')
  // console.log('drag leave')
}
function dragDrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
  // console.log('drag drop')
}
