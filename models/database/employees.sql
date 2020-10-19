CREATE TABLE dbo.employees 
(
	EmpNo int identity Not Null PRIMARY KEY , 
	Name varchar(50), 
	Email varchar(50) NULL,
	PhoneNumber varchar(12) NULL,
	isDisable bit NOT NULL
)


CREATE proc [dbo].[usp_employees] 
(
@name varchar(50), 
@email varchar(50),
@phonenumber varchar(12),
@isDisable bit = 0
)

AS
BEGIN
	INSERT into employees( Name ,  Email , PhoneNumber , isDisable) 
	VALUES (@name, @email, @phonenumber, @isDisable)
END
GO


CREATE PROCEDURE [dbo].[usp_updateEmployees] (  
  @empNo int,
  @name varchar(50), 
  @email varchar(50),
  @phonenumber varchar(12),
  @isDisable bit = 0
 )  
AS  
update employees   
 set Name = @name
 ,Email = @email  
 ,PhoneNumber = @phonenumber  
 ,isDisable = @isDisable    
  where EmpNo = @empNo  



CREATE PROCEDURE [dbo].[usp_deleteEmployees] (  
  @empNo int
 )  
AS  
Delete from employees 
where EmpNo = @empNo  



CREATE proc [dbo].[usp_getEmployees]
AS
BEGIN
	select * from employees(nolock) 
END
GO




