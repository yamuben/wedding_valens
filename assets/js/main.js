/**
 * Template Name: Presento - v3.7.0
 * Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
// const select = selectors => {
//   return document.querySelector(selectors);
// };
(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Function to load students
   */
  //selector

  const viewData = (event) => {
    const data = event.target.dataset.userName;
    console.log(data);
    console.log("GGGGGGGGGGGGGGG");
  };

  let allStoryDiv = select("#story-div");
  let allStudents = select("#studentsDisplayContainer");
  let allTeamMatesDiv = select("#teamsDisplayContainer");
  let allBoardMembersDiv = select("#boardDisplayContainer");
  let singleStudentDiv = select("#singleStudentView");

  let currentViewStudentData = studentsData[0];

  const dataTest = [
    { name: "Eric Turatsinze", age: 14 },
    { name: "Eric Turatsinze", age: 14 },
    { name: "Fabrice Turatsinze", age: 14 },
    { name: "Eric John", age: 14 },
  ];
  const setStudent = (student) => {
    console.log("@@@@");
    currentViewStudentData = student;
  };
  const displayStudents = async () => {
    // console.log("@@@@@@@@@@",teamsData)
    studentsData.map((d, i) => {
      if (d.isAvailable) {
        allStudents.innerHTML += `
  <div class="col-lg-3 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap" style="height:400px" id="getOneStudent">
      <img src=${d.Picture} class="img-fluid" alt="">
     <a href="#" > 
       <div class="portfolio-info" id="student-view" data-user-name=${JSON.stringify(
         d.Picture
       )} >
        <h4  >${d.Names}</h4>
        <p>${d.dateOfBirth}</p>
        <div class="portfolio-links" >
          <!-- <a href="assets/img/custom/poverty.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="fa-solid fa-eye"></i></a> -->
          <a href="#" title="More Details" style="font-size: 15px;"> Read more... <i class="bx bx-link"></i></a>
        </div>
      </div></a>
    </div>
  </div>`;
      }
    });
  };
  displayStudents();

  Array.from(document.querySelectorAll("#student-view")).forEach((dv) => {
    // console.log("1111")
    dv.addEventListener("click", function (element) {
      const data = dv.dataset.userName;
      console.log(data);
      // console.log("GGGGGGGGGGGGGGG",)
    });
  });
  const displayTeamMates = async () => {
    // console.log(teamsData,"kkkkkkkkkkkk")
    teamsData?.map((d) => {
      allTeamMatesDiv.innerHTML += `
      <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="100" style="display:flex">
        <div class="" style="width: 45%;">
          <img src=${d?.Picture} class="img-fluid" alt="" style="width: 100%;">
          <div class="social">
            <h1></h1>
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info" style="width:50%" >
          <h4>${d?.Names}</h4>
          <span style="color:black">${d?.Title}</span>
          <span>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            ${d?.Description}
          <i class="bx bxs-quote-alt-right quote-icon-right"></i></span>
        </div>
      </div>
    </div>
      `;
    });
  };
  const displayBoardMembers = async () => {
    // console.log(teamsData,"kkkkkkkkkkkk")
    boardsData?.map((d) => {
      allBoardMembersDiv.innerHTML += `
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="100" style="width:80%; backgroound:green">
        <div class="member-img" style="width:100%;">
          <img src=${d?.Picture} class="img-fluid" alt="" style="width:100%;">
          <div class="social">
            <h1></h1>
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info" style="text-align:center" >
          <h4>${d?.Names}</h4>
          <span style="color:black">${d?.Title}</span>
        </div>
      </div>
    </div>
      `;
    });
  };
  const displaySingleStudent = () => {
    singleStudentDiv.innerHTML = ` 
    <div class="row gy-4">

<div class="col-lg-4">
  <div class="portfolio-details-slider swiper">
    <div class="swiper-wrapper align-items-center">

      <div class="swiper-slide">
        <img src=${currentViewStudentData?.Picture} alt="">
      </div>

    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>

<div class="col-lg-4">
  <div class="portfolio-info">
    <h3>Child Information</h3>
    <ul>
      <li><strong>Names </strong>: Benjamin Iyamuremye</li>
      <li><strong>Age</strong>: 12 years</li>
      <li><strong>Class</strong>: Primary 2</li>
    </ul>
  </div>
  <br>
  <div class="portfolio-info">
    <h3>About Child</h3>
    <p>
      itaque inventore commodi labore</p>
    <p>
      itaque inventore commodi labore </p>
  </div>
  <br>
  <div class="portfolio-info">
    <h3>Child Dreams</h3>
    <ul>
      <p>
        itaque inventore commodi labore</p>
       </ul>
  </div>
</div>
<div class="col-lg-4 portfolio-info">

  <h2>Are you interested?</h2>
  <!-- <div class="portfolio-info"> -->
    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
      <div class="row">
        <div class=" form-group">
          <input type="text" name="name" class="form-control" id="name" placeholder="Your Names" required>
       <br>
        </div>
        <div class=" form-group">
        
        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
      <br>
      </div>
      <div class=" form-group">
      
      <input type="phone" class="form-control" name="phone" id="phone" placeholder="Your Phone (Country Code)" required>
    <br>
    </div>
    <div class=" form-group">
    
    <input type="adress" class="form-control" name="adress" id="adress" placeholder="Your Adress" required>
  <br>
  </div>
  <div class=" form-group">
  
  <input type="donation" class="form-control" name="donation" id="donation" placeholder="Your Monthly Donation ($)" required>
<br>
</div>
      </div>
     
      <div ><button class="get-started-btn" type="submit">Apply</button></div>
    </form>


</div>

</div>`;
  };
  //  displaySingleStudent();

  const displayStory = async () => {
    const response = await fetch(
      "https://shecancodeapplication-api.herokuapp.com/students",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    const addd = await response.json();

    storiesData.map((d) => {
      allStoryDiv.innerHTML += ` <div class="swiper-slide">
  <div class="testimonial-wrap">
    <div class="testimonial-item">
      <img src=${d.picture} class="testimonial-img" alt="" style="width:100%;">
    </div>
  </div>
</div>`;
    });

    // const ddata = require('../data/team.json')
    // console.log("@@2@@:",ddata)
  };
  displayStory();
  displayBoardMembers();

  displayTeamMates();

  // const teamData =require("../data/team.json")

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  function myFfunction() {
    console.log("helloooooo");
  }

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// console.log(teamsData);
