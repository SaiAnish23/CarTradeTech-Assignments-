
const button = document.getElementById("btn")


document.getElementById("pass1").addEventListener('click', (e) => {
    console.log("icon clicked")
    const passowrd = document.getElementById("password")
    const image = document.getElementById("pass1")


    if (passowrd.type == "text") {

        passowrd.type = "password"
        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADmklEQVR4nO2YSYxNQRSGvzYudBvb1KbEvEBiZWXaGiLmGBohkRgiEnZig0aMscNeYg4xkzazQGJKCMGCBdIkpkSj25Mj/00q1637rvc0Lak/qfTtOqdO1ak6569TDwICAgICAgICAv4HtAbGAxuAo8BDoAaoVatR3xHpjAPKaCQoA+YB1cA3IPebzcacA+b+K6d6AduA97GF3QM2AxOBQUA7oLmafQ8GJgHrgStAnTPWbG0BevwNBzoCO4AvMQfWABUF2CuXU66tWmC7ZA2COcBbTfbdCaUDRdotAY7JVp1s2/cboJI/HEannR27CozVqXyVPAkTgIvAJ7ULIoMk9NXGfJPtS858J4GexToxHfjg7NBc7eBC9e3xjNuYkuBVnjH7JF+s/yvFdDmtYVohDjRTMkeTnwU6O/IT6p/hOYl8bGXUG8dsyU45fZ2caPguIrG1ZUJbhUEUs6uBJjGdF5L3SRh/MYMj5xPG9ZPseazf5l7lMFy11piKrqLQnI51tEevVjqtEmQfMzhioRJHqWSfPXOOckLtDtDF54Ql1DMp2t/+KQ5HeVP2Bx0xWz5ZhP7OGp8m3Tnm3WMp3E7zVngk3SRno7BMaxYecQyQzMqYfFFzR7qP4mu9LsFdoAP5cTIl2cdncMQoNo5Zkh3PMH+51mr611zBNXXej7GTD0ukv9cjr0pxYq1nzH7JF2WYv7PW+osjbmg90PGlobsuL7sUe3t0xomdPqpVe04iuhDNltnslmfuCoVfYmhFyf7UUfAtMMJu6R6keByWrZ159Po4G/4krcDs6sSeUd3wPDsTsdeKwn1gpWy8y0MyI1VdZCWkn5dNtQbYcS9TWYInset1Wa0o0Ik62fCFnc293Km47f3SJusEzfQ2yDlMYiV8EpZqIaZ3yHPbJ+VEFE71Io8kdHLKIStRNgFNKbJofKlSvsST2NEj64sYaCYwUDd2qb5nqez/6oRT0kmUqEB95VySUykSFXpnR6dzAxjm4fYdGZ+8prPLw45D9VTIOUWk76lQECqdZKvXDwwjEvS66S44ISqP6PeBQnSRh2KtljrmhGmNKuIGQbnK+6hotHYTmA+0L8CeVRELgFuOvc/A1owVRtHoITJwf3ywuL8MrAMmA0O0mBZAS31b3xTd/FdiYWj5sinDhdggKFNSnnUS+HeajTkjEjFCaBQoFQNViVotJ147P9C9Vt9h6YxpTIsPCAgICAgICAjAix96n4B9AZJO9gAAAABJRU5ErkJggg=="
    } else {
        passowrd.type = "text"

        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO2UvU5CQRCFv4poxELFzkIT8TVAan9ewehDGJFefBsE30ILLbil2lzt4QEwk5xCNzOXxcJQ8CWT3MycM7uZ3buwYtnZBq6AIVAAU0Wh3KU0C7MO9NRsNidMcytPFnvAc0bjWRKvwMG85kfAl2MeAC1gQ9HWiFKdeZtR813gwzFdV2yo6+jfgYYnfgx2btSAe+ATKIG+csbI8T2QcB7MtaV636lZzjgOvKc/FygCUV310qlZztgMvON/XeAsELUrRnSnWifwnqTn4F27oWo1LVI6h1x1OX7R0BVLxV1ieo7+DdiJDM3gRxvpttQVnWDn5j0k46l4+sNT8QLsk8maRjPNaDwBbuRZmC3gQoc2VrOJvgeqmWbFEvMNriXJVcp1zQIAAAAASUVORK5CYII="
    }


})


