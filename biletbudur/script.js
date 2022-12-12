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

    rastgele1 = Math.floor(Math.random() * 20) + 7;
    document.getElementById("rastgele1").innerHTML = rastgele1;
    
    function fireSweetAlert() {
      
(async () => {

  /* inputOptions can be an object or Promise */
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Sahne Önü': 'Sahne Önü' + (" : ")  + '1100TL',
        '1. Kategori': '1. Kategori' + (" : ") + '500TL',
        '2. Kategori': '2. Kategori' + (" : ") + '350TL',
        '3. Kategori': '3. Kategori' + (" : ") + '250TL',
        '4. Kategori': '4. Kategori' + (" : ") + '150TL',
        '5. Kategori': '5. Kategori' + (" : ") + '100TL',
      })
    }, 1000)
  })
  
  const { value: koltuk } = await Swal.fire({
    title: 'Kategori Seçiniz :',
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'Herhangi bir kategori seçmedin !'
      }
    }
  })
  
  if (koltuk) {
    Swal.fire({ html: `Seçtiğin Kategori : ${koltuk}` })
  }
  
  })()

  }
  