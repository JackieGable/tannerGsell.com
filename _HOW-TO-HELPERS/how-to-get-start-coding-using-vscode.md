

### Step 1: **Install Visual Studio Code**:
   Download and install vscode. You can download it from [here](https://code.visualstudio.com/).

### Step 2: **Download Git for Windows**: 
If you're using Windows, download and install Git for Windows from [Git for Windows](https://gitforwindows.org/). This will include Git Bash.
   
### Step 3: **Configure VSCode to Use Git Bash**: 
Setting up Bash to use with Visual Studio Code (VSCode) can streamline your workflow. Here’s how you can do it:
1. **Open VSCode**: Open VSCode and go to `File` -> `Preferences` -> `Settings`.
2. **Access the Settings File**: Search for `settings.json` in the settings search bar.
3. **Edit the `settings.json` File**: Add the following configuration to set Git Bash as the default integrated terminal:
   ```json
   {
     "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
   }
   ```
   Note: Make sure the path matches the installation path of Git Bash on your system.

### Step 4: Open a Bash Terminal in VSCode

1. **Open Terminal**: Go to `Terminal` -> `New Terminal` or use the shortcut (`` Ctrl + ` ``). This will open a new terminal window with Git Bash as the default shell.

### Step 5: **Install Node.js**:
   You'll need Node.js for most web development projects. Download and install it from [here](https://nodejs.org/). This will also install npm (Node Package Manager), which you'll use to manage project dependencies.

### Step 6: **Create a new project folder**
   Create a new folder for your project. You can do this through your file explorer or using the bash terminal:
   ```
   mkdir my-new-web-project
   cd my-new-web-project
   ```

### Step 7: **Open the Project in VSCode**:
  While in VSCode and go to `File` -> `Open Folder...`, then select your project folder. Alternatively, you can open the folder directly from the terminal:
   ```
   code .
   ```
### NOTE: At this point you can create your own project files from scratch or clone an existing repo. If you want to clone an existing repo, then go to step 8. If you instead want to start building from scratch, then skip to Step 9.

### Step 8: **Clone an existing repo in your project**
1. Navigate to the github repo, for example: https://github.com/mbeville/masonbeville
2. Open the repo and locate the green CODE button.
3. Click the dropdown on the green code button and select 'local'
4. Next click the 'HTTPS' tab
5. Copy the URL to the clipboard. For example: https://github.com/mbeville/masonbeville
6. Now open the terminal window inside your project folder and type this at the command prompt:
```
git clone https://github.com/mbeville/masonbeville.git
```
### Step 9. **Initialize a New Node.js Project**:
   In the bash terminal within VSCode, run the following command to initialize a new Node.js project:
   ```
   npm init -y
   ```
   This will create a `package.json` file, which keeps track of your project's dependencies and settings.

### Step 10. **Create html, css and js files in your project
If the cloned project is empty then you will need to setup the structure for it. If it's a simple web project then the following will get you started. This is the html for a very basic webpage.
1. Inside your project folder, create a file (Click on the new file icon) and name it: index.html then save it. 
2. Open the index.html file and add the following, then save it again.

```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
3. Inside your project, create a new  (click on the new folder icon ) and name it: 
4. Click on the css folder and then click the new file icon, now give the file this name: 'style.css' then save it. 
5. Now to create the js folder you will do just like you did with the css folder. Create a new folder and name it: 'js' and then create a file in the js folder and name it: 'script.js' and save the file. 

### Additional Extensions for VSCode.

You might also want to install some extensions to enhance your Bash experience in VSCode:
- **Bash IDE**: Provides Bash language support for VSCode.
- **ShellCheck**: A linter for Shell scripts.

