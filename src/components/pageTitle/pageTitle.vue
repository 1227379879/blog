<template>
    <div class="page_title">
        <div class="page_random_title">
            {{pageTitleData}}
        </div>
    </div>
</template>

<script>
import {RandomAna} from "@/request/api";

export default {
    name: "pageTitle",
    data() {
        return {
            pageTitleData: ""
        }
    },
    mounted() {
        this.getRandomAna()
    },
    methods: {
        getRandomAna() {
            setTimeout(() => {
                RandomAna().then(res => {
                    console.log(res);
                    this.pageTitleData = "「 "+res+" 」"
                })
            },800)
        },
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
    }

}

</style>