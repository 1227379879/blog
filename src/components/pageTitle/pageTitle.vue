<template>
    <div class="page_title">
        <div class="page_random_title" @mouseover="collectType = true" @mouseout="collectType = false">
            {{pageTitleData}}
            <div class="collect-box" v-show="collectType" @click="addToFavorites">
                <span :class="icon"></span>
                <span class="collect-title">收藏到便签</span>
            </div>
        </div>
    </div>
</template>

<script>
import {RandomAna,RandomVvhan} from "@/request/api";

export default {
    name: "pageTitle",
    data() {
        return {
            pageTitleData: "",
            collectType: false,
            icon:"el-icon-star-off"
        }
    },
    mounted() {
        this.getRandomAna()
        this.getRandomVvhan()
    },
    methods: {
        getRandomAna() {
            RandomAna().then(res => {
                this.pageTitleData = "「 " + res + " 」"
            })
        },
        getRandomVvhan(){
            RandomVvhan().then(res=>{
                console.log(res)
            })
        },
        //加入收藏
        addToFavorites(){
            this.icon = "el-icon-star-on"
        }
    }
}
</script>

<style lang="scss" scoped>
.page_title {
    position: relative;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .page_random_title {
        position: relative;
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-top: 180px;
        color: #fff;
        font-size: 14px;
        transition: 0.2s;

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

</style>