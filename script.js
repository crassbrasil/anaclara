
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function gerarPix(valor) {
  const chave = '00020126360014BR.GOV.BCB.PIX01111074529618520400005303986540' + valor.toString().padStart(2, '0') + '5802BR5920Maria Clara6009SAO PAULO62110514AjudeMariaClara6304';
  document.getElementById('pixCode').value = chave;
  document.getElementById('qrCode').src = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(chave);
  document.getElementById('pixInfo').style.display = 'block';
}
function copiarPix() {
  const textarea = document.getElementById('pixCode');
  textarea.select();
  document.execCommand('copy');
  alert('Código Pix copiado!');
}
