document.getElementById('submit-btn').addEventListener('click',function(){
    const newNote  = document.getElementById('new-note').value;
    const noteType = document.getElementById('note-type').value;
    const display = document.getElementById('display');
    const p = document.createElement('p');
    p.innerText = newNote;
    display.appendChild(p);
    document.getElementById('new-note').value = '';
    // for (let i = 0; i < noteType.length; i++) {
       if (noteType == 'urgent') {
           p.style.background='red';

           }
           else if (noteType == 'important') {
               p.style.background = 'green';
               
           }
           else p.style.background = 'blue';
        
    // }
})