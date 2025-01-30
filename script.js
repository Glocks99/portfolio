window.addEventListener("DOMContentLoaded", () => {


    document.querySelector("nav .fa-bars").addEventListener("click", e => {
        document.querySelector("nav").classList.add("active")
    })

    document.querySelector(".menu .close").addEventListener("click", e => {
        document.querySelector("nav").classList.remove("active")
    })

    document.querySelectorAll("#recents button").forEach(btn => {
        btn.addEventListener("click", e => {
            document.querySelector(".modals").style = "display: initial"
        })
    })

    document.querySelector(".cont .fa-x").addEventListener("click", e => {
        document.querySelector(".modals").style = "display: none"
    })

    document.querySelectorAll(".menu ul li").forEach(link => {
        link.addEventListener("click", e => {
            document.querySelector("nav").classList.remove("active")
        })
    })

    document.querySelector("#hero button").addEventListener("click", e => {
        window.location.href = "#recents"
    })

    window.addEventListener("scroll", e => {
        if (window.scrollY > 178) {
            document.querySelector(".menu ul").style = "display: none"
        }else {
            document.querySelector(".menu ul").style = "display: flex"
        }
    })
})