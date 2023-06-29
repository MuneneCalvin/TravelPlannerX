CREATE DATABASE TravelLite;
USE TravelLite;


-- Create Users table
CREATE TABLE Users (
    id INT primary key identity(1,1) NOT NULL,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL
);


-- Create Destinations table
create table Destinations (
    DesId int identity(1,1) primary key,
    DesName varchar(50) not null,
    Description varchar(255) not null,
    DesImage_url varchar(255) not null,
    DesPrice decimal(18,2) not null,
);


-- Create Flights table
create table Flights (
    FlightId int identity(1,1) primary key,
    FlightName varchar(50) not null, -- Airline Name
    origin varchar(50) not null,
    destination varchar(50) not null,
    start_date DATETIME not null,
    end_date DATETIME not null,
    Duration varchar(50) not null,
    seats_available	INT not null,
    FlightPrice decimal(18,2) not null,
    DesId int foreign key references Destinations(DesId)
);

-- Create Accommodations table
create table Accommodations (
    AccId int identity(1,1) primary key,
    AccName varchar(50) not null,
    Description varchar(200) not null,
    phone_number varchar(20) not null,
    AccImage varchar(100) not null,
    AccPrice decimal(18,2) not null,
    image_url varchar(500) not null,
    DesId int foreign key references Destinations(DesId)
);

-- Create Booking table 
create table Bookings (
    BookingId int identity(1,1) primary key,
    BookingDate DATE not null,
    check_in_date DATE not null,
    check_out_date DATE not null,
    status varchar(50) not null,
    total_price decimal(18,2) not null,
    UserId int foreign key references Users(Id),
    FlightId int foreign key references Flights(FlightId),
    AccId int foreign key references Accommodations(AccId)
);

