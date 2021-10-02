class AutoPause {
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player){

        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.25
        })
        observer.observe(player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    handleIntersection(entries) {
        const entry = entries[0];
        console.log(entry);
        const isVisible = entry.intersectionRatio >= this.threshold;
        (isVisible) ? this.player.play() : this.player.pause();

    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        console.log(isVisible);
        (isVisible) ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;