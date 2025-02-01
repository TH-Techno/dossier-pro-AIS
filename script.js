document.addEventListener("DOMContentLoaded", function() {
    /*******************************************************
     * Sections collapsibles
     *******************************************************/
    const collapsibleHeaders = document.querySelectorAll('.collapsible');
    collapsibleHeaders.forEach(header => {
      header.style.cursor = 'pointer';
      let content = header.nextElementSibling;
      if (content) content.style.display = "none";
      header.addEventListener('click', function() {
        if (content.style.display === "none") {
          content.style.display = "block";
          header.classList.add('active');
        } else {
          content.style.display = "none";
          header.classList.remove('active');
        }
      });
    });
  
    /*******************************************************
     * Bouton "Scroll to Top"
     *******************************************************/
    const scrollBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function() {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    /*******************************************************
     * Table des Matières (TOC) dynamique avec live search
     *******************************************************/
    const tocContainer = document.getElementById("toc");
    if (tocContainer) {
      const tocSearch = document.createElement("input");
      tocSearch.type = "text";
      tocSearch.placeholder = "Rechercher...";
      tocSearch.className = "toc-search";
      tocContainer.appendChild(tocSearch);
      
      const tocList = document.createElement("ul");
      const headings = document.querySelectorAll(".main-content h2, .main-content h3");
      headings.forEach((heading, index) => {
        if (!heading.id) heading.id = "heading-" + index;
        const li = document.createElement("li");
        li.className = heading.tagName.toLowerCase();
        const a = document.createElement("a");
        a.href = "#" + heading.id;
        a.textContent = heading.textContent;
        a.addEventListener("click", function(e) {
          e.preventDefault();
          document.getElementById(heading.id).scrollIntoView({ behavior: "smooth" });
        });
        li.appendChild(a);
        tocList.appendChild(li);
      });
      tocContainer.appendChild(tocList);
  
      tocSearch.addEventListener("input", function() {
        const filter = tocSearch.value.toLowerCase();
        const items = tocList.querySelectorAll("li");
        items.forEach(item => {
          item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
        });
      });
    }
  
    /*******************************************************
     * Reveal on Scroll via Intersection Observer
     *******************************************************/
    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add("visible"));
    }
  
    /*******************************************************
     * Copy to Clipboard pour les blocs de code
     *******************************************************/
    document.querySelectorAll("pre").forEach(pre => {
      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.className = "copy-btn";
      pre.appendChild(copyBtn);
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(pre.innerText)
          .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = "Copy", 2000);
          })
          .catch(err => console.error("Erreur lors de la copie:", err));
      });
    });
  
    /*******************************************************
     * Effet 3D avec Three.js dans le header
     *******************************************************/
   // Initialisation de la scène Three.js dans le header
    const canvas = document.getElementById("three-canvas");
    if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Créer un cube en mode wireframe
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
    }

  
    /*******************************************************
     * Live IT News via NewsAPI.org
     *******************************************************/
    function loadITNews() {
      const newsContainer = document.getElementById("news-container");
      const apiKey = "9a0815b7dce6423fbedb041fac98caac";
      const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9a0815b7dce6423fbedb041fac98caac`;
    
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.status === "ok" && data.articles.length > 0) {
            let table = document.createElement("table");
            let thead = document.createElement("thead");
            let headerRow = document.createElement("tr");
            ["Date", "Titre"].forEach(text => {
              let th = document.createElement("th");
              th.textContent = text;
              headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);
    
            let tbody = document.createElement("tbody");
            data.articles.forEach(article => {
              let tr = document.createElement("tr");
              let dateTd = document.createElement("td");
              let publishedAt = new Date(article.publishedAt);
              dateTd.textContent = publishedAt.toLocaleDateString("fr-FR");
              let titleTd = document.createElement("td");
              let link = document.createElement("a");
              link.href = article.url;
              link.target = "_blank";
              link.textContent = article.title;
              titleTd.appendChild(link);
              tr.appendChild(dateTd);
              tr.appendChild(titleTd);
              tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            newsContainer.innerHTML = "";
            newsContainer.appendChild(table);
          } else {
            newsContainer.innerHTML = "<p>Aucune news trouvée.</p>";
          }
        })
        .catch(error => {
          console.error("Erreur lors du chargement des news:", error);
          newsContainer.innerHTML = "<p>Erreur de chargement des news.</p>";
        });
    }
    loadITNews();
    setInterval(loadITNews, 5 * 60 * 1000);
  });
  
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", function() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
  