-- Inserting entries into the Destinations table
INSERT INTO Destinations (DesName, Description, DesImage_url, DesPrice)
VALUES ('Paris', 'Experience the romance and charm of the City of Love', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8YXtMqyMOPYzmyEZ6GrNQwHaFj%26pid%3DApi&f=1&ipt=196c5c6f9feeef0b48d7372bd57e34fb28d8f2f876374009f9d5c4d41072936d&ipo=images', 500.00),
('Tokyo', 'Discover the bustling metropolis and vibrant culture of Tokyo', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.udCPs2cPdMIBm_6Efu4PBQHaFj%26pid%3DApi&f=1&ipt=2b374a863ea9a3b0ea56d2cab7e01ae2a368c8757110883677c74819a4dde125&ipo=images', 800.00),
('Cancun', 'Relax on pristine white sandy beaches and swim in crystal-clear turquoise waters', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v6oq6U3CO3vxccBzqepQiAHaEV%26pid%3DApi&f=1&ipt=7b177a4735aa19cc85da072328d86083fa3d5dd4659045d63475ee9ffb2db968&ipo=images', 600.00),
('New York City', 'Immerse yourself in the iconic sights and vibrant energy of the Big Apple', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VhOrrCC9k6k_i66XGrKLVAHaE8%26pid%3DApi&f=1&ipt=22bf8baa95d1ce26470481fccb02149af5ea6d832d3ccc5719289b681dd393f4&ipo=images', 700.00),
('Rome', 'Explore the ancient ruins and indulge in delicious Italian cuisine', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6DPhUMdW6kwkbC0V4vDagHaFD%26pid%3DApi&f=1&ipt=e3b49e2717d1345b857da6d8b697ed2c3918e39e38ca8f82df8dc30ad61c08b2&ipo=images', 600.00),
('Sydney', 'Experience the beauty of the Sydney Opera House and stunning harbor views', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Zk3krZupGsLNdYWPnt09QQHaE5%26pid%3DApi&f=1&ipt=d48273c975c59e71274395ec9292952d7ffa508220f28041a868aa432ad96791&ipo=images', 900.00),
('Barcelona', 'Enjoy the vibrant street life, unique architecture, and delicious tapas of Barcelona', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SA-SqCFpzPxkIQgqz1-OTQHaFD%26pid%3DApi&f=1&ipt=c433a1100026c3e3c979b06c276722766a7933431ca1171fa81bbdc4e25d31fe&ipo=images', 700.00),
('Bali', 'Relax in luxury resorts, rejuvenate with spa treatments, and enjoy beautiful beaches', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.efikkQ6MOGJtnXStJWxP1QHaFj%26pid%3DApi&f=1&ipt=6a31a834415b000b636b2531c09f813cf564c6c6e9026541c30bc5884bbb9298&ipo=images', 1000.00),
('Dubai', 'Indulge in extravagant shopping, luxurious hotels, and awe-inspiring skyscrapers', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-F3CVL10GIlXq93M0OyU9wHaFS%26pid%3DApi&f=1&ipt=52083f12f4cbd00144e1c461275739110f691601e5dbe581f8b61b0e6a3d4742&ipo=images', 1200.00),
('Amsterdam', 'Discover the charming canals, historic architecture, and world-class museums of Amsterdam', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dQAvgEhIsJeXFZbxc5D9yQHaE8%26pid%3DApi&f=1&ipt=68e6781ced264563a8056888a2c58e38b1c8835bc92ffa21cd551aee3cd7ddb6&ipo=images', 600.00),
('Bangkok', 'Immerse yourself in the vibrant street life, bustling markets, and ornate temples of Bangkok', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cjnIZTvlidYTerUypLiaZQHaE7%26pid%3DApi&f=1&ipt=a0fe1642d6bbacf8e3a364d18e003e2560eafdf7595c8fd615351f761139befe&ipo=images', 500.00),
('Cairo', 'Uncover the mysteries of ancient Egypt and marvel at the majestic pyramids', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UEASofstzJKq3SRuMxTa-QHaE8%26pid%3DApi&f=1&ipt=b421aa4b39c320f2323ac3ae48ed50b0488c070be43fef9e0953300fa539731e&ipo=images', 700.00),
('Rio de Janeiro', 'Experience the lively carnival atmosphere, beautiful beaches, and breathtaking landscapes of Rio de Janeiro', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WMfNB3Q6ZTN8GMkZvKofxQHaFR%26pid%3DApi&f=1&ipt=5de338aa2d7dfab9c38f2789a2c3d605a255124a8c9681718a74c4c04a4ab6ed&ipo=images', 800.00),
('Prague', 'Wander through the charming cobblestone streets and explore the rich history of Prague', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lW83uYrXAMn4pNaZ3Pk7rAHaE5%26pid%3DApi&f=1&ipt=bd820189c0219140bb289e0d9c1952a9066b3f943d9f457dc4d0c3254939ffbf&ipo=images', 500.00),
('London', 'Immerse yourself in the vibrant cultural scene, iconic landmarks, and royal heritage of London', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CKPfcV_F97FX-1rQnEl89gHaEo%26pid%3DApi&f=1&ipt=c4813a01b89ef3b961f6dd941e906c14f47ca5cd80ceb456c7fde8a9238a7857&ipo=images', 900.00);

-- Flights Table Entries
INSERT INTO Flights (FlightName, origin, destination, start_date, end_date, Duration, seats_available, FlightPrice)
VALUES ('Singapore Airlines', 'Paris', 'Tokyo', '2023-07-01 09:00:00', '2023-07-01 22:30:00', '13 hours 30 minutes', 200, 1200.00),
('Qatar Airways', 'Cancun', 'New York City', '2023-08-15 12:30:00', '2023-08-15 18:00:00', '5 hours 30 minutes', 180, 800.00),
('Emirates', 'Rome', 'Barcelona', '2023-09-10 15:15:00', '2023-09-10 17:30:00', '2 hours 15 minutes', 150, 400.00),
('Etihad Airways', 'Bali', 'Dubai', '2023-07-05 10:00:00', '2023-07-05 18:30:00', '8 hours 30 minutes', 220, 1500.00),
('Turkish Airlines', 'Amsterdam', 'London', '2023-08-20 09:30:00', '2023-08-20 11:00:00', '1 hour 30 minutes', 180, 300.00),
('Korean Airways', 'Bangkok', 'Sydney', '2023-09-25 14:00:00', '2023-09-26 09:30:00', '9 hours 30 minutes', 200, 1700.00),
('Virgin Atlantic', 'Barcelona', 'Cairo', '2023-07-12 08:45:00', '2023-07-12 13:15:00', '4 hours 30 minutes', 160, 600.00),
('Air New Zealand', 'Rio de Janeiro', 'New York City', '2023-08-30 12:00:00', '2023-08-30 19:30:00', '7 hours 30 minutes', 250, 1200.00),
('Japan Airlines', 'Prague', 'Paris', '2023-09-15 16:45:00', '2023-09-15 19:30:00', '2 hours 45 minutes', 200, 400.00),
('Qantas Airways', 'London', 'Bangkok', '2023-07-02 08:00:00', '2023-07-02 18:30:00', '10 hours 30 minutes', 180, 1300.00),
('Kenya Airways', 'Cairo', 'Dubai', '2023-08-18 10:15:00', '2023-08-18 14:30:00', '4 hours 15 minutes', 150, 500.00),
('EVA Air', 'Sydney', 'Barcelona', '2023-09-12 12:30:00', '2023-09-12 20:00:00', '7 hours 30 minutes', 220, 1600.00),
('African Airlines', 'Paris', 'New York City', '2023-07-08 14:00:00', '2023-07-08 20:30:00', '6 hours 30 minutes', 180, 900.00),
('Lufthansa', 'Tokyo', 'Cancun', '2023-08-25 09:30:00', '2023-08-25 23:00:00', '13 hours 30 minutes', 200, 1400.00),
('Kenya Airlines', 'Amsterdam', 'Dubai', '2023-09-18 16:00:00', '2023-09-19 01:30:00', '9 hours 30 minutes', 220, 1800.00),
('Kenya Airways', 'Bali', 'Sydney', '2023-07-05 11:45:00', '2023-07-06 06:00:00', '7 hours 15 minutes', 200, 1500.0);

-- Accommodations Table Entries
INSERT INTO Accommodations (AccName, Description, phone_number, AccImage, AccPrice, image_url)
VALUES ('Grand Hotel', 'Luxurious hotel with stunning views of the city skyline', '123-456-7890', 'grandhotel.jpg', 250.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cLT038JGQDGE26etuERKtgHaEK%26pid%3DApi&f=1&ipt=4c5369d7a3e393de1eee0bfca14b36987c3bf79dd08a09cf00652ab1648c3b8f&ipo=images'),
('Zen Retreat', 'Tranquil resort surrounded by nature, perfect for relaxation', '987-654-3210', 'zenretreat.jpg', 180.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XeafmwqOty9IY9_dL42QNAHaE7%26pid%3DApi&f=1&ipt=7311ce1fe006380749c542f81cd4ae6a1b3a2fd3b305c834720c727b23bcde30&ipo=images'),
('City Towers', 'Modern and stylish apartments in the heart of downtown', '555-123-4567', 'citytowers.jpg', 300.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QKvBUe5XxTr_A5YeOliZbQHaEy%26pid%3DApi&f=1&ipt=4e48f73c8938c6e22de35c08a293c231527768a2ae6175970abccf9ae95e9bb0&ipo=images'),
('Beachfront Resort', 'Beachside resort with stunning ocean views and private access', '999-888-7777', 'beachresort.jpg', 400.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0yUJlaVFvromUcv4hJvPFgHaEK%26pid%3DApi&f=1&ipt=71d7c7098ce963397eeadd76562b9dab8969b1795a272de430c8e145d1e2e8e4&ipo=images'),
('Historic Inn', 'Charming inn with rustic decor and personalized service', '444-555-6666', 'historicinn.jpg', 150.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OHY9NrsBJsLLDiDx9n0NYgHaEK%26pid%3DApi&f=1&ipt=78ee72ebc3ee074e3b3a78a04559ffe26cdc01f53b5477e0d168c4f484de7fd2&ipo=images'),
('Luxury Villa', 'Exquisite private villa with a pool and panoramic views', '777-888-9999', 'luxuryvilla.jpg', 600.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EVVeLxSESlf0m4Wkeu18vwHaE8%26pid%3DApi&f=1&ipt=fef0ca183c00f023b491c186407400d77d20740dd678801adfe8c0e44b1765d3&ipo=images'),
('Mountain Retreat', 'Cozy cabins nestled in the mountains, perfect for outdoor enthusiasts', '111-222-3333', 'mountainretreat.jpg', 200.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DTUs9WVfl0oJTToB9coyhAHaE8%26pid%3DApi&f=1&ipt=b005131fa1275b133f9680c8f26598bd86d1f74b2d3ca41eca82bb7a6f5419c6&ipo=images'),
('Seaside Cottage', 'Quaint cottage with direct beach access and beautiful sunsets', '555-777-9999', 'seasidecottage.jpg', 180.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xu7s7YxIvXgyzVkPY4LwCAHaE6%26pid%3DApi&f=1&ipt=423c1cbf71ec4f003b9053a32f92d299a2f47ce578c25b6de9d9d94b9bfe8061&ipo=images'),
('Urban Loft', 'Contemporary loft-style apartments in the heart of the city', '333-666-9999', 'urbanloft.jpg', 220.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Fs1VLCr-Dj9uL-E1nI31WQHaE7%26pid%3DApi&f=1&ipt=fcc4325164d775019b72a7f5ad0cd4bc81ab00c2811406d0521541b0be82d837&ipo=images'),
('Resort & Spa', 'Luxury resort with a spa, fitness center, and stunning ocean views', '888-222-4444', 'resortspa.jpg', 350.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._q6WfRwgfZrL0Mju39vR4wHaFj%26pid%3DApi&f=1&ipt=8eb34ecb646fc4d617fdf216ee73934174086740ae9bca243ef8b7b77ccc8100&ipo=images'),
('Historic Mansion', 'Opulent mansion with elegant decor and personalized service', '222-444-6666', 'historicmansion.jpg', 500.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YZQjvrjXewmqyXOUtO-qnwHaFa%26pid%3DApi&f=1&ipt=01bbd29c7556729e7c759058c796a107f149075065c9a55c6b185b248e7d85f7&ipo=images'),
('Ski Chalet', 'Charming chalet located near ski slopes, perfect for winter getaways', '777-555-3333', 'skichalet.jpg', 280.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xUmaIU3LNQrcaDWa4PB5uAHaEK%26pid%3DApi&f=1&ipt=0a78aa5c825f5a0ef7a12f2c68db47336a746e9f69f84a74f7437bbc76ec4d82&ipo=images'),
('Beach Bungalow', 'Cozy bungalows steps away from the beach, ideal for a tropical retreat', '666-888-9999', 'beachbungalow.jpg', 200.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e0JKZ5CA4aCGNXPaZoeh_wHaE8%26pid%3DApi&f=1&ipt=e4573c153548c4207c4384aa2bc19790d0377a9fa7b6e767a9e6d94afc51b82b&ipo=images'),
('Business Hotel', 'Modern hotel with business amenities and convenient location', '999-333-5555', 'businesshotel.jpg', 150.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2bKy6eIrR06PiSV_egN3ewHaFj%26pid%3DApi&f=1&ipt=ee9feb8e2d462be6e36da2f2e8ec2fb9dd226fbd4925d72cada72c43137d0342&ipo=images'),
('Rustic Cabin', 'Quaint cabin nestled in the woods, perfect for nature lovers', '222-666-9999', 'rusticcabin.jpg', 180.00, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wroRakCWNFO24ERvZLXbOQHaE8%26pid%3DApi&f=1&ipt=caaf17605c8ba5e0a12410772a8cb96e928f045699ffe2f758bbd9c6e2cf27e6&ipo=images');

-- Bookings Table Entries
INSERT INTO Bookings (BookingDate, check_in_date, check_out_date, status, total_price, UserId, FlightId, AccId)
VALUES ('2023-07-02', '2023-07-15', '2023-07-22', 'confirmed', 1500.00, 2, 2, 2),
('2023-08-18', '2023-09-05', '2023-09-10', 'confirmed', 2000.00, 2, 2, 5),
('2023-09-12', '2023-10-01', '2023-10-05', 'confirmed', 1800.00, 2, 3, 9),
('2023-07-08', '2023-07-20', '2023-07-30', 'confirmed', 1700.00, 3, 4, 3),
('2023-08-25', '2023-09-15', '2023-09-20', 'confirmed', 2200.00, 3, 5, 7),
('2023-09-18', '2023-10-10', '2023-10-15', 'confirmed', 1600.00, 4, 6, 6),
('2023-07-05', '2023-07-22', '2023-07-25', 'confirmed', 2100.00, 5, 7, 10),
('2023-08-30', '2023-09-15', '2023-09-20', 'confirmed', 1900.00, 4, 8, 4),
('2023-09-25', '2023-10-10', '2023-10-15', 'confirmed', 2300.00, 5, 9, 1),
('2023-07-15', '2023-07-30', '2023-08-05', 'confirmed', 2500.00, 4, 10, 12),
('2023-08-10', '2023-08-25', '2023-08-30', 'confirmed', 1700.00, 2, 11, 8),
('2023-09-05', '2023-09-22', '2023-09-30', 'confirmed', 1800.00, 3, 12, 11),
('2023-07-20', '2023-08-05', '2023-08-10', 'confirmed', 1900.00, 4, 13, 14),
('2023-08-15', '2023-08-30', '2023-09-05', 'confirmed', 2100.00, 5, 14, 13),
('2023-09-10', '2023-09-25', '2023-09-30', 'confirmed', 1600.00, 3, 15, 15);
