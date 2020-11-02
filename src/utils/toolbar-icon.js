export default function () {
    return {
        bold: {
            prefix: '**',
            subfix: '**',
            txt: this.$t('toolbar.left.bold')
        },
        italic: {
            prefix: '*',
            subfix: '*',
            txt: this.$t('toolbar.left.italic')
        },
        title1: {
            prefix: '# ',
            subfix: '',
            txt: this.$t('toolbar.left.h1')
        },
        title2: {
            prefix: '## ',
            subfix: '',
            txt: this.$t('toolbar.left.h2')
        },
        title3: {
            prefix: '### ',
            subfix: '',
            txt: this.$t('toolbar.left.h3')
        },
        title4: {
            prefix: '#### ',
            subfix: '',
            txt: this.$t('toolbar.left.h4')
        },
        title5: {
            prefix: '##### ',
            subfix: '',
            txt: this.$t('toolbar.left.h5')
        },
        underline: {
            prefix: '++',
            subfix: '++',
            txt: this.$t('toolbar.left.underline')
        },
        throughline: {
            prefix: '~~',
            subfix: '~~',
            txt: this.$t('toolbar.left.throughline')
        },
        mark: {
            prefix: '==',
            subfix: '==',
            txt: this.$t('toolbar.left.mark')
        },
        sub: {
            prefix: '~',
            subfix: '~',
            txt: this.$t('toolbar.left.sub')
        },
        sup: {
            prefix: '^',
            subfix: '^',
            txt: this.$t('toolbar.left.sup')
        },
        left: {
            prefix: '::: hljs-left\n\n',
            subfix: '\n\n:::\n',
            txt: this.$t('toolbar.left.left')
        },
        center: {
            prefix: '::: hljs-center\n\n',
            subfix: '\n\n:::\n',
            txt: this.$t('toolbar.left.center')
        },
        right: {
            prefix: '::: hljs-right\n\n',
            subfix: '\n\n:::\n',
            txt: this.$t('toolbar.left.right')
        },
        quotation: {
            prefix: '> ',
            subfix: '',
            txt: this.$t('toolbar.left.quotation')
        },
        ul: {
            prefix: '- ',
            subfix: '',
            txt: ''
        },
        ol: {
            prefix: '1. ',
            subfix: '',
            txt: ''
        },
        code: {
            prefix: '```',
            subfix: '\n\n```\n',
            txt: 'lang'
        },
        table: {
            prefix: '',
            subfix: '',
            txt: '\n|столбец1|столбец2|столбец3|столбец4|\n|-|-|-|-|\n|ячейка1|ячейка2|ячейка3|ячейка4|\n'
        },
        clear: {
            prefix: '',
            subfix: '',
            txt: ''
        }
    }
}
