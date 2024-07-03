<template>
    <div class="item">
        <div class="media">
            <video muted autoplay loop>
            <source src="@/assets/videos/potatocop-demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video> 
        </div>
        <div class="content">
            <h2>PotatoDex</h2>
            <p>A glossary for all things Potato Cop.</p>
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
    // background-color: #1a1927;
    background-color: #F5CB5C;
    padding: 5rem;
}

.media {
    width: 50%;

    video {
        width: 100%;
    }
}

.content {
    width: 50%;
    padding-left: 2rem;
    color: #1a1927;
}
</style>