let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 3000);
    }

    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
    function girisFunc() {
      alert("Giriş Başarılı!!!");
    }
    function kayitFunc() {
      alert("Kayıt Başarılı!!!");
    }


    function fireSweetAlert() {
      
      Swal.fire({
        title: 'Satın almak istediğine emin misin?',
        text: "Bileti satın aldıktan sonra iade , değişim ve başka kişinin üstüne aktarım yapılamamaktadır!" ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Onaylıyorum!',
        cancelButtonText: 'İptal',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Kategoriniz başarıyla seçildi!',
            'Lütfen geri dönüp Satın Al butonuna basınız.',
            'success'
          )
        }
      })

  }
  
  function satinal() {
   
    (async () => {

      const { value: email } = await Swal.fire({
        title: 'Satın alma linkinin gönderileceği E-Posta adresini giriniz.',
        input: 'email',
        inputLabel: 'E-Posta adresi : ',
        inputPlaceholder: 'E-mail adresinizi giriniz.',
        showCancelButton: true,
        cancelButtonText: 'İptal',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Gönder!',
      })
      
      if (email) {
        Swal.fire(`Satın Alma Sayfası Mail Adresine Başarı Bir Şekilde Gönderildi.`)
      }
      })()
    
  }

  selectElement = document.querySelector('#kategori');

  function tribun(){
    Swal.fire(
      'Tebrikler!',
      'Kategoriniz başarıyla seçildi.' ,
      'success'
    )
  }
  
  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

window.onscroll = function() {
  scrollFunction()
  };
  function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  document.getElementByClassName("upbutton").style.display = "block"
  else
  document.getElementByClassName("upbutton").style.display = "none"
  }
  function topFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  document.body.scrollTop -= 40
  document.documentElement.scrollTop -= 40
  setTimeout(function() {
  topFunction()
  }, 0)
  } else {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  }
  }