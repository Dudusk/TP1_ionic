@ECHO OFF

echo Liste des AVD disponibles :
C:\Users\%username%\AppData\Local\Android\sdk\tools/emulator.exe -list-avds
echo.
echo Select AVD
SET /p index=Votre choix: 
echo.
echo %index% selectionne. 
echo ###########################
C:\Users\%username%\AppData\Local\Android\sdk\tools/emulator.exe -avd %index%
pause