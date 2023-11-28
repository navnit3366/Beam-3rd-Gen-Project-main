function setMotorStatus(motor, speed){
    if (speed == 0){
        $(motor).html(`Stopped \t\t (${speed})`)
        $(motor).removeClass()
        $(motor).addClass("text-danger")
    }
    else if (speed == 255){
        $(motor).html(`Max Speed \t\t (${speed})`)
        $(motor).removeClass()
        $(motor).addClass("text-success")
    }
    else if (speed > 0){
        $(motor).html(`Speed Up \t\t (${speed})`)
        $(motor).removeClass()
        // $(motor).addClass("text-primary") // This is the default color which is blue
    }
    else {
        $(motor).html(`Error  \t\t (${speed})`)
        $(motor).css("bg-color", "black")
        $(motor).css("color", "white")
    }
}

function setSoundCardStatus(soundCard, status){
    if (status == false){
        $(soundCard).html("OFF")
        $(soundCard).removeClass()
        $(soundCard).addClass("text-danger")
    }
    else if (status == true){
        $(soundCard).html("ON")
        $(soundCard).removeClass()
        $(soundCard).addClass("text-success")
    }
    else {
        $(soundCard).html(`Error  \t\t (${status})`)
        $(soundCard).css("bg-color", "black")
        $(soundCard).css("color", "white")
    }
}

function setCameraStatus(camera, status){
    if (status == false){
        $(camera).html("OFF")
        $(camera).removeClass()
        $(camera).addClass("text-danger")
    }
    else if (status == true){
        $(camera).html("ON")
        $(camera).removeClass()
        $(camera).addClass("text-success")
    }
    else {
        $(camera).html(`Error  \t\t (${status})`)
        $(camera).css("bg-color", "black")
        $(camera).css("color", "white")
    }
}

function setHeaterStatus(heater, status){
    if (status == false){
        $(heater).html("OFF")
        $(heater).removeClass()
        $(heater).addClass("text-danger")
    }
    else if (status == true){
        $(heater).html("ON")
        $(heater).removeClass()
        $(heater).addClass("text-success")
    }
    else {
        $(heater).html(`Error  \t\t (${status})`)
        $(heater).css("bg-color", "black")
        $(heater).css("color", "white")
    }
}

/**
 * Displays a toast message on the screen
 * @param {string} id The id or class of the toast to be shown
 */
function showToast(id){
    var toastElList = [].slice.call(document.querySelectorAll(id))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 
}