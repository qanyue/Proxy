# 京东京豆签到脚本配置方法

- 此方法比较简单粗暴，必须先学习第一种方法再来学习该方法

- 如果浏览者未学习第一种方法，请点击 [这里](https://github.com/chiupam/tutorial/blob/master/Loon/JD_DailyBonus_1.md)

## 第二种方法（通过订阅脚本功能）

### 一、进入 Loon 订阅脚本

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 先复制/拷贝右侧这串地址：https://raw.githubusercontent.com/chiupam/Proxy/master/Loon/JD_DailyBonus.conf

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 打开 Loon 点击下方配置栏，找到订阅脚本按钮

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/Remote_Script.png)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 点击下图所示按钮，添加订阅

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/Remote_Script_1.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 将上面复制/拷贝的地址粘贴到下图所示位置

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/Remote_Script_2.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 确认 URL 和别名都有填写成功后，点击保存按钮

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_1.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 建议点击下图所示的更新按钮，更新一下脚本

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_2.jpg)

### 二、完成上述配置后 请回到 safari 中获取 cookie

- Safari浏览器打开登录 https://bean.m.jd.com ,点击签到并且出现签到日历后, 如果通知获得cookie成功, 则可以使用此签到脚本。

- 也可以回到第一种方法种查看操作步骤（三）

### 二、对脚本执行时间进行修改(此步是按需操作)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 打开 Loon 点击下方配置栏，找到订阅脚本按钮，点击进入订阅脚本界面

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/Remote_Script.png)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 点击下图所示区域

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_3.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 左滑下图所示区域

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_4.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 点击下图所示区域

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_5.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 可以在框内更改 cron 表达式

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_remote_6.jpg)

## 第三种方法（通过插件功能，但不推荐）

### 一、进入 Loon 订阅插件

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 先复制/拷贝右侧这串地址：https://raw.githubusercontent.com/chiupam/Proxy/master/Loon/JD_DailyBonus.plugin

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 打开 Loon 点击下方配置栏，找到插件按钮

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/Plugin.png)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 点击如下图所示按钮，添加插件

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/plugin_1.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 将复制/拷贝的地址粘贴到 URL 内，并填上别名，然后点击保存

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_plugin_1.jpg)

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) 建议点击下图所示的更新按钮，更新一下脚本

![image](https://raw.githubusercontent.com/chiupam/tutorial-image/master/Loon/JD_DailyBonus_plugin_2.jpg)

### 二、完成上述配置后 请回到 safari 中获取 cookie

- Safari浏览器打开登录 https://bean.m.jd.com ,点击签到并且出现签到日历后, 如果通知获得cookie成功, 则可以使用此签到脚本。

- 也可以回到第一种方法种查看操作步骤（三）

## 这两种方法的区别

- 第二种方法优先级比第三种方法的低，三者关系可以表示为：本地脚本<订阅脚本<插件

- 第二种方法可以修改执行时间，即可以修改 cron 表达式，第三种则不行，需要引用到的地址的作者在其库中修改

- 感兴趣可以学习如何写订阅脚本的 .conf 文件放在个人 github 库中，在订阅脚本 URL 中引用个人链接，高度自定义

- 感兴趣可以学习如何写订阅插件的 .plugin 文件放在个人 github 库中，在插件 URL 中引用个人链接，高度自定义

# 鸣谢

- [NobyDa](https://github.com/NobyDa)    [京东京豆脚本](https://github.com/NobyDa/Script/blob/master/JD-DailyBonus/JD_DailyBonus.js)
