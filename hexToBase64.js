function hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join(""));
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertBtn').onclick = function() {
        var hexValue = document.getElementById('hexValue').value;
        document.getElementById("result").value = hexToBase64(hexValue);
      };

      document.getElementById("gitLink").onclick = function(){
        chrome.tabs.create({url: "https://github.com/ahmeth4n"});
    };
});
