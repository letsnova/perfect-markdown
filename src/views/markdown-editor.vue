<template>
    <div class="editor-demo">
        <h1>{{title}}</h1>
        <div
            class="pmd-editor"
        >
            <pmd
                class="editor-box"
                :showTextarea="true"
                :showToolbar="true"
                v-model="value"
                :uploadFileFn="fileUplod"
                :plugins="{katex: true}"
                :imgWidthHeightAttr="{width: true, height: false}"
                :toolbar-options="{
                    bold: true,
                    italic: true,
                    import: true,
                    export: true
                }"
            ></pmd>
        </div>
    </div>
</template>
<script>
import pmd from '../index'
export default {
    data() {
        return {
            title: 'demo',
            value: '# demo'
        }
    },
    created() {
        window.Vue.use(pmd)
    },
    methods: {
        fileUplod(file) {
            console.log(file)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ upload: true, url: 'http://www.baidu.com' }) // uploadImgFn required the return value {upload: true, url: 'the real url'}
                }, 0)
            })
        }
    }

}
</script>
<style lang="less" scoped>
.pmd-editor {
    width: 75%;
    margin: 0 auto;
    .editor-box {
        height: 500px;
    }
}
</style>
