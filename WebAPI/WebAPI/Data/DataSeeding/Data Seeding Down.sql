--------------------
--Seeding Down
--------------------
DECLARE @UserID as int
SET @UserID = (select id from Users where Username='Demo')
delete from Users where Username='Demo'
delete from Cities where LastUpdatedBy=@UserID
delete from Listings where PostedBy=@UserId