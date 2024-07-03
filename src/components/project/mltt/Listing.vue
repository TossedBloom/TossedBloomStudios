<template>
    <div class="item">
        <div class="media">
            <img src="@/assets/images/tigreal.webp">
        </div>
        <div class="content">
            <h2>Mobile Legends: Tank Tank</h2>
            <p>A tool to assist newer players pick the right hero.</p>
            <p>This project has been sunsetted.</p>
            <a class="button">
                Visit Old Demo
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
    background-color: rgb(30, 33, 57);
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