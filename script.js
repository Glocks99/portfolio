window.addEventListener("DOMContentLoaded", () => {

    const recents = [
        {
            title: "Student Budget Tracker",
            tags: ["React","NodeJS","Express","MongoDB","Vercel","Render"],
            image: "./images/recents/sbt.webp",
            description: "Student Budget Tracker (SBT) is a web application designed to help students efficiently manage their income and expenses. It features a user-friendly dashboard for tracking transactions, authentication capabilities (signup, login, password reset, and email verification), and a secure backend powered by Node.js and Express. The app is deployed on Vercel (front end) and Render (backend), ensuring seamless accessibility. With a minimalistic design and real-time data storage using MongoDB, SBT simplifies personal finance management for students.",
            live: "https://student-budget-tracker.vercel.app/",
            source: "https://github.com/Glocks99/Student-Budget-Tracker"
        },
        {
            title: "Music Player",
            tags: ["html","css","javascript","vercel"],
            image: "./images/recents/music.png",
            description: "This is a fully functional music player built using HTML, CSS, and JavaScript. It allows users to play, pause, and navigate between songs with next and previous controls. The player also features a filtering system for searching songs, a responsive UI for a seamless experience across devices, and additional functionalities such as volume control and progress tracking. With a clean design and smooth animations, this project showcases interactive web development skills.",
            live: "https://music-player-kappa-vert.vercel.app/",
            source: "https://github.com/Glocks99/music-player"
        },
        {
            title: "Adv Todo List",
            tags: ["html","css","javascript","Vercel"],
            image: "./images/recents/todo.png",
            description: "The Advanced To-Do List is a feature-rich task management web app designed for better productivity. It includes functionalities such as adding, editing, and deleting tasks, marking tasks as completed, filtering tasks by status (pending/completed), and setting due dates. The app uses local storage to save tasks persistently and features a sleek, responsive UI for a smooth user experience. With its intuitive design and enhanced functionality, this project demonstrates advanced JavaScript handling and UI/UX design skills.",
            live: "https://adv-todo-list.vercel.app/",
            source: "https://github.com/Glocks99/Adv-TodoList"
        },
    ]

    document.querySelector("nav .fa-bars").addEventListener("click", e => {
        document.querySelector("nav").classList.add("active")
    })

    document.querySelector(".menu .close").addEventListener("click", e => {
        document.querySelector("nav").classList.remove("active")
    })

    document.querySelector(".js-projects-container").addEventListener("click", e => {
        if(e.target.nodeName === "BUTTON"){

            // making the modal dynamic
            const {id} = e.target.dataset
            document.querySelector(".modals").innerHTML = `
                <div class="cont">
                    <div class="">
                        <i class="fa-solid fa-x"></i>
                    </div>

                    <div class="">
                        <h1>${recents[id].title}</h1>

                        <div class="title-tag">
                            ${recents[id].tags.map(item => `<p>${item}</p>`).join("")}
                        </div>
                    </div>

                    <div class="deets">
                        ${recents[id].description}
                    </div>

                    <div class="">
                        <a href="${recents[id].live}" class="button">
                            See Live <img src="./images/mobile/live.png" alt="" />
                        </a>
                        <a href="${recents[id].source}" class="button">
                            See Source <img src="./images/mobile/github.svg" alt="" />
                        </a>
                    </div>
            </div>
            `
            document.querySelector(".modals").style = "display: initial"
            document.querySelector(".cont div:nth-child(1)").style = `background-image: url("${recents[id].image}")`
        }
    })

    document.querySelector(".modals").addEventListener("click", e => {
        if(e.target.className.includes("fa-x")){
            document.querySelector(".modals").style = "display: none"
        }
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

    


// for dynamic recent blocks elements
    let recentBlockHTML = ""
    recents.forEach((block,i) => {
        recentBlockHTML += `
            <div class="project-block">
                <div class="info-image"></div>
                <div class="project-info">
                    <h3>${block.title}</h3>

                    <div class="tags">
                        ${block.tags.map(item => `<p>${item}</p>`).join("")}
                    </div>

                    <button data-id="${i}">See Project</button>
                </div>
            </div>
        `
    })

    document.querySelector(".js-projects-container").innerHTML = recentBlockHTML


    // function for sending mails

    function sendEmail() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        const subject = "Contacting From PortFolio";
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
        window.location.href = `mailto:jameslarbie30@gmail.com?subject=${subject}&body=${body}`;
    }

    document.querySelector("form").addEventListener("submit", () => {
        sendEmail()
    })
    
})