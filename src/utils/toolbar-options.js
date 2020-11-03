export default class ToolbarOptions {
    constructor(data = {}) {
        this.bold = data.bold || false
        this.italic = data.italic || false
        this.heading = data.heading || false
        this.underLine = data.underLine || false
        this.throughLine = data.throughLine || false
        this.mark = data.mark || false
        this.sub = data.sub || false
        this.sup = data.sup || false
        this.left = data.left || false
        this.center = data.center || false
        this.right = data.right || false
        this.quotation = data.quotation || false
        this.ul = data.ul || false
        this.ol = data.ol || false
        this.code = data.code || false
        this.table = data.table || false
        this.link = data.link || false
        this.image = data.image || false
        this.video = data.video || false
        this.fromNetwork = data.fromNetwork || false
        this.fromLocal = data.fromLocal || false
        this.attachment = data.attachment || false
        this.clear = data.clear || false
        this.split = data.split || false
        this.fullscreen = data.fullscreen || false
        this.import = data.import || false
        this.export = data.export || false
        this.print = data.print || false
        this.help = data.help || false
    }
}
