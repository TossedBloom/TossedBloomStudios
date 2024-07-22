<template>
    <div class="item" :style="[`backgroundColor: ${project.style.backgroundColor}`]">
        <div class="media desktop-media">
            <img v-if="project.media.type === 'image'" :src="project.media.url">
            <template v-else>
                <video muted autoplay loop>
                    <source :src="project.media.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video> 
            </template>
        </div>

        <div class="content" :style="[`color: ${project.style.textColor}`]">
            <h2>{{project.title}}</h2>
            <div class="media mobile-media">
                <img v-if="project.media.type === 'image'" :src="project.media.url">
                <template v-else>
                    <video muted autoplay loop>
                        <source :src="project.media.url" type="video/mp4">
                        Your browser does not support the video tag.
                    </video> 
                </template>
            </div>
            <p>{{project.subheader}}</p>
            <template v-if="project.cta">
                <a v-if="project.cta.blank " class="button" :href="project.cta.to" target="_blank">
                    {{project.cta.text}}
                </a>
                <router-link v-else class="button" :to="project.cta.to">
                    {{project.cta.text}}
                </router-link>
            </template>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    project: {
        type: Object
    }
})
</script>

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
        max-width: 600px;
        width: 100%;
        box-shadow: 2px 2px 8px black;
    }

    img {
        width: 100%;
        max-width: 600px;
    }
}

.content {
    width: 50%;
    padding-left: 2rem;
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

.desktop-media {
    display: block;
}

.mobile-media {
    display: none;
    margin-bottom: 2rem;
}

@media only screen and (max-width: 774px) {
    .desktop-media {
        display: none;
    }

    .mobile-media {
        display: block;
    }
    
    .media {
        width: 100%;
    }

    .content {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }

    h2 {
        font-size: 2.5rem;
    }

    .item {
        padding: 2.5rem;
    }
}
</style>