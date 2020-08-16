# PackingCheck
PackingCheck source code
 - react-app: single page application by React
 - api-node: NodeJS backend API
 - mobile-app: mobile applicaiton by React Native
 
 
#  Set up api-node
### Set up mysql
```
1. install docker
2. install mysql client
  $ brew install mysql-client
  $ echo 'export PATH="/usr/local/opt/mysql-client/bin:$PATH"' >> ~/.profile
3. launch mysql server  
  $ docker pull mysql/mysql-server:latest
  $ mkdir -p ~/mysql-data
  $ docker run \
    --detach \
    --name [container_name] \
    --env MYSQL_ROOT_PASSWORD=my_password \
    --publish 6603:3306 \
    --volume=/root/docker/[container_name]/conf.d/mysql.cnf:/etc/mysql/conf.d/mysql.c \
    --volume=/storage/docker/mysql-data:/var/lib/mysql \
    mysql/mysql-server:latest

docker run \
--detach \
--name mysqld1 \
--env MYSQL_ROOT_PASSWORD=aa \
--publish 6603:3306 \
--volume=/Users/nanfang/workspace/PackingCheck/database/mysql/conf.d:/etc/mysql/conf.d \
--volume=/Users/nanfang/mysql-data:/var/lib/mysql \
mysql/mysql-server:latest



  $ docker run --name=[mysql-service-name] -d mysql/mysql-server:latest
  
  # find the password in the log
  $ docker logs [mysql-service-name]
  
  # change password for root
  $ docker exec -it [container_name] mysql -uroot -p
  mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
  mysql>  
4.  

 
```

 