document.getElementById("pass2").addEventListener('click', (e) => {
    // console.log("icon clicked")
    const passowrd = document.getElementById("confpassword")
    const image = document.getElementById("pass2")


    if (passowrd.type == "text") {

        passowrd.type = "password"
        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADmklEQVR4nO2YSYxNQRSGvzYudBvb1KbEvEBiZWXaGiLmGBohkRgiEnZig0aMscNeYg4xkzazQGJKCMGCBdIkpkSj25Mj/00q1637rvc0Lak/qfTtOqdO1ak6569TDwICAgICAgICAv4HtAbGAxuAo8BDoAaoVatR3xHpjAPKaCQoA+YB1cA3IPebzcacA+b+K6d6AduA97GF3QM2AxOBQUA7oLmafQ8GJgHrgStAnTPWbG0BevwNBzoCO4AvMQfWABUF2CuXU66tWmC7ZA2COcBbTfbdCaUDRdotAY7JVp1s2/cboJI/HEannR27CozVqXyVPAkTgIvAJ7ULIoMk9NXGfJPtS858J4GexToxHfjg7NBc7eBC9e3xjNuYkuBVnjH7JF+s/yvFdDmtYVohDjRTMkeTnwU6O/IT6p/hOYl8bGXUG8dsyU45fZ2caPguIrG1ZUJbhUEUs6uBJjGdF5L3SRh/MYMj5xPG9ZPseazf5l7lMFy11piKrqLQnI51tEevVjqtEmQfMzhioRJHqWSfPXOOckLtDtDF54Ql1DMp2t/+KQ5HeVP2Bx0xWz5ZhP7OGp8m3Tnm3WMp3E7zVngk3SRno7BMaxYecQyQzMqYfFFzR7qP4mu9LsFdoAP5cTIl2cdncMQoNo5Zkh3PMH+51mr611zBNXXej7GTD0ukv9cjr0pxYq1nzH7JF2WYv7PW+osjbmg90PGlobsuL7sUe3t0xomdPqpVe04iuhDNltnslmfuCoVfYmhFyf7UUfAtMMJu6R6keByWrZ159Po4G/4krcDs6sSeUd3wPDsTsdeKwn1gpWy8y0MyI1VdZCWkn5dNtQbYcS9TWYInset1Wa0o0Ik62fCFnc293Km47f3SJusEzfQ2yDlMYiV8EpZqIaZ3yHPbJ+VEFE71Io8kdHLKIStRNgFNKbJofKlSvsST2NEj64sYaCYwUDd2qb5nqez/6oRT0kmUqEB95VySUykSFXpnR6dzAxjm4fYdGZ+8prPLw45D9VTIOUWk76lQECqdZKvXDwwjEvS66S44ISqP6PeBQnSRh2KtljrmhGmNKuIGQbnK+6hotHYTmA+0L8CeVRELgFuOvc/A1owVRtHoITJwf3ywuL8MrAMmA0O0mBZAS31b3xTd/FdiYWj5sinDhdggKFNSnnUS+HeajTkjEjFCaBQoFQNViVotJ147P9C9Vt9h6YxpTIsPCAgICAgICAjAix96n4B9AZJO9gAAAABJRU5ErkJggg=="
    } else {
        passowrd.type = "text"

        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO2UvU5CQRCFv4poxELFzkIT8TVAan9ewehDGJFefBsE30ILLbil2lzt4QEwk5xCNzOXxcJQ8CWT3MycM7uZ3buwYtnZBq6AIVAAU0Wh3KU0C7MO9NRsNidMcytPFnvAc0bjWRKvwMG85kfAl2MeAC1gQ9HWiFKdeZtR813gwzFdV2yo6+jfgYYnfgx2btSAe+ATKIG+csbI8T2QcB7MtaV636lZzjgOvKc/FygCUV310qlZztgMvON/XeAsELUrRnSnWifwnqTn4F27oWo1LVI6h1x1OX7R0BVLxV1ieo7+DdiJDM3gRxvpttQVnWDn5j0k46l4+sNT8QLsk8maRjPNaDwBbuRZmC3gQoc2VrOJvgeqmWbFEvMNriXJVcp1zQIAAAAASUVORK5CYII="
    }


})

const username = document.getElementById("username")
const passowrd = document.getElementById("password")
const confpassowrd = document.getElementById("confpassword")
const email = document.getElementById("email")


