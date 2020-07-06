$(document).ready(function () {

    $(document).on("click", ".devour", devourBurger);

    function devourBurger() {
        const burgerObj = {
            id: $(this).attr('data-id'),
            devoured: true
        };

        $.ajax({
            url: 'api/burgers',
            method: 'PUT',
            data: burgerObj
        }).then(function (response) {
            console.log(response);

            window.location.reload();
        });


    }


});