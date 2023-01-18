DECLARE @UserID as INT
--------------------------
--Create User
--------------------------
IF not exists (select Id from Users where Username='Demo')
insert into Users(Username,Password, PasswordKey,LastUpdatedOn,LastUpdatedBy)
select 'Demo',
0x4D5544D09B8319B423F6D4E054360D5289B57A98781A66B276E00C57919FDCD599BF45623D48CC81F535748F560AF0F70C8C7F3B4C3DB672562B5DD0E5E7C297,
0x44A0BD5BFD689DF399346200A1117C33BEDF5869C17A7CB3DC6D8598A93845DB333B379AA90931D8D4E5F2CC7B1A4A96A7DB71B186DBCDCDC53B0A95440E4EDD7473668627970FBD9BB0BA17530CCAB2D9446A1902BD6AC12FE691FE09DD78A43398B89111056145843060026A414FFA8C5E75B474E187AD753D2872038D9FDD,
getdate(),
0

SET @UserID = (select id from Users where Username='Demo')


--------------------------
--Seed Cities
--------------------------
IF not exists (select top 1 id from Cities)
Insert into Cities(Name,Country,LastUpdatedBy,LastUpdatedOn)
select 'Aberdeen', 'Scotland' ,@UserID,getdate()
union
select 'Bathgate','Scotland',@UserID,getdate()
union
select 'Dunbar','Scotland',@UserID,getdate()
union
select 'Dundee','Scotland',@UserID,getdate()
union
select 'Edinburgh','Scotland',@UserID,getdate()
union
select 'Falkirk','Scotland',@UserID,getdate()
union
select 'Glasgow','Scotland',@UserID,getdate()
union
select 'Inverness','Scotland',@UserID,getdate()
union
select 'Livingston','Scotland',@UserID,getdate()
union
select 'Paisley','Scotland',@UserID,getdate()
union
select 'Perth','Scotland',@UserID,getdate()

--------------------------
--Seed Listings
--------------------------
--Seed listings for sell
IF not exists (select top 1 name from Listings where Name='Listing Demo')
insert into Listings(SellRent,Name,Category,Price,Address,
Apartment,CityId,County,Zip,AvailableFrom,Description,PostedOn,PostedBy,LastUpdatedOn,LastUpdatedBy)
select 
1, --Sell Rent
'Herman Miller Mirra 2', --Name
'Chair', --Category
700, --Price
'High street', --Address
'12', -- Apartment
(select top 1 Id from Cities), -- City ID
'Lothians', --County
'EH48 2ZJ', --Zip
'2023-01-01', -- Available from
'Ergonomic office chair with lower-back support. Immaculate condition, ready to be collected at any time.', --Description
GETDATE(), --Posted on
@UserID, --Posted by
GETDATE(), --Last Updated on
@UserID --Last Updated by

---------------------------
--Seed property for rent
---------------------------
IF not exists (select top 1 name from Listings where Name='Listing Demo')
insert into Listings(SellRent,Name,Category,Price,Address,
Apartment,CityId,County,Zip,AvailableFrom,Description,PostedOn,PostedBy,LastUpdatedOn,LastUpdatedBy)
select 
2, --Sell Rent
'Scott E-Bike', --Name
'Bike', --Category
30, --Price
'Low street', --Address
'15', -- Apartment
(select top 1 Id from Cities), -- City ID
'Lothians', --County
'HZ15 2TJ', --Zip
'2023-01-01', -- Available from
'Electronic bike for lease. Please contact me for any further details!', --Description
GETDATE(), --Posted on
@UserID, --Posted by
GETDATE(), --Last Updated on
@UserID --Last Updated by