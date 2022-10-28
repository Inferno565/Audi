function scrolle() {
    a = window.pageYOffset;
    b = document.getElementById("d1").style.opacity
    if (a > 850) {
        document.getElementById("d1").style.opacity = "1"
        // document.getElementById("d1").translate="(100,200)"
        document.getElementById("d2").style.opacity = "0.2"
        // document.getElementById("d2").style.backgroundImage = "url('/Images/etronGT_Animation_set03_211.webp')"

    }

    if (a > 860) {
        document.getElementById("d1").style.opacity = "0.5"
        document.getElementById("d2").style.opacity = "0.4"
        // document.getElementById("d2").style.backgroundImage = "url('/Images/etronGT_Animation_set03_211.webp')"
    }

    if (a > 870) {
        document.getElementById("d1").style.opacity = "0.4"
        document.getElementById("d2").style.opacity = "0.6"
        // document.getElementById("d2").style.backgroundImage = "url('/Images/indexfifth.png')"

    }

    if (a > 880) {
        document.getElementById("d1").style.opacity = "0.3"
        document.getElementById("d2").style.opacity = "0.8"
    }

    // if (a > 890) {
    //     document.getElementById("d2").style.backgroundImage = "url('/Images/indexfourth.png')"

    // }

    if (a > 900) {
        document.getElementById("d1").style.opacity = "0"
        document.getElementById("d2").style.opacity = "1"
    }

    // if (a > 910) {
    //     document.getElementById("d2").style.backgroundImage = "url('/Images/indexthird.png')"
    // }

    // if (a > 920) {
    //     document.getElementById("d2").style.backgroundImage = "url('/Images/indexsecond.png')"


    // }

    // if (a > 930) {
    //     document.getElementById("d2").style.backgroundImage = "url('/Images/indexlast.png')"
    // }


    if (a < 810) {
        document.getElementById("d1").style.opacity = "1"
        document.getElementById("d2").style.opacity = "0"
        // document.getElementById("d2").style.backgroundImage = "url('/Images/etronGT_Animation_set03_211.webp')"
    }
}