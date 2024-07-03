<template>
    <div class="item">
        <div class="media">
            <img src="@/assets/images/penguin-fight.svg">
        </div>
        <div class="content">
            <h2>The Penguin Invasion</h2>
            <p>Are you ready to fight off the penguin invasion? I thought so.</p>
            <p>Prepare yourself!</p>
            <a class="button">
                Read The Penguin Invasion
            </a>
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
    background-color: #C14953;
    padding: 5rem;
}

.media {
    width: 50%;

    img {
        width: 80%;
    }
}

.content {
    width: 50%;
    padding-left: 2rem;
    color: #f0f0f0;
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