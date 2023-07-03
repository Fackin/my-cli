// 根据我们想要实现的功能配置执行动作，遍历产生对应的命令
const mapActions = {
    create: { // 创建
        alias: 'c', // 别名
        description: '创建一个项目', // 描述
        examples: [ // 用法
            'my-cli create <project-name>'
        ]
    },
    config: { // 创建
        alias: 'conf', // 别名
        description: 'config project variable', // 描述
        examples: [ // 用法
            'my-cli config set <k> <v>',
            'my-cli config get <k>',
        ]
    },
    "*": { // 创建
        alias: '', // 别名
        description: 'command not found', // 描述
        examples: []
    },
}

module.exports = {
    mapActions
}