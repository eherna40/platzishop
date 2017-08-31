const $form = $('#suscribe-form')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function(ev){
  ev.preventDefault()
  let lon = $('#email').val()
  const error = Math.random > 0.5
  $formGroup.removeClass().addClass('form-group')
  $formControl.removeClass().addClass('form-control')
  $formGroup.addClass(error || lon.length === 0 ? 'has-danger' : 'has-success')
  $formControl.addClass(error || lon.length === 0 ? 'form-control-danger' : 'form-control-success')
  $formGroup.find('.form-control-feedback').remove()
  var el;
  if (error || lon.length === 0){
    el = $('<div>', {html: 'Ha ocurrido un error'})
    }else{
    el = $('<div>', {html: 'Te enviaremos todas las novedades'})
  }
  el.addClass('form-control-feedback')
  $formGroup.append(el)
})

function mostrarModal(){
  const noModal = JSON.parse(localStorage.noMostrarModal)
  if (!noModal){
    $('#modal-oferta').modal()
  }
  
  $('#no-registrar').click(function (ev){
    localStorage.noMostrarModal = true
  })
}

const $filtrosToggle = $('#filtros-toggle')
$filtrosToggle.click(function(ev){
  ev.preventDefault()
  const i = $filtrosToggle.find('i.fa')
  const isDown = i.hasClass('fa-chevron-down')
  if (isDown){
    i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  }else{
        i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
})