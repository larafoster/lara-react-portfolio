
(function () {  
    function menuToggle()
    {
        var windowWidth = $(window).width();
        if(windowWidth > 991 ){
            $(window).on('scroll', function(){
                if( $(window).scrollTop()>735 ){
                    $('.main-section .navbar').addClass('fixed-top animated fadeInDown');
                } else {
                    $('.main-section .navbar').removeClass('fixed-top animated fadeInDown');
                };
            });
        }else{
            
            $('.main-section .navbar').addClass('fixed-top');
                
        };  
    }

    menuToggle();
}()); 


import React from "react";

const NavScroll = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("section-page");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
  
      var href = window.location.href.substring(
        window.location.href.lastIndexOf("#/") + 2
      );
      var hrefId = href.substring(href.lastIndexOf("#") + 1);
      if (href.lastIndexOf("#") > 0) {
        document.getElementById(hrefId).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
// this function is used to make the right bullets list
    // (the bellow <nav id="cd-vertical-nav">)
    // active when changeing the section on scroll
    const updateView = () => {
        var contentSections = document.getElementsByClassName("cd-section");
        var navigationItems = document
          .getElementById("cd-vertical-nav")
          .getElementsByTagName("a");
  
        for (let i = 0; i < contentSections.length; i++) {
          var activeSection =
            parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
          if (
            contentSections[i].offsetTop - window.innerHeight / 2 <
              window.pageYOffset &&
            contentSections[i].offsetTop +
              contentSections[i].scrollHeight -
              window.innerHeight / 2 >
              window.pageYOffset
          ) {
            navigationItems[activeSection].classList.add("is-selected");
          } else {
            navigationItems[activeSection].classList.remove("is-selected");
          }
        }
      };
  
      window.addEventListener("scroll", updateView);
      return function cleanup() {
        document.body.classList.remove("section-page");
        window.removeEventListener("scroll", updateView);
      };
    });
    return (
      <>
        <WhiteNavbar />
        <div className="section-space" />
        <SectionHeader />
        <SectionFeature />
        <SectionBlog />
        <SectionTeam />
        <SectionProject />
        <SectionPricing />
        <SectionTestimonials />
        <SectionContactUs />
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                data-number="1"
                href="#headers"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("headers").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Headers</span>
              </a>
            </li>
            <li>
              <a
                data-number="2"
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("features").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Our Mission</span>
              </a>
            </li>
            <li>
              <a
                data-number="3"
                href="#blogs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("blogs").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Our Promises</span>
              </a>
            </li>
            <li>
              <a
                data-number="4"
                href="#teams"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("teams").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Our Sponsors</span>
              </a>
            </li>
            <li>
              <a
                data-number="5"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Projects</span>
              </a>
            </li>
            <li>
              <a
                data-number="6"
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Pricing</span>
              </a>
            </li>
            <li>
              <a
                data-number="7"
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("testimonials").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Testimonials</span>
              </a>
            </li>
            <li>
              <a
                data-number="8"
                href="#contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-us").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>

export default NavScroll;