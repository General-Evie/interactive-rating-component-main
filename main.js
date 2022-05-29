document.getElementById('main').style.display = 'block';
document.querySelector('option'),addEventListener('click', active)

function submit()
{
    document.getElementById('main').style.display = 'none';
    document.getElementById('thx').style.display = 'block';
};

function active(event) 
{
    event.target.classList.add('opacity');  
};


