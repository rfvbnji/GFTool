function resetBlock () {
  block_dmg = 0, block_dbk = 0, block_acu = 0, block_fil = 0
  changeBlock(1, 0); changeBlock(2, 0); changeBlock(3, 0);changeBlock(4, 0)
  refreshPreview()
  manageButton()
}
function resetPage () {
  mul_property = 1
  color = 1, block_class = 56, block_shape = 9
  changeBigImg('addblo')
  changeProperty('class')
  document.getElementById('ChipLevel').value = 0
  refreshPreview()
  resetBlock()
}
function manageButton () {
  var AdLv = document.getElementById('AdLv')
  var SbLv = document.getElementById('SbLv')
  AdLv.disabled = true
  SbLv.disabled = true
  if (parseInt(document.getElementById('ChipLevel').value) === 0) {
    AdLv.disabled = false
    SbLv.disabled = true
  } else if (parseInt(document.getElementById('ChipLevel').value) === 20) {
    AdLv.disabled = true
    SbLv.disabled = false
  } else {
    AdLv.disabled = false
    SbLv.disabled = false
  }
  var addChipButtonId = document.getElementById('addChipButton')
  addChipButtonId.disabled = true
  var bn = 6
  if (block_class === 551) bn = 5
  if (block_dmg + block_dbk + block_acu + block_fil === bn) addChipButtonId.disabled = false
}
function refreshPreview () {
  if (block_class === 551 && (block_shape === 81 || block_shape === 82 || block_shape === 9 || block_shape === 10 || block_shape === 111 || block_shape === 112 || block_shape === 120 || block_shape === 131 || block_shape === 132)) {
    // 五格2类低属性显示
    for (var i = 0; i <= 5; i++) {
      document.getElementById('dmg' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 4.4))
      document.getElementById('dbk' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 12.7))
      document.getElementById('acu' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 7.1))
      document.getElementById('fil' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 5.7))
    }
  } else {
    for (var i = 0; i <= 5; i++) {
      document.getElementById('dmg' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 4.4))
      document.getElementById('dbk' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 12.7))
      document.getElementById('acu' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 7.1))
      document.getElementById('fil' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 5.7))
    }
  }
  manageButton()
}
function changeBlock (type, blocknum) {
  var totalblo = 6
  document.getElementById('dmg' + block_dmg).className = 'btn btn-primary'
  document.getElementById('dbk' + block_dbk).className = 'btn btn-primary'
  document.getElementById('acu' + block_acu).className = 'btn btn-primary'
  document.getElementById('fil' + block_fil).className = 'btn btn-primary'
  for (var i = block_dmg + 1; i <= 5; i++) {
    document.getElementById('dmg' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('dmg' + i).disabled = false
  }
  for (var i = block_dbk + 1; i <= 5; i++) {
    document.getElementById('dbk' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('dbk' + i).disabled = false
  }
  for (var i = block_acu + 1; i <= 5; i++) {
    document.getElementById('acu' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('acu' + i).disabled = false
  }
  for (var i = block_fil + 1; i <= 5; i++) {
    document.getElementById('fil' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('fil' + i).disabled = false
  }
  if (block_class === 551) {
    totalblo = 5
    document.getElementById('dmg' + 5).className = 'btn btn-default'
    document.getElementById('dbk' + 5).className = 'btn btn-default'
    document.getElementById('acu' + 5).className = 'btn btn-default'
    document.getElementById('fil' + 5).className = 'btn btn-default'
    document.getElementById('dmg' + 5).disabled = true
    document.getElementById('dbk' + 5).disabled = true
    document.getElementById('acu' + 5).disabled = true
    document.getElementById('fil' + 5).disabled = true
  }
  if (type === 1) {
    document.getElementById('dmg' + block_dmg).className = 'btn btn-outline btn-primary'
    block_dmg = blocknum
    document.getElementById('dmg' + block_dmg).className = 'btn btn-primary'
  } else if (type === 2) {
    document.getElementById('dbk' + block_dbk).className = 'btn btn-outline btn-primary'
    block_dbk = blocknum
    document.getElementById('dbk' + block_dbk).className = 'btn btn-primary'
  } else if (type === 3) {
    document.getElementById('acu' + block_acu).className = 'btn btn-outline btn-primary'
    block_acu = blocknum
    document.getElementById('acu' + block_acu).className = 'btn btn-primary'
  } else if (type === 4) {
    document.getElementById('fil' + block_fil).className = 'btn btn-outline btn-primary'
    block_fil = blocknum
    document.getElementById('fil' + block_fil).className = 'btn btn-primary'
  }
  for (var i = block_dmg + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('dmg' + i).className = 'btn btn-default'
    document.getElementById('dmg' + i).disabled = true
  }
  for (var i = block_dbk + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('dbk' + i).className = 'btn btn-default'
    document.getElementById('dbk' + i).disabled = true
  }
  for (var i = block_acu + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('acu' + i).className = 'btn btn-default'
    document.getElementById('acu' + i).disabled = true
  }
  for (var i = block_fil + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('fil' + i).className = 'btn btn-default'
    document.getElementById('fil' + i).disabled = true
  }
  manageButton()
}
function allblo () { return block_dmg + block_dbk + block_acu + block_fil;}
function getHelp (helpnum) { window.open('../img/chip/tutorial/cc-' + helpnum + '-' + lang_type + '.png') }
function newPage (url) { window.open(url)}
