const users = [
  {
    name: "John",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cham%C3%A4leon1.jpg",
    wallpaper: "https://wallpapers.com/images/hd/chameleon-pictures-gind9a2v6xzvanau.jpg"
  },
  {
    name: "Steve",
    img: "https://segredosdomundo.r7.com/wp-content/uploads/2020/04/camaleao-como-muda-de-cor-e-outras-curiosidades-sobre-as-especies.jpeg",
    wallpaper: "https://lh4.googleusercontent.com/proxy/-q1TcWgjsV07RY8eIS7kikVvJQzWmywLr-s9HwJ5vhScjH4Uort7KHLA1gOgN6nbsVUnNgmjBUqgGCrkmp4nB1Gnev-kHZQYCOXC875INgS_3dTRGujxlRCV9zI0ycxJSH1qIaxV30eeSqCdTT2vADOUkQJNgAuRmTcqd0W9"
  },
  {
    name: "Lisboa",
    img: "https://www.petz.com.br/blog/wp-content/uploads/2023/08/Interna-2-porque-camaleao-muda-de-cor-ok.jpg",
    wallpaper: "https://s1.1zoom.me/b6451/19/Chameleon_Green_Branches_525278_1920x1080.jpg"
  },
  {
    name: "Chloe",
    img: "https://jpimg.com.br/uploads/2023/04/veja-as-caracteristicas-do-camaleao-e-saiba-como-cuidar-dele-em-casa.jpg",
    wallpaper: "https://preview.redd.it/kpzra8wnmxy41.jpg?auto=webp&s=3013cfb35a2ed688270dbcf0d7ba601a92863c4c"
  },
  {
    name: "Elon",
    img: "https://revistadigital.com.br/wp-content/uploads/2024/04/AnyConv.com__Por-que-o-camaleao-muda-de-cor-860x487.webp",
    wallpaper: "https://www.10wallpaper.com/wallpaper/1920x1080/1204/chameleon-Animal_photography_HD_wallpaper_1920x1080.jpg"
  }
];

let currentIndex = Math.floor(users.length / 2);
const carousel = document.getElementById("user-carousel");
const loginError = document.getElementById("login-error");
const passwordInput = document.getElementById("password");
const overlay = document.querySelector(".fade-overlay");
const clock = document.getElementById("clock");
const userInfo = document.getElementById("user-info");
const selectedUserImg = document.getElementById("selected-user-img");
const selectedUserName = document.getElementById("selected-user-name");

function renderUsers() {
  carousel.innerHTML = "";
  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "user-card" + (index === currentIndex ? " active" : "");
    card.innerHTML = `<img src="${user.img}" alt="${user.name}" />
                      <span>${user.name}</span>`;
    card.onclick = () => {
      if (index !== currentIndex) {
        selectUser(index);
      }
    };
    card.ondblclick = () => {
      window.location.href = "os.html"; 
    };
    carousel.appendChild(card);
  });
  updateCarousel();
  updateWallpaper();
}

function updateCarousel() {
  const offset = -currentIndex * 180 + 310;
  carousel.style.transform = `translateX(${offset}px)`;
  [...carousel.children].forEach((child, index) => {
    child.classList.toggle("active", index === currentIndex);
  });
}

function selectUser(index) {
  if (index >= 0 && index < users.length) {
    currentIndex = index;
    document.body.classList.add("fade-wallpaper");
    setTimeout(() => {
      updateCarousel();
      updateWallpaper();
      document.body.classList.remove("fade-wallpaper");
    }, 300);
  }
}

function openLoginScreen() {
  document.body.classList.add("logged-in");
  overlay.classList.remove("hidden");
  loginError.textContent = "";

  const user = users[currentIndex];
  selectedUserImg.src = user.img;
  selectedUserName.textContent = user.name;

  
  selectedUserImg.classList.add("shine");

  userInfo.classList.add("visible");
  passwordInput.classList.add("active");
  passwordInput.focus();
}

function goBack() {
  document.body.classList.remove("logged-in");
  overlay.classList.add("hidden");
  passwordInput.classList.remove("active");
  passwordInput.value = "";
  loginError.textContent = "";
  userInfo.classList.remove("visible");
}


function updateWallpaper() {
  const user = users[currentIndex];
  document.body.style.backgroundImage = `url('${user.wallpaper}')`;
}

function tickClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(tickClock, 1000);
renderUsers();


  }
});
