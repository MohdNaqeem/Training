create Database Sample1
use Sample1

create Table StdTbl
(
ID int NOT NULL Primary key,
Name nvarchar(50) NOT NULL,
Address nvarchar (50) NOT NULL,
)

use Sample1
create Table stdG(
ID int NOT NULL primary key,
Gender varchar(50) NOT NULL,
)

alter Table StdTbl
add GenderID int

alter table StdTbl
drop column GenderID

alter Table StdTbl
add GenderID int

insert into StdTbl (ID, Name, Address, GenderID) values (4,'Ahmad','Nasik',3)
insert into StdTbl (ID, Name, Address, GenderID) values (5,'Ahmad','Nasik',3)


insert into StdTbl (ID, Name, Address, GenderID) values (6,'Naqeem','Nasik',1)
insert into StdTbl (ID, Name, Address, GenderID) values (7,'Ayyub','Nasik',1)
insert into StdTbl (ID, Name, Address, GenderID) values (8,'Ramzan','Nasik',1)
insert into StdTbl (ID, Name, Address, GenderID) values (9,'Altaf','Nasik',1)
insert into StdTbl (ID, Name, Address, GenderID) values (10,'Asif','Nasik',1)
insert into StdTbl (ID, Name, Address, GenderID) values (11,'Sara','Nasik',2)
insert into StdTbl (ID, Name, Address, GenderID) values (12,'Neha','Nasik',2)
insert into StdTbl (ID, Name, Address, GenderID) values (13,'John','Nasik',1)



Alter TABLE StdTbl
ADD CONSTRAINT DF_StdTbl_GenID
DEFAULT 3 FOR GenderID

Select Name, Address, GenderID, Gender
from StdTbl
JOIN stdG
ON StdTbl.GenderID = stdG.ID

Select * from StdTbl
Select * from stdG

Select Name, Address, GenderID, Gender
from StdTbl
LEFT OUTER JOIN stdG
ON StdTbl.GenderID = stdG.ID

Select Name, Address, GenderID, Gender
from StdTbl
FULL OUTER JOIN stdG
ON StdTbl.GenderID = stdG.ID
where stdG.ID is NULL

Select Name, Address, GenderID, Gender
from StdTbl
RIGHT OUTER JOIN stdG
ON StdTbl.GenderID = stdG.ID

Select Name, Address, GenderID, Gender
from StdTbl
CROSS JOIN stdG

use Sample1

CREATE PROCEDURE spgetStdIdName
AS
BEGIN
Select ID, Name from StdTbl
END

spgetStdIdName

ALTER PROC spGetEmployeeNameAndGender
@Name nvarchar(20),
@Gender int
as
Begin 
Select Name , GenderID from StdTbl where Name = @Name
and GenderID = @Gender
END

spGetEmployeeNameAndGender 'Neha',2

Select * from StdTbl


