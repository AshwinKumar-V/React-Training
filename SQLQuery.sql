create table Users
(userID int primary key,
userName varchar(100),
companyID varchar(20),
companyName varchar(100),
userPermission varchar(20),
userType varchar(20));
 
insert into Users values(10,'Jeff','t02','Siemens','admin', 'intern');
 
insert into Users values(20,'John','t02','Siemens','user', 'intern');

select * from users;