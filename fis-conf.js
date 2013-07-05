fis.config.merge({
    modules : {
        parser : {
            //表示less后缀的文件，使用fis-parser-less插件来编译
            less : 'less'
        }
    },
    roadmap : {
        ext : {
            //表示less后缀的文件，编译输出为css文件
            less : 'css'
        },
        path : [
            {
                //map.json文件
                reg : /\/less\/(.*\.less)/i,
                //发布到/config/map.json
                release : '/css/$1'
            }
        ],
    }
});