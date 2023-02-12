

  function sendEmail(_name, _e_mail, _message, _subject){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'dongaredayanand8@gmail.com',
        Password: "Daya@2796",
        To: 'dongaredayanand8@gmail.com',
        From: 'dongaredayanand8@gmail.com',
        subject: '${name} Sent you message  ${email}',
        Body: 'Name: ${nmae} <br> ${email}'
    }).then(_message => alert('Sent message'))
  }