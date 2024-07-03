<template>
    <div class="item">
        <div class="media">
            <video muted autoplay loop>
            <source src="@/assets/videos/potatocop-demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video> 
        </div>
        <div class="content">
            <h2>Potato Cop</h2>
            <p>Adventure / Bullet Hell Game. Available On Steam.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    font-size: 2rem;
}

.item {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #1a1927;
    padding: 5rem;
}

.media {
    width: 50%;

    video {
        width: 100%;
        box-shadow: 2px 2px 8px black;
    }
}

.content {
    width: 50%;
    padding-left: 2rem;
    color: #f0f0f0;
    * {
        text-shadow: 2px 2px 8px black;
    }
}
</style>