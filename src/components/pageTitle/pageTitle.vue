<template>
    <div class="page_box">
        <div class="page_random_box" @mouseover="collectType = true" @mouseout="collectType = false">
            <div class="page_title">
                {{pageTitleData}}
                <div class="page_author">{{author}}</div>
                <div class="collect-box" v-show="collectType" @click="addToFavorites">
                    <span :class="icon"></span>
                    <span class="collect-title">收藏到便签</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {RandomAna, RandomCelebrity} from "@/request/api";

export default {
    name: "pageTitle",
    data() {
        return {
            pageTitleData: "",
            author: "",
            collectType: false,
            icon: "el-icon-star-off",
        }
    },
    mounted() {
        this.getRandomAna()
        // this.getRandomCelebrity()
    },
    methods: {
        getRandomAna() {
            RandomAna().then(res => {
                this.pageTitleData = `「  ${res} 」`
            }).catch(function (error) {
                console.log(error)
            })
        },
        getRandomCelebrity() {
            RandomCelebrity().then(res => {
                console.log(res.data);
                this.pageTitleData = "「 " + res.data.content + " 」"
                this.author = "——"+res.data.author
            }).catch(function (error) {
                console.log(error.message)
            })
        },
        //加入收藏
        addToFavorites() {
            this.icon = "el-icon-star-on"
        }
    }
}
</script>

<style lang="scss" scoped>
.page_box {
    position: relative;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .page_random_box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 80px;
        text-align: center;
        margin-top: 180px;
        color: #fff;
        font-size: 14px;
        transition: 0.5s;

        .page_title {
            .page_author {
                margin-top: 10px;
                opacity: 0;
                transition: 0.5s;
            }
        }

        &:hover {
            background-color: rgba(0, 0, 0, .3);
        }

        .collect-box {
            color: #A2ABB6;
            position: absolute;
            left: 90%;
            top: 70%;
            transform: translateY(-50%);
            cursor: pointer;

            .collect-title {
                margin-left: 5px;
            }
        }
    }
}
.page_random_box:hover .page_author{
    opacity: 1!important;
}

</style>