var wrapFile       = document.querySelectorAll('.wrapper-file');

const desktop      = document.querySelector('.desktop');
const context      = document.querySelector('.context-menu')
const desktopFiles = document.querySelector('.desktop-files')

for( let i = 0; i < wrapFile.length; i++ ){
    // выделение файла
    wrapFile[i].onclick  = function clickFile(){
        clearSelFile();
        wrapFile[i].firstElementChild.classList.add('selectFile')
        window.removeEventListener("click", clearSelFile);
    }

    // открыть файл
}

// костыль для удаление выделения файла
window.onclick = () =>{
    window.addEventListener('click', clearSelFile);
}
// удалть выделение файла
function clearSelFile(){
    wrapFile.forEach((wrapFile) => {
        wrapFile.firstElementChild.classList.remove('selectFile');
    })
}


// Правая кнопка мыши
desktop.oncontextmenu = (event) =>{
    context.style.display = 'block';
    context.style.left    = event.clientX + 'px' 
    context.style.top    = event.clientY + 'px' 
    return false;
}
window.onclick = function hideContextMenu(){
    context.style.display = 'none'
}
var newFolder    = document.querySelector('.newFolder')

newFolder.onclick = function addFolder(){
    context.style.display = 'none'
    desktopFiles.innerHTML += `
                        <div class="wrapper-file">
                            <div class="file">
                                <img class='file-img' src="img/Folder-icon.png" alt="">
                                <div class="file-name">
                                    <input class="name" value="Folder">
                                </div>
                            </div>
                        </div>
                        `
}

var newFile      = document.querySelector('.newFile')
