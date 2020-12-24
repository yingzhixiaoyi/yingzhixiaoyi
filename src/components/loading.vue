<template>
<!--    <div>-->
<!--    <div id="loading" v-if="loading&&flag">-->
<!--        <div class="loader">-->
<!--            <div class="loader-inner la-pacman la-2x">-->
<!--                <div></div>-->
<!--                <div></div>-->
<!--                <div></div>-->
<!--                <div></div>-->
<!--                <div></div>-->
<!--                <div></div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    <div id="body" v-if="loading">
        <div class='loader'>
            <div class='loader_overlay'></div>
            <div class='loader_cogs'>
                <div class='loader_cogs__top'>
                    <div class='top_part'></div>
                    <div class='top_part'></div>
                    <div class='top_part'></div>
                    <div class='top_hole'></div>
                </div>
                <div class='loader_cogs__left'>
                    <div class='left_part'></div>
                    <div class='left_part'></div>
                    <div class='left_part'></div>
                    <div class='left_hole'></div>
                </div>
                <div class='loader_cogs__bottom'>
                    <div class='bottom_part'></div>
                    <div class='bottom_part'></div>
                    <div class='bottom_part'></div>
                    <div class='bottom_hole'></div>
                </div>
                <p>loading</p>
            </div>
        </div>
    </div>
<!--    </div>-->
</template>

<script>
    export default {
        name: "loading",
        computed: {
            loading() {
                return this.$store.state.loading
            }
        },
        watch: {
            loading: {
                immediate: true,
                handler: (n, o) => {
                    let htmlBodyElement = document.querySelector('body');
                    htmlBodyElement.style.overflowY = n ? 'hidden' : 'auto';
                }
            }
        }
    }
</script>

