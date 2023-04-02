let signedIn = false // определяет поведение кнопки профиля

function roomFocus(x) {
    // эта функция выделяет карточку, на которую пользователь навел курсор
    for (const roomcard of document.getElementById("roomCards").children) {
            roomcard.style.width = "192px"
            roomcard.style.height = "256px"
            roomcard.style.zIndex = "0"
            roomcard.style.top = "0"
        }
    let pickedCard = document.getElementById("roomCards").children[x - 1]
    pickedCard.style.width = "208px"
    pickedCard.style.height = "280px"
    pickedCard.style.zIndex = "1"
    pickedCard.style.top = "11px"

    // изменение индикаторов под карточками
    for (const indicator of document.getElementById("roomcardIndicator").children) {
        indicator.disabled = true
        indicator.checked = false
    }
    document.getElementById("roomcardIndicator").children[x - 1].disabled = false
    document.getElementById("roomcardIndicator").children[x - 1].checked = true
}

function roomFocusReset() {
    // когда курсор уходит с карточек, они возвращаются в исходное положение
        let cards = [   document.getElementById("roomCards").children[0], 
                        document.getElementById("roomCards").children[1], 
                        document.getElementById("roomCards").children[2] ]

        cards[0].style.width = "192px"
        cards[0].style.height = "256px"
        cards[0].style.zIndex = "0"
        cards[0].style.top = "0"

        cards[1].style.width = "208px"
        cards[1].style.height = "280px"
        cards[1].style.zIndex = "1"
        cards[1].style.top = "11px"

        cards[2].style.width = "192px"
        cards[2].style.height = "256px"
        cards[2].style.zIndex = "0"
        cards[2].style.top = "0"

        let indicators = [ document.getElementById("roomcardIndicator").children[0], 
                            document.getElementById("roomcardIndicator").children[1], 
                            document.getElementById("roomcardIndicator").children[2] ]

        indicators[0].disabled = true
        indicators[0].checked = false

        indicators[1].disabled = false
        indicators[1].checked = true

        indicators[2].disabled = true
        indicators[2].checked = false
}

function profileButton() {
    // эта функция будет решать что происходит при клике на кнопку профиля
    // например если пользователь не авторизован, то открыть меню авторизации, а если авторизован, то открыть профиль
    authMenu()
}

function authMenu() {
    // если пользователь вошел в аккаунт, то открыть меню профиля
    // иначе - открыть меню входа
    if (signedIn) openProfile()
    else {
        fog()
        document.getElementById("auth").style.width = "38.2%"
    }
}

function fog() {
    // затенение фона при открытии авторизации
    document.getElementById("authbg").style.width = "100%"
    document.getElementById("authbg").style.backdropFilter = "blur(calc(1vh))"
}

function closeAuth() {
    // когда пользователь кликает на затененную область, меню авторизации закрывается
    document.getElementById("authbg").style.width = "0%"
    document.getElementById("auth").style.width = "0%"
}

function authSwitch(mode) {
    // эта функция переключает меню входа и регестрации
    if (mode == "log") {
        document.getElementById("log").style.color = "white"
        document.getElementById("authLogin").style.display = "initial"

        document.getElementById("reg").style.color = "#CECECE"
        document.getElementById("authRegister").style.display = "none"

    }

    if (mode == "reg") {
        document.getElementById("reg").style.color = "white"
        document.getElementById("authRegister").style.display = "initial"

        document.getElementById("log").style.color = "#CECECE"
        document.getElementById("authLogin").style.display = "none"
    }
}

function signIn() {
    // здесь будет код входа в профиль
    signedIn = true
}

function register() {
    // здесь будет код регистрации
    signedIn = true
}

function openProfile() {
    // вызов меню профиля
    document.getElementById("main").style.display = "none"
    document.getElementById("profile").style.display = "block"
    closeAuth()

    document.getElementById("descLink").style.display = "none"
}

function returnToMain() {
    // по клику на лого сайта возвращает пользователя на главную
    closeProfileMenus();
    document.getElementById("profile").style.display = "none"
    document.getElementById("create").style.display = "none"
    document.getElementById("main").style.display = "block"

    document.getElementById("descLink").style.display = "initial"
}

// следующие 4 функции отвечают за переключение между меню в панели управления профилем
function openEditProfile() {
    closeProfileMenus()
    document.getElementById("editProfile").style.display = "initial"
}

function openCompletedQuests() {
    closeProfileMenus()
    document.getElementById("completedQuests").style.display = "initial"
}

function openCreatedQuests() {
    closeProfileMenus()
    document.getElementById("createdQuests").style.display = "initial"
}

function closeProfileMenus() {
    // сворачивает активные меню перед отображением выбранного меню
    for (e of document.getElementById("profileMenu").children) e.style.display = "none"
}

function signOut() {
    // здесь должен быть выход из профиля
    signedIn = false
    closeProfileMenus()
    returnToMain()
}

function openCreateQuest() {
    closeProfileMenus()
    document.getElementById("main").style.display = "none"
    document.getElementById("create").style.display = "block"
}