document.getElementById("username").addEventListener('input', (e) => {
    console.log("typing")

    isUserNameCorrect(username)
})


document.getElementById("password").addEventListener('input', (e) => {
    isCorrectPassword(passowrd)
})


document.getElementById("confpassword").addEventListener('input', (e) => {
    isCorrectConfirmPassword(confpassowrd, passowrd)
})


document.getElementById("email").addEventListener("input", (e) => {
    isValidEmail(email)
})


button.addEventListener("click", (e) => {
    e.preventDefault()
    const username = document.getElementById("username")
    const passowrd = document.getElementById("password")

    var flag = true
    if (!isUserNameCorrect(username)) {
        flag = false;
    }

    if (!isCorrectPassword(passowrd)) {
        flag = false
    }


    if (!isValidEmail(email)) {
        flag = false
    }

    if (!isCorrectConfirmPassword(confpassowrd, passowrd)) {
        flag = false;
    }

    // console.log("flag123", flag)
    if (flag) {
        password.value = ""
        email.value = ""
        confpassword.value = ""
        username.value = ""


        alert("You Are successfully sign-up")
    }


})

function isUserNameCorrect(username) {
    const user = username.value
    if (user.length >= 3 && user.length <= 25) {
        const usernameValidator = document.getElementById("usernameValidator")
        username.style.border = "2px solid green"
        usernameValidator.style.display = "none"
        return true;
    } else {
        const usernameValidator = document.getElementById("usernameValidator")
        username.style.border = "2px solid red"
        usernameValidator.style.display = "block"
        return false
    }
}


function isCorrectPassword(passoword) {
    const pass = passoword.value

    let flag = false;

    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;

    if (pass.length >= 8) {
        for (let i = 0; i < pass.length; i++) {
            // console.log(pass[i], "->")
            if (isCapital(pass[i])) {
                flag1 = true;
            } else if (isSmall(pass[i])) {
                flag2 = true;
            } else if (isNumber(pass[i])) {
                flag3 = true;
            } else if (isSpecical(pass[i])) {
                flag4 = true;

            }
        }
    }
    // console.log("flag1" , flag1)
    // console.log("flag2" , flag2)
    // console.log("fla3" , flag3)
    // console.log("flag4" , flag4)
    if (flag1 && flag2 && flag3 && flag4) {
        flag = true;
    }


    if (!flag) {
        const passowordvalidator = document.getElementById("passwordValidator")
        passoword.style.border = "2px solid red"
        passowordvalidator.style.display = "block"
    } else {
        const passowordvalidator = document.getElementById("passwordValidator")
        passoword.style.border = "2px solid green"
        passowordvalidator.style.display = "none"

    }



    return flag




}



/* Basic email validator  need to learn regex */



function isValidEmail(email) {
    const emailValue = email.value.trim()
    // console.log(emailValue)


    const emailValidator = document.getElementById("emailValidator")

    if (emailValue === "") {
        email.style.border = "2px solid red"
        emailValidator.style.display = "block"
        return false
    }


    email.style.border = "2px solid green"
    emailValidator.style.display = "none"
    return true
}


function isCorrectConfirmPassword(confpassowrd, passoword) {

    const conf = confpassowrd.value
    const pass = passoword.value


    //   console.log(conf ,  " " , pass)

    if (confpassowrd.value === passoword.value) {

        const confirmValidator = document.getElementById("confpasswordValidator")
        confpassowrd.style.border = "2px solid green"
        confirmValidator.style.display = "none"
        return true
    } else {
        const confirmValidator = document.getElementById("confpasswordValidator")
        confpassowrd.style.border = "2px solid red"
        confirmValidator.style.display = "block"
        return false
    }
}



/*  Various validation*/


function isCapital(pass) {

    if (pass >= 'A' && pass <= 'Z') {
        return true;
    } else {
        return false;
    }


}

function isSmall(pass) {

    if (pass >= 'a' && pass <= 'z') {
        return true;
    } else {
        return false;
    }
}


function isNumber(pass) {
    if (pass >= '0' && pass <= '9') {
        return true;
    } else {
        return false;
    }
}


function isSpecical(pass) {
    const special = "(!@#$%^&*)"
    if (special.includes(pass)) {
        return true;
    } else {
        return false;
    }
}



