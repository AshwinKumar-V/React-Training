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

/*----------*/

create table Clients (
	clientID int identity(1,1) primary key,
	clientName varchar(100),
	clientPermission varchar(20),
	clientType varchar(20)
);
  
insert into Clients (clientName, clientPermission, clientType) values
('NXP', 'admin', 'internal'),
('Siemens', 'user', 'external');

select * from clients;


