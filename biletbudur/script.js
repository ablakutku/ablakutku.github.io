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


