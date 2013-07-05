fis.config.merge({
    modules : {
        parser : {
            less : 'less'
        }
    },
    roadmap : {
        ext : {
            less : 'css'
        },
        path : [
            {
                reg : /\/less\/(.*\.less)/i,
                release : '/css/$1'
            }
        ]
    }
});