<style scoped>
    #body {
        height: 100vh;
        font-family: "微软雅黑";
        text-align: center;
        overflow: hidden;
    }

    h1 {
        text-transform: uppercase;
        font-size: 30px;
        color: #576e81;
        margin: 30px 0px 0px 0px;
    }

    h2 {
        font-weight: normal;
        font-size: 18px;
        color: #f98db9;
        margin: 10px 0px 0px 0px;
    }

    p {
        margin: 0 auto;
    }

    .loader {
        height: 250px;
        position: relative;
        margin: 220px auto;
        width: 400px;
        z-index: 10;
    }

    .loader_overlay {
        width: 150px;
        height: 150px;
        background: transparent;
        box-shadow: 0px 0px 0px 1000px rgba(255, 255, 255, 0.67),
        0px 0px 19px 0px rgba(0, 0, 0, 0.16) inset;
        border-radius: 100%;
        z-index: -1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loader_cogs {
        z-index: -2;
        width: 100px;
        height: 100px;
        top: -120px !important;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loader_cogs__top {
        position: relative;
        width: 100px;
        height: 100px;
        -webkit-transform-origin: 50px 50px;
        transform-origin: 50px 50px;
        -webkit-animation: rotate 10s infinite linear;
        animation: rotate 10s infinite linear;
    }

    .loader_cogs__top div:nth-of-type(1) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
    }

    .loader_cogs__top div:nth-of-type(2) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
    }

    .loader_cogs__top div:nth-of-type(3) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .loader_cogs__top div.top_part {
        width: 100px;
        border-radius: 10px;
        position: absolute;
        height: 100px;
        background: #f98db9;
    }

    .loader_cogs__top div.top_hole {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: white;
        position: absolute;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loader_cogs__left {
        position: relative;
        width: 80px;
        -webkit-transform: rotate(16deg);
        transform: rotate(16deg);
        top: 28px;
        -webkit-transform-origin: 40px 40px;
        transform-origin: 40px 40px;
        -webkit-animation: rotate_left 10s 0.1s infinite reverse linear;
        animation: rotate_left 10s 0.1s infinite reverse linear;
        left: -24px;
        height: 80px;
    }

    .loader_cogs__left div:nth-of-type(1) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
    }

    .loader_cogs__left div:nth-of-type(2) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
    }

    .loader_cogs__left div:nth-of-type(3) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .loader_cogs__left div.left_part {
        width: 80px;
        border-radius: 6px;
        position: absolute;
        height: 80px;
        background: #97ddff;
    }

    .loader_cogs__left div.left_hole {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: white;
        position: absolute;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loader_cogs__bottom {
        position: relative;
        width: 60px;
        top: -65px;
        -webkit-transform-origin: 30px 30px;
        transform-origin: 30px 30px;
        -webkit-animation: rotate_left 10.2s 0.4s infinite linear;
        animation: rotate_left 10.2s 0.4s infinite linear;
        -webkit-transform: rotate(4deg);
        transform: rotate(4deg);
        left: 79px;
        height: 60px;
    }

    .loader_cogs__bottom div:nth-of-type(1) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
    }

    .loader_cogs__bottom div:nth-of-type(2) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
    }

    .loader_cogs__bottom div:nth-of-type(3) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .loader_cogs__bottom div.bottom_part {
        width: 60px;
        border-radius: 5px;
        position: absolute;
        height: 60px;
        background: #ffcd66;
    }

    .loader_cogs__bottom div.bottom_hole {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: white;
        position: absolute;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    /* Animations */
    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate_left {
        from {
            -webkit-transform: rotate(16deg);
            transform: rotate(16deg);
        }
        to {
            -webkit-transform: rotate(376deg);
            transform: rotate(376deg);
        }
    }

    @keyframes rotate_left {
        from {
            -webkit-transform: rotate(16deg);
            transform: rotate(16deg);
        }
        to {
            -webkit-transform: rotate(376deg);
            transform: rotate(376deg);
        }
    }

    @-webkit-keyframes rotate_right {
        from {
            -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
        }
        to {
            -webkit-transform: rotate(364deg);
            transform: rotate(364deg);
        }
    }

    @keyframes rotate_right {
        from {
            -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
        }
        to {
            -webkit-transform: rotate(364deg);
            transform: rotate(364deg);
        }
    }

    #loading {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #F9F9F9;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
    }

    .la-pacman, .la-pacman > div {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .la-pacman {
        display: block;
        font-size: 0;
        color: #d81e06;
    }

    .la-pacman.la-dark {
        color: #333
    }

    .la-pacman > div {
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor
    }

    .la-pacman {
        width: 32px;
        height: 32px
    }

    .la-pacman > div:nth-child(1), .la-pacman > div:nth-child(2) {
        width: 0;
        height: 0;
        background: transparent;
        border-style: solid;
        border-width: 16px;
        border-right-color: transparent;
        border-radius: 100%;
        -webkit-animation: pacman-rotate-half-up 0.5s 0s infinite;
        -moz-animation: pacman-rotate-half-up 0.5s 0s infinite;
        -o-animation: pacman-rotate-half-up 0.5s 0s infinite;
        animation: pacman-rotate-half-up 0.5s 0s infinite
    }

    .la-pacman > div:nth-child(2) {
        margin-top: -32px;
        -webkit-animation-name: pacman-rotate-half-down;
        -moz-animation-name: pacman-rotate-half-down;
        -o-animation-name: pacman-rotate-half-down;
        animation-name: pacman-rotate-half-down
    }

    .la-pacman > div:nth-child(3), .la-pacman > div:nth-child(4), .la-pacman > div:nth-child(5), .la-pacman > div:nth-child(6) {
        position: absolute;
        top: 50%;
        left: 200%;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        opacity: 0;
        -webkit-animation: pacman-balls 2s 0s infinite linear;
        -moz-animation: pacman-balls 2s 0s infinite linear;
        -o-animation: pacman-balls 2s 0s infinite linear;
        animation: pacman-balls 2s 0s infinite linear
    }

    .la-pacman > div:nth-child(3) {
        -webkit-animation-delay: -1.44s;
        -moz-animation-delay: -1.44s;
        -o-animation-delay: -1.44s;
        animation-delay: -1.44s
    }

    .la-pacman > div:nth-child(4) {
        -webkit-animation-delay: -1.94s;
        -moz-animation-delay: -1.94s;
        -o-animation-delay: -1.94s;
        animation-delay: -1.94s
    }

    .la-pacman > div:nth-child(5) {
        -webkit-animation-delay: -2.44s;
        -moz-animation-delay: -2.44s;
        -o-animation-delay: -2.44s;
        animation-delay: -2.44s
    }

    .la-pacman > div:nth-child(6) {
        -webkit-animation-delay: -2.94s;
        -moz-animation-delay: -2.94s;
        -o-animation-delay: -2.94s;
        animation-delay: -2.94s
    }

    .la-pacman.la-sm {
        width: 16px;
        height: 16px
    }

    .la-pacman.la-sm > div:nth-child(1), .la-pacman.la-sm > div:nth-child(2) {
        border-width: 8px
    }

    .la-pacman.la-sm > div:nth-child(2) {
        margin-top: -16px
    }

    .la-pacman.la-sm > div:nth-child(3), .la-pacman.la-sm > div:nth-child(4), .la-pacman.la-sm > div:nth-child(5), .la-pacman.la-sm > div:nth-child(6) {
        width: 4px;
        height: 4px
    }

    .la-pacman.la-2x {
        width: 64px;
        height: 64px
    }

    .la-pacman.la-2x > div:nth-child(1), .la-pacman.la-2x > div:nth-child(2) {
        border-width: 32px
    }

    .la-pacman.la-2x > div:nth-child(2) {
        margin-top: -64px
    }

    .la-pacman.la-2x > div:nth-child(3), .la-pacman.la-2x > div:nth-child(4), .la-pacman.la-2x > div:nth-child(5), .la-pacman.la-2x > div:nth-child(6) {
        width: 16px;
        height: 16px
    }

    .la-pacman.la-3x {
        width: 96px;
        height: 96px
    }

    .la-pacman.la-3x > div:nth-child(1), .la-pacman.la-3x > div:nth-child(2) {
        border-width: 48px
    }

    .la-pacman.la-3x > div:nth-child(2) {
        margin-top: -96px
    }

    .la-pacman.la-3x > div:nth-child(3), .la-pacman.la-3x > div:nth-child(4), .la-pacman.la-3x > div:nth-child(5), .la-pacman.la-3x > div:nth-child(6) {
        width: 24px;
        height: 24px
    }

    @-webkit-keyframes pacman-rotate-half-up {
        0%, 100% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
        }
        50% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @-moz-keyframes pacman-rotate-half-up {
        0%, 100% {
            -moz-transform: rotate(270deg);
            transform: rotate(270deg)
        }
        50% {
            -moz-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @-o-keyframes pacman-rotate-half-up {
        0%, 100% {
            -o-transform: rotate(270deg);
            transform: rotate(270deg)
        }
        50% {
            -o-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @keyframes pacman-rotate-half-up {
        0%, 100% {
            -webkit-transform: rotate(270deg);
            -moz-transform: rotate(270deg);
            -o-transform: rotate(270deg);
            transform: rotate(270deg)
        }
        50% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @-webkit-keyframes pacman-rotate-half-down {
        0%, 100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
        }
        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
    }

    @-moz-keyframes pacman-rotate-half-down {
        0%, 100% {
            -moz-transform: rotate(90deg);
            transform: rotate(90deg)
        }
        50% {
            -moz-transform: rotate(0deg);
            transform: rotate(0deg)
        }
    }

    @-o-keyframes pacman-rotate-half-down {
        0%, 100% {
            -o-transform: rotate(90deg);
            transform: rotate(90deg)
        }
        50% {
            -o-transform: rotate(0deg);
            transform: rotate(0deg)
        }
    }

    @keyframes pacman-rotate-half-down {
        0%, 100% {
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg)
        }
        50% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg)
        }
    }

    @-webkit-keyframes pacman-balls {
        0% {
            left: 200%;
            opacity: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        5% {
            opacity: .5
        }
        66% {
            opacity: 1
        }
        67% {
            opacity: 0
        }
        100% {
            left: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }

    @-moz-keyframes pacman-balls {
        0% {
            left: 200%;
            opacity: 0;
            -moz-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        5% {
            opacity: .5
        }
        66% {
            opacity: 1
        }
        67% {
            opacity: 0
        }
        100% {
            left: 0;
            -moz-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }

    @-o-keyframes pacman-balls {
        0% {
            left: 200%;
            opacity: 0;
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        5% {
            opacity: .5
        }
        66% {
            opacity: 1
        }
        67% {
            opacity: 0
        }
        100% {
            left: 0;
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }

    @keyframes pacman-balls {
        0% {
            left: 200%;
            opacity: 0;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
        5% {
            opacity: .5
        }
        66% {
            opacity: 1
        }
        67% {
            opacity: 0
        }
        100% {
            left: 0;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }
</style>
