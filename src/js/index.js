// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// botón menu

const toggleMenuElement = document.getElementById('toggle-menu');
const mainNavElement = document.getElementById('main-nav');

const handleClick = () => {
    mainNavElement.classList.toggle('hide');
}

toggleMenuElement.addEventListener('click', handleClick);


// recetas con DOM

const recetasData = [
  {
    imagen: "assets/images/receta1.jpg",
    nombre: "Hamburguesa clásica",
    tiempo: "Tiempo: 30 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "fast",
    país: "EE. UU.",
  },
  {
    imagen: "assets/images/receta2.jpg",
    nombre: "Pizza de pepperoni",
    tiempo: "Tiempo: 45 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "italiana",
    país: "Italia",
  },
  {
    imagen: "assets/images/receta3.jpg",
    nombre: "Ensalada César",
    tiempo: "Tiempo: 15 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Francia",
  },
  {
    imagen: "assets/images/receta4.jpg",
    nombre: "Tacos de pescado",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "México",
  },
  {
    imagen: "assets/images/receta5.jpg",
    nombre: "Sopa de tomate",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Italia",
  },
  {
    imagen: "assets/images/receta6.jpg",
    nombre: "Lasaña de carne",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "carne",
    país: "Italia",
  },
  {
    imagen: "assets/images/receta7.jpg",
    nombre: "Sushi de salmón",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "Japón",
  },
  {
    imagen: "assets/images/receta8.jpg",
    nombre: "Pollo a la parrilla",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "carne",
    país: "España",
  },
  {
    imagen: "assets/images/receta9.jpg",
    nombre: "Tarta de manzana",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Francia",
  },
  {
    imagen: "assets/images/receta10.jpg",
    nombre: "Pasta Alfredo",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "italiana",
    país: "Italia",
  },
  {
    imagen: "assets/images/receta11.jpg",
    nombre: "Enchiladas de pollo",
    tiempo: "Tiempo: 45 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "carne",
    país: "México",
  },
  {
    imagen: "assets/images/receta12.jpg",
    nombre: "Pastel de chocolate",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Francia",
  },
  {
    imagen: "assets/images/receta13.jpg",
    nombre: "Sopa de fideos",
    tiempo: "Tiempo: 30 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañantes",
    país: "China",
  },
  {
    imagen: "assets/images/receta14.jpg",
    nombre: "Alitas de pollo",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "carne",
    país: "España",
  },
  {
    imagen: "assets/images/receta15.jpg",
    nombre: "Risotto de champiñones",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "Italia",
  },
  {
    imagen: "assets/images/receta16.jpg",
    nombre: "Ensalada de quinoa",
    tiempo: "Tiempo: 20 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañantes",
    país: "Perú",
  },
  {
    imagen: "assets/images/receta17.jpg",
    nombre: "Tacos al pastor",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "México",
  },
  {
    imagen: "assets/images/receta18.jpg",
    nombre: "Pastel de zanahoria",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Inglaterra",
  },
  {
    imagen: "assets/images/receta19.jpg",
    nombre: "Ramen",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "Japón",
  },
  {
    imagen: "assets/images/receta20.jpg",
    nombre: "Ceviche de camarón",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "pescado",
    país: "Perú",
  },
  {
    imagen: "assets/images/receta21.jpg",
    nombre: "Paella",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "plato principal",
    país: "España",
  },
  {
    imagen: "assets/images/receta22.jpg",
    nombre: "Fish and Chips",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "EE. UU.",
  },
  {
    imagen: "assets/images/receta23.jpg",
    nombre: "Tacos de carnitas",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "México",
  },
  {
    imagen: "assets/images/receta24.jpg",
    nombre: "Sushi tempura",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "Japón",
  },
  {
    imagen: "assets/images/receta25.jpg",
    nombre: "Tortilla española",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "España",
  },
  {
    imagen: "assets/images/receta26.jpg",
    nombre: "Samosa",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "aperitivo",
    país: "India",
  },
  {
    imagen: "assets/images/receta27.jpg",
    nombre: "Poutine",
    tiempo: "Tiempo: 30 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Francia",
  },
  {
    imagen: "assets/images/receta28.jpg",
    nombre: "Baguette",
    tiempo: "Tiempo: 2 horas",
    dificultad: "Dificultad: Moderada",
    tipo: "panes",
    país: "Francia",
  },
  {
    imagen: "assets/images/receta29.jpg",
    nombre: "Pan con tomate",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Fácil",
    tipo: "panes",
    país: "España",
  },
  {
    imagen: "assets/images/receta30.jpg",
    nombre: "Paella de mariscos",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "marisco",
    país: "España",
  },
];

  let allRecetas = [...recetasData];
  let recetasFiltradas = [...recetasData];

  const mostrarRecetas = (recetas) => {
    const recetasContainer = document.getElementById("recetas-container");
    recetasContainer.innerHTML = "";

    for (let i = 0; i < recetas.length; i++) {
      const receta = recetas[i];
      const recetaDiv = document.createElement("div");
      recetaDiv.classList.add("receta");
  
      const recetaImagen = document.createElement("img");
      recetaImagen.src = receta.imagen;
      recetaImagen.alt = receta.nombre;
      recetaImagen.classList.add("receta-imagen");
  
      const recetaNombre = document.createElement("h2");
      recetaNombre.textContent = receta.nombre;
      recetaNombre.classList.add("receta-nombre");
  
      const recetaDetalles = document.createElement("div");
      recetaDetalles.classList.add("receta-detalles");
  
      const recetaTiempo = document.createElement("p");
      recetaTiempo.textContent = receta.tiempo;
      recetaTiempo.classList.add("receta-tiempo");
  
      const recetaDificultad = document.createElement("p");
      recetaDificultad.textContent = receta.dificultad;
      recetaDificultad.classList.add("receta-dificultad");
  
      recetaDetalles.appendChild(recetaTiempo);
      recetaDetalles.appendChild(recetaDificultad);
  
      recetaDiv.appendChild(recetaImagen);
      recetaDiv.appendChild(recetaNombre);
      recetaDiv.appendChild(recetaDetalles);
  
      recetasContainer.appendChild(recetaDiv);
    }
  };
  
  mostrarRecetas(allRecetas);
  


  // filtro botón banner

  const filterButton = document.getElementById("banner-button");
  const filterButtons = document.querySelectorAll(".banner-options button");
  const recetas = document.querySelectorAll(".main__recetas .receta");
  const bannerOptions = document.querySelector(".banner-options");

  const toggleFilterOptions = () => {
    bannerOptions.hidden = !bannerOptions.hidden;
  };
  

  const handleFilterClick = (event) => {
    const filtro = event.target.dataset.filter;
    if (event.target.tagName !== "BUTTON") return;
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].classList.remove("active");
    }
    event.target.classList.add("active");
    for (let i = 0; i < recetas.length; i++) {
      recetas[i].classList.remove("hide");
    }
  
    filterRecetas(filtro);
  };

  const filterRecetas = (filtro) => {
    if (filtro === "all") {
      mostrarRecetas(allRecetas);
    } else if (filtro === "popular") {
      for (let i = 8; i < recetas.length; i++) {
        recetas[i].classList.add("hide");
      }
    } else if (filtro === "recent") {
      for (let i = 0; i < recetas.length; i++) {
        if (i < 8 || i >= 16) {
          recetas[i].classList.add("hide");
        }
      }
    } else if (filtro === "recommended") {
      for (let i = 0; i < 16; i++) {
        recetas[i].classList.add("hide");
      }
    }
  };


// botones iconos banner: al pulsar en uno de ellos tiene que mostrarte las recetas que estén hechas con eso.

const recipesContainer = document.getElementById("recipes-container");

const encuentrameAlHijo = (element, className) => {
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }
  return element;
};

const handleIconClick = (tipo) => {
  const recetasFiltradas = recetasData.filter((receta) => receta.tipo === tipo);
  mostrarRecetas(recetasFiltradas);
};

recipesContainer.addEventListener("click", (event) => {
  const clickedRecipe = encuentrameAlHijo(event.target, "banner__recipe");
  if (!clickedRecipe) return;

  const tipo = clickedRecipe.dataset.tipo;
  handleIconClick(tipo);
});

// poner al padre el click y usar e.event.target


// listeners filtro

filterButton.addEventListener("click", toggleFilterOptions);
bannerOptions.addEventListener("click", handleFilterClick);


// hacer un filtro para pais, tipo de plato... tipos, select y options
// utilizar el select para que se despliegue, con un evento de change, que es con lo que filtras

// firebase para el inicio de sesión -> investigar iniciar sesion, crear recetas, etc