
class Cursor {
    constructor() {
        this.initCursor();
        this.initHovers();
    }

    initCursor() {
        const {
            Back
        } = window;
        this.innerCursor = document.querySelector(".circle-cursor--inner");
        this.easing = Back.easeOut.config(1.7);
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;

        const unveilCursor = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY,
                scale: 0.5
            });

            this.showCursor = true;
        };
        document.addEventListener("mousemove", unveilCursor);

        document.addEventListener("mousemove", e => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        });

        const render = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY,
            });

            if (this.showCursor) {
                document.removeEventListener("mousemove", unveilCursor);
            }
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    }

    initHovers() {
        const handleMouseEnter = e => {
            const target = e.currentTarget;
            const box = target.getBoundingClientRect();

            TweenMax.to(this.innerCursor, 0.4, {
                scale: 1
            });

            this.innerCursor.classList.add('active');
        };

        const handleMouseLeave = () => {
            this.isStuck = false;

            TweenMax.to(this.innerCursor, 0.2, {
                scale: 0.5
            });

            this.innerCursor.classList.remove('active');
        };

        const linkItems = document.querySelectorAll(".cta");
        linkItems.forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        const tlHoverTween = new TimelineMax({paused:true});
              tlHoverTween.to(this.innerCursor, 0.2, { backgroundColor: "rgba(255,255, 255, 1)", borderColor: 'none', ease: this.easing}, 0);

        const darkElmentsMouseEnter = () => {
            tlHoverTween.play();
        };

        const darkElmentsMouseLeave = () => {

            tlHoverTween.reverse().timeScale(1);
        };

        const mainNavLinks = document.querySelectorAll(".darkEl");
        mainNavLinks.forEach(item => {
            item.addEventListener("mouseenter", darkElmentsMouseEnter);
            item.addEventListener("mouseleave", darkElmentsMouseLeave);
        });
    }
}

export default Cursor;
