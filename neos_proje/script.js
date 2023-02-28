    myFunction();

    function myFunction(){
        Swal.fire({
  title: 'Premium üyelik avantajları;',
  text: `
  Premium üyelik için 1 ay ödeme yapmanız gerekmektedir.
  Üye profilinizin yanında Premium üyelik işaretiniz olacaktır.
  Profil resminize artık GIF resimlerini ekleyebilirsiniz.
  Özel mesajlarınızı artık 100 karakterden 500 karaktere kadar uzatabilirsiniz.
  `,
  
   width: 1000,
  padding: '3em',
  color: '#716add',
  backdrop: `
    url("yB.gif")
    left top
    no-repeat
  `
})
    }

