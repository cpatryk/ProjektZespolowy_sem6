@echo off
"C:\Users\Admin\Desktop\Wordpress/mariadb\bin\mysql.exe" --defaults-file="C:\Users\Admin\Desktop\Wordpress/mariadb\my.ini" -u root -e "DELETE FROM mysql.user WHERE User='';"
"C:\Users\Admin\Desktop\Wordpress/mariadb\bin\mysql.exe" --defaults-file="C:\Users\Admin\Desktop\Wordpress/mariadb\my.ini" -u root -e "SET Password=password('%1');"

