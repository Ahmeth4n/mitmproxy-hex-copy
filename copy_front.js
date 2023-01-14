function copy_to_clipboard(stritem){
    const el = document.createElement('textarea');
    el.value = stritem;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

if(!document.getElementById("byteCopy")){
    const copy_button = document.createElement('a')
    copy_button.href = "#"
    copy_button.id = "byteCopy";
    copy_button.innerText = "Copy Hex"
    copy_button.style.color = "red";
    
    document.querySelector("nav").appendChild(copy_button)

    copy_button.addEventListener('click', ()=>{
        var bytes = document.querySelectorAll(".contentview > pre > div");
        var hexCodes = "";
        for (var i=0, max=bytes.length; i < max; i++) {
            var currentLine = bytes[i].querySelectorAll(".text")[0].innerHTML;
            var modifyLine = currentLine.substr(0,currentLine.length - 2);
            hexCodes += modifyLine; 
        }

        hexCodes = hexCodes.replaceAll(" ","");
    
        copy_to_clipboard(hexCodes);
        window.alert('hex values copied to your clipboard!'); 
    })
}

