console.log('Waiting..')

$(document).ready(function() {
    $('.submit').click(function(event){
        //Will prevent the form from submitting prematurely before validating.
        //event.preventDefault();
        //console.log('Clicked Button');
 
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        let statusElm = $('#status');
        statusElm.empty();

        if(name.length > 3){
            statusElm.append('<div>Name is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div>Subject is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length > 10){
            statusElm.append('<div>Message is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Message is not valid</div>')
        }

        //alert(email + subject + message)

    })
})