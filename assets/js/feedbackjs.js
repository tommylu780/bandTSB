var fbForm = $('#fb-form');
var fbList = $('#fb-list');
var myFback = $('#ms');
var smBtn = $('.btn-fb');

function submitForm(event) {
    event.preventDefault();
    var nameInput = $('input[name="fb-name"]').val();
    var emailInput = $('input[name="fb-email"]').val();
    var comments = myFback.val();
    localStorage.setItem(emailInput, comments);

    if (!comments) {
        return;
    }

    var cmListEl = $('<li class="listCm">');
    cmListEl.text(nameInput + ": " + comments);

    fbList.append(cmListEl);

    // Clear text
    $('input[name="fb-name"]').val('');
    $('input[name="fb-email"]').val('');
    myFback.val('');

}
smBtn.on('click', submitForm);