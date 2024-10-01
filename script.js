<script>
    document.addEventListener('DOMContentLoaded', function () {
        const instructorItems = document.querySelectorAll('.instructor-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class when in view
                    observer.unobserve(entry.target); // Stop observing after it becomes visible
                }
            });
        });

        instructorItems.forEach(item => {
            observer.observe(item); // Observe each instructor item
        });
    });
</script>
