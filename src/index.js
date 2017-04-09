import 'minireset.css'
import './styles/index.styl'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import Clipboard from 'clipboard/dist/clipboard'
new Clipboard('.copy')
// .on('success', console.log.bind(console))
// .on('error', console.error.bind(console))

function showModal () {
  document.body.classList.add('show-modal')
}

function hideModal () {
  document.body.classList.remove('show-modal')
}

function hideOnEsc (evt) {
  if (evt.keyCode === 27) {
    showModal()
  }
}

document.addEventListener('keydown', hideOnEsc)

document.addEventListener('click', function (evt) {
  if (evt.target.getAttribute('target') === 'iframe') {
    showModal()
  }
  if (evt.target.classList.contains('hide-modal')) {
    hideModal()
  }
})
