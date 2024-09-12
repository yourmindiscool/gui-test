javascript:(function() {
    var guiContainer = document.createElement('div');
    guiContainer.id = 'bookmarklet_gui';
    guiContainer.style.position = 'fixed';
    guiContainer.style.top = '10px';
    guiContainer.style.right = '10px';
    guiContainer.style.backgroundColor = '#fff';
    guiContainer.style.border = '1px solid #000';
    guiContainer.style.borderRadius = '5px';
    guiContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    guiContainer.style.zIndex = '1000';
    guiContainer.style.padding = '10px';
    guiContainer.style.width = '200px';
    guiContainer.style.maxHeight = '80%';
    guiContainer.style.overflowY = 'auto';
    guiContainer.style.fontFamily = 'Arial, sans-serif';
    guiContainer.style.fontSize = '14px';
    guiContainer.style.color = '#000';

    
    var title = document.createElement('div');
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '10px';
    title.innerText = 'Bookmarklet Links';
    guiContainer.appendChild(title);

    
    var buttons = [
        { label: 'Google', url: 'https://www.google.com' },
        { label: 'YouTube', url: 'https://www.youtube.com' },
        { label: 'GitHub', url: 'https://www.github.com' },
        { label: 'Stack Overflow', url: 'https://stackoverflow.com' }
        
    ];

    
    buttons.forEach(function(button) {
        var btn = document.createElement('button');
        btn.style.display = 'block';
        btn.style.width = '100%';
        btn.style.marginBottom = '5px';
        btn.style.padding = '10px';
        btn.style.border = '1px solid #000';
        btn.style.borderRadius = '3px';
        btn.style.backgroundColor = '#f0f0f0';
        btn.style.cursor = 'pointer';
        btn.innerText = button.label;
        btn.onclick = function() {
            window.open(button.url, '_blank');
        };
        guiContainer.appendChild(btn);
    });

    
    var closeButton = document.createElement('button');
    closeButton.style.display = 'block';
    closeButton.style.width = '100%';
    closeButton.style.marginTop = '10px';
    closeButton.style.padding = '10px';
    closeButton.style.border = '1px solid #000';
    closeButton.style.borderRadius = '3px';
    closeButton.style.backgroundColor = '#f0f0f0';
    closeButton.style.cursor = 'pointer';
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        document.body.removeChild(guiContainer);
    };
    guiContainer.appendChild(closeButton);

    
    document.body.appendChild(guiContainer);
})();
