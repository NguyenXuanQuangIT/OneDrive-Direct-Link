function generateDirectLink() {
var fileUrl = document.getElementById('fileUrl').value;
var directLinkElement = document.getElementById('directLink');

if (isDirectLinkWithDownload(fileUrl)) {
alert('Liên kết vừa nhập đã là Direct Link.');
directLinkElement.value = '';
return;
}

if (!isValidOneDriveBusinessLink(fileUrl)) {
alert('Vui lòng nhập liên kết hợp lệ.');
directLinkElement.value = '';
return;
}

var directLink = fileUrl.replace(/\/:u:/, '/:f:').replace(/\?.*$/, '') + '?download=1';
directLinkElement.value = directLink;

var directLinkResult = document.getElementById('directLinkResult');
directLinkResult.style.display = 'block';

playSuccessSound();
}

function copyToClipboard() {
var copyText = document.getElementById('directLink');
copyText.select();
document.execCommand('copy');
alert('Đã sao chép liên kết thành công!');
playCopySuccessSound();
}

function playSuccessSound() {
var successSound = document.getElementById('successSound');
successSound.play();
}

function playCopySuccessSound() {
var copySuccessSound = document.getElementById('copySuccessSound');
copySuccessSound.play();
}

function isValidOneDriveBusinessLink(url) {
var oneDriveBusinessPattern = /^(https?:\/\/)[\w.-]+\.sharepoint\.com\/[:\w.-]+\/g\/[:\w.-]+\/[:\w.-]+\/[:\w.-]+$/;
return oneDriveBusinessPattern.test(url);
}

function isDirectLinkWithDownload(url) {
var directLinkPattern = /\/:f:\/.*\?download=1$/;
return directLinkPattern.test(url);
}
