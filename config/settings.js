const isProd = process.argv.includes("--production")
const isDev = !isProd
export default {
    isProd,
    isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    imagemin: {
        verbose: true
    },
    webpack: {
        mode: isProd ? 'production' : 'development'
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}