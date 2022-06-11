document.getElementById('main').style.display = 'block';

// document.querySelector('.options').addEventListener('click', active)
document.querySelectorAll('.rate').forEach(elem => elem.addEventListener('click', active))
    

function submit()
{
    document.getElementById('main').style.display = 'none';
    document.getElementById('thx').style.display = 'block';
};

function deactive()
{
    document.querySelectorAll('#one, #two, #three, #four, #five').forEach(elem => elem.classList.remove('opacity'))
};

function active() 
{
    deactive();
    event.target.classList.add('opacity');  
};


