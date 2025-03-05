$(document).ready(function () {
    // Toggle Mobile Navigation
    $('#hamburger').click(function () {
        $('#navbar').toggleClass('active');
    });

    // Toggle Filter Menu on Mobile
    $('#filter-toggle-btn').click(function () {
        $('#filter-buttons').toggleClass('active');
    });

    const projectContainer = $(".project-container");

    // Generate project cards dynamically
    projectContainer.html(projects.map(project => `
        <div class="project-card show" data-category="${project.category}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.tech}</p>
            <div class="carousel">
                ${project.screenshots.map(img => `<img src="${img}" alt="Screenshot">`).join("")}
            </div>
            <a href="${project.report}" class="project-report">View Report</a>
        </div>
    `).join(""));

    // Initialize Slick Carousel AFTER content is added
    $(".carousel").each(function () {
        $(this).slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            adaptiveHeight: true
        });
    });

    // Filtering Functionality
    $(".filter-btn").click(function () {
        let category = $(this).attr("data-category");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        if (category === "all") {
            $(".project-card").addClass("show");
        } else {
            $(".project-card").removeClass("show");
            $(`.project-card[data-category="${category}"]`).addClass("show");
        }
    });
});
