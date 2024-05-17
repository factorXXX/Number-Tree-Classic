/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Boost '2', '3' and '4'.": "提升 '2', '3' 和 '4'.",
    "Currently:": "当前:",
    "Gain more numbers based on points.": "基于点数获得更多数字。",
    "Gain more points based on numbers.": "基于数字获得更多点数。",
    "Guide": "指南",
    "Link": "链接",
    "My server": "我的服务器",
    "Numbers": "数字",
    "Points boost itself.": "点数提升它自己。",
    "Quadruple point gain.": "四倍点数增益。",
    "Time": "时间",
    "Automation": "自动化",
    "Base++": "基础++",
    "Buyable challenge!": "可购买的挑战！",
    "Buyable challenge?": "可购买的挑战？",
    "Challenged": "挑战",
    "complete / factor. Reward: Number x2.": "完整/因子。奖励：数字x2。",
    "Complete Buyable upgrader once.": "完成一次可购买升级程序。",
    "Complete Buyable upgrader three times.": "完成 3 次可购买升级程序。",
    "Complete Super 3 in 1": "完成超级 3 合 1",
    "Factor": "因子",
    "Factors": "因子",
    "First": "第一滴血",
    "Get 1 Infinity.": "获得 1 无限。",
    "Get the first upgrade, reward: point x1.25": "获得第一次升级，奖励：点x1.25",
    "Get the fourth upgrade, reward: Number x3.": "获得第四次升级，奖励：数字x3。",
    "Inflatity": "通货膨胀",
    "More and more": "越来越多",
    "Multiply IP gain by 1e15.": "将 IP 增益乘以 1e15。",
    "Next layer at 5 Number upgrade": "下一层在 5 号升级",
    "one to fifteen": "一到十五",
    "Raise O gain to 1.5.": "将 O 增益提高到 1.5。",
    "Remove the first hardcap of '+', auto buy Factors, and Factors resets nothing.": "删除“+”的第一个硬顶，自动购买因子，因子不会重置任何内容。",
    "Remove the second hardcap of '+'.": "删除“+”的第二个硬帽。",
    "Save bank": "保存银行",
    "Super Challenged": "超级挑战",
    "Super click": "超级点击",
    "Ten Upgrade": "十次升级",
    "The first Factor milestone is better.": "第一个因子里程碑更好。",
    "Unlock a new upgrade and Factors boost number and point gain.": "解锁新的升级和因子提升数量和点数增益。",
    "Unlock a number buyable.": "解锁可购买的数字。",
    "Unlock another Factor challenge": "解锁另一个因子挑战",
    "Unlock another Factor challenge and double number gain.": "解锁另一个因子挑战和双倍数量增益。",
    "Unlock another number upgrade": "解锁另一个数字升级",
    "Unlock another number upgrade.": "解锁另一个数字升级。",
    "Unlock another Number upgrade.": "解锁另一个数字升级。",
    "Unlock Factor upgrades and gain 100% of numbers on reset per second": "解锁因子升级并在每秒重置时获得 100% 的数字",
    "Unlock the first Factor challenge": "解锁第一个因子挑战",
    "~2^10 factor": "~2^10 因子",
    "Show guide": "显示指南",
    "'Factor Alpha' is better": "“因子Alpha”更好",
    "'Factor Alpha' is much better.": "“因子Alpha”要好得多。",
    "'Factor Beta' is better.": "“因子Beta”更好。",
    "Remove the first hardcap of '2' and '4'.": "删除“2”和“4”的第一个硬上限。",
    "Goal:": "目标:",
    "Reward:": "奖励:",
    "/ factor": "/ 因子",
    "Challenges": "挑战",
    "There are upgrades that require being in a challenge (Number Upgrade).": "有些升级需要挑战（数字升级）。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Time played (real time): ": "游戏时长（实时）：",
    "Numbers and points gain x": "数字和点数增益 x",
    "Numbers and Points x": "数字和点数 x",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Next layer at (.+) Factor challenge$/, '下一层在 $1 因子挑战'],
    [/^You have (.+) layers left to unlock.$/, '您还有 $1 层需要解锁。'],
    [/^You have (.+) Numbers$/, '你有 $1 数字'],
    [/^Get (.+) Number upgrade$/, '获得 $1 个数字升级'],
    [/^Get (.+) Number upgrade.$/, '获得 $1 个数字升级。'],
    [/^Get (.+) upgrade.$/, '获得 $1 升级。'],
    [/^Get (.+) factor$/, '获得 $1 因子'],
    [/^Get (.+) factor.$/, '获得 $1 因子。'],
    [/^Get (.+) factors.$/, '获得 $1 因子。'],
    [/^Get (.+) factors$/, '获得 $1 因子'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)e([\d\.,]+) factors$/, '$1e$2 因子'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Numbers$/, '$1 数字'],
    [/^([\d\.,]+) points$/, '$1 点数'],
    [/^([\d\.,]+) factor$/, '$1 因子'],
    [/^([\d\.,]+) factors$/, '$1 因子'],
    [/^([\d\.,]+) Factors$/, '$1 因子'],
    [/^\((.+)\/sec\)$/, '（$1\/秒）'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) Numbers$/, '成本：$1 数字'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) Numbers$/, '要求：$1 \/ $2 数字'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);