document.querySelector('ul').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    } else if (event.target.tagName === 'SPAN' || event.target.tagName === 'I') {
        event.target.closest('li').style.transition = 'opacity 1s';
        event.target.closest('li').style.opacity = '0';
        setTimeout(function() {
            event.target.closest('li').remove();
        }, 1000);
        event.stopPropagation();
    }
});

document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var newItem = event.target.value;
        event.target.value = '';
        var li = document.createElement('li');
        var span = document.createElement('span');
        var icon = document.createElement('i');
        icon.className = 'fa-regular fa-circle-check';
        span.appendChild(icon);
        li.appendChild(span);
        li.appendChild(document.createTextNode(' ' + newItem));
        document.querySelector('ul').appendChild(li);
    }
});
