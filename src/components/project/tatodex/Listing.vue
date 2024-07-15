<template>
    <div class="item">
        <div class="media">
            <img src="@/assets/images/potato-cop.svg">
        </div>
        <div class="content">
            <h2>PotatoDex</h2>
            <p>A glossary for all things Potato Cop.</p>
            <router-link class="button" to="/potatodex">Visit: PotatoDex</router-link>
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

.button {
    color: #FEFEFE;
    background-color: #003049;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    display: inline-flex;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
}
</style>