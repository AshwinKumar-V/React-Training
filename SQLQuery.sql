create table Users (
	userID int identity(1,1) primary key,
	userName varchar(100),
	companyID varchar(20),
	companyName varchar(100),
	userPermission varchar(20),
	userType varchar(20)
);
  
insert into Users (userName, companyID, companyName, userPermission, userType) values
('Jeff','t02','Siemens','admin', 'intern'),
('John','t02','Siemens','user', 'intern');

select * from users;
