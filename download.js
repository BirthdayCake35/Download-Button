const downloadBtn = document.getElementById('downloadBtn');
const fileLink = './download-example.txt'; 

downloadBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    downloadBtn.disabled = true; 

    let timer = 5; 


    const initCounter = setInterval(() => {
        if (timer > 0) {
            downloadBtn.innerHTML = `Your Download will begin in <b>${timer}</b> seconds`;
            timer--;
        } else {
            clearInterval(initCounter); 
            downloadBtn.innerHTML = 'Your file is downloading...'; 

            
            const link = document.createElement('a');
            link.href = fileLink;
            link.download = 'example'; 
            document.body.appendChild(link);
            link.click();
        }
    }, 1000); 
});

console.log("github.com/BirthdayCake35")