window.onload = function() {
    showPrompt('Введите что-нибудь<br>...умное :)', function(value){
      alert(`Вы ввели: ${value}`)
      });
    }
    
    function showPrompt(html, callback) {
      const openBtn = document.getElementById('openModal');
      const prompMessage = document.getElementById('prompt-message') ;
      const formmContainer = document.getElementById('prompt-form-container');
      let check = false;
      const form = document.forms.modal;
      const closeBtn = form.cancel;
    
      prompMessage.innerHTML = html;
    
      form.onsubmit = function(event){
        if (form.text.value) {
          let value = form.text.value;
          callback(value);
          check = false;
        }
        else {
          form.text.focus();
          return false;
        }
        form.text.value = '';
      }
    
      openBtn.onclick = function() {
        formmContainer.style.display = 'block';
        formmContainer.style.background = 'rgba(47, 50, 44, 0.6)';
        check = true;
        form.text.focus();
        document.body.style.overflowY='hidden';
      }
    
      closeBtn.onclick = function(){
        callback(null);
        formmContainer.style.display = 'none';
        check = false;
      }
    
      document.addEventListener('keyup', function(event){
        if (check === true && event.key === 'Escape') {
        callback(null);
        formmContainer.style.display = 'none';
        check = false;
        form.text.value = '';
        }
      })
    }
    
    