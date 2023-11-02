<#
Last modified: 2023-08-12 22:31:58
You can run the .ps1 file without installing other plug-ins, find the file, right-click and "run with powershell"
不需要安装其他插件便可运行.ps1文件，找到该文件，右键点击“使用powershell运行”即可
If you need to use it in vscode, you can install the "Run in Powershell (Toby Smith)" extension. After the installation is successful, right-click the .ps1 file and select "Run in Powershell Externally" to run
如果需要在vscode中使用，可安装“Run in Powershell（Toby Smith）”扩展，安装成功后对.ps1文件右键后选择“Run in Powershell Externally”即可运行
#>
#Step 1: Execute the rollup packaging command of ax.js, the build command is customizable, please check the rollup.config.js file
#步骤1：执行ax.js的rollup打包命令，build命令是可自定义的，请查看rollup.config.js文件
& npm run build
#Step 2: Create an array of files, starting with the ax.css file (this file contains the initialization styles and core component styles)
#步骤2：创建文件数组，从ax.css文件开始（该文件包含了初始化样式和核心组件样式）
$files = @('.\css\ax.css')
#Step 3: Read the packaged ax.js file and convert it to a string (the Get-Content method obtains a character array)
#步骤3：读取已经完成打包的ax.js文件并转为字符串（Get-Content方法获得是字符数组）
$js = Get-Content '..\dist\js\ax.js' -Raw
#Step 4: Add css files to the array in turn
#步骤4：依次将css文件加入数组
if ($js.Contains('ax.getDom')) {
    $files += '.\css\a.css'
}
#Step 5: Forcibly clear the contents of the ax.css file
#步骤5：强制清空ax.css文件内容
Clear-Content '..\dist\css\ax.css' -Force
#Step 6: Remerge all css files into ax.css file
#步骤6：重新合并所有css文件为ax.css文件
foreach($file in $files){
    #Read the content of the sub-files in turn and write them into the ax.css file in utf8 format
    #依次读取子文件内容并以utf8格式写入ax.css文件当中
    Get-Content $file -Encoding UTF8 | Out-File -Append -Encoding UTF8 '..\dist\css\ax.css'
}
#Step 7: Compress ax.js into ax.min.js file (install terser component in vscode, command: npm install terser)
#步骤7：将ax.js压缩为ax.min.js文件（在vscode中安装terser组件，命令：npm install terser）
npx terser '..\dist\js\ax.js' -o '..\dist\js\ax.min.js' -c arguments,dead_code,directives,arrows -m keep_classnames=true,keep_fnames=true
#Step 8: Compress ax.css into a mini file (install the clean-css component and clean-css-cli component in vscode, command: npm install clean-css and npm install clean-css-cli)
#步骤8：将ax.css压缩为mini文件（在vscode中安装clean-css组件和clean-css-cli组件，命令：npm install clean-css和npm install clean-css-cli）
cleancss -o '..\dist\css\ax.min.css' '..\dist\css\ax.css'
#Step 9: Compressed js and css file header insert compression time
#步骤9：已经压缩的js和css文件头部插入压缩时间
$time = '/*Last minify: '+$(Get-Date -Format 'yyyy-MM-dd hh:mm:ss')+'*/'
($time + (Get-Content '..\dist\js\ax.min.js' -Encoding UTF8)) | Set-Content -Encoding UTF8 '..\dist\js\ax.min.js'
($time + (Get-Content '..\dist\css\ax.min.css' -Encoding UTF8)) | Set-Content -Encoding UTF8 '..\dist\css\ax.min.css'
#Step 10: Exit the powershell window automatically after execution
#步骤10：执行完毕自动退出powershell窗口
Stop-Process -Id $PID;