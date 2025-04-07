-- Database + Tables + Default Values

-- Create the database (if not exists)
CREATE DATABASE IF NOT EXISTS `sabzlearn_shop` DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;
USE `sabzlearn_shop`;
-- ----------------------------------

-- Create tables (if not exists)
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NULL,
    `phone` BIGINT(20) NULL,
    `password` VARCHAR(100) NOT NULL,
    `city` VARCHAR(50) NULL,
    `address` TEXT NULL,
    `score` BIGINT(100) NULL,
    `buy` BIGINT(20) NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `admins` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `task` VARCHAR(100) NULL,
    `img` VARCHAR(100) NULL,
    `token` VARCHAR(100) NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `categories` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `count` INT UNSIGNED NOT NULL,
  `img` VARCHAR(100) NULL,
  `popularity` INT NULL,
  `sale` INT UNSIGNED NULL,
  `colors` INT NULL,
  `productDesc` TEXT NULL,
  `url` VARCHAR(100) NULL,
  `categoryID` INT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_Products__CategoryID` FOREIGN KEY (`categoryID`) REFERENCES `categories`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `userID` INT NOT NULL,
  `productID` INT NOT NULL,
  `price` BIGINT UNSIGNED NOT NULL,
  `off` INT NULL,
  `sale` BIGINT UNSIGNED NULL,
  `popularity` INT NULL,
  `count` INT UNSIGNED NOT NULL,
  `sale_count` INT UNSIGNED NOT NULL,
  `isActive` INT(10) NOT NULL,
  `date` VARCHAR(100) NULL,
  `hour` VARCHAR(100) NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_Orders__UserID` FOREIGN KEY (`userID`) REFERENCES `users`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
  CONSTRAINT `FK_Orders__ProductID` FOREIGN KEY (`productID`) REFERENCES `products`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `comments` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `body` TEXT NOT NULL,
  `userID` INT NOT NULL,
  `productID` INT NOT NULL,
  `is-reply` TINYINT NULL DEFAULT 0,
  `reply-id` INT NULL,
  `isAccept` TINYINT NULL DEFAULT 0,
  `date` VARCHAR(100) NULL,
  `hour` VARCHAR(100) NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_Comments__UserID` FOREIGN KEY (`userID`) REFERENCES `users`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
  CONSTRAINT `FK_Comments__ProductID` FOREIGN KEY (`productID`) REFERENCES `products`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;

CREATE TABLE IF NOT EXISTS `offs` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `code` VARCHAR(100) NOT NULL,
  `percent` TINYINT UNSIGNED NOT NULL,
  `adminID` INT NOT NULL,
  `productID` INT NOT NULL,
  `date` VARCHAR(100) NULL,
  `isActive` TINYINT NULL DEFAULT 0,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_Offs__AdminID` FOREIGN KEY (`adminID`) REFERENCES `admins`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
  CONSTRAINT `FK_Offs__ProductID` FOREIGN KEY (`productID`) REFERENCES `products`(`id`)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_persian_ci`;
-- ----------------------------------

-- Insert default values
INSERT INTO `users`
( `id` , `firstname` , `lastname` , `username` , `password` , `phone` , `city` , `email` , `address` , `score` , `buy` )
VALUES
  (
    1, "علیرضا", "احمدی", "alireza_ahmdi19", 
    "19901432", 9129872314, "تهران", 
    "alireza@gmail.com", "تهران - خیابان فلان - کوچه فلان", 
    98, 9000000
  ), 
  (
    2, "حسین", "محمدی", "hosyn_mmdi", 
    "ho3ein_12", 9921558293, "تبریز", 
    "ho3ein@gmail.com", "تبریز - خیابان فلان - کوچه فلان", 
    31, 12000000
  ), 
  (
    3, "علی", "حسینی", "ali_9001", 
    "ali190012", 9943287617, "شیراز", 
    "ali@gmail.com", "شیراز - خیابان فلان - کوچه فلان", 
    28, 8541000
  );

INSERT INTO `admins` ( `id` , `firstname` , `lastname` , `username` , `password` , `task` , `img` , `token` )
VALUES
  (
    1, "محمدامین", "سعیدی راد", 
    "amin_saeedi", "react2020", "برنامه نویس فرانت اند", 
    "img/saeedi.jpeg", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  ), 
  (
    2, "قدیر", "یلمه", "q_yolme", 
    "q_909012_yolme", "برنامه نویس پایتون", 
    "img/yolme.jpg", "G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
  ), 
  (
    3, "ساسان", "مقدس", "sasan_mqds", 
    "sa_ds12", "دیجیتال مارکتر", 
    "img/sasan.avif", "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );


INSERT INTO `categories` ( `id` , `title` ) 
VALUES 
  (1, "گوشی"),
  (2, "لپتاپ"),
  (3, "عمومی");


INSERT INTO `products` ( `id` , `title` , `price` , `count` , `img` , `popularity` , `sale` , `colors` , `productDesc` , `url` , `categoryID` ) 
VALUES 
  (
    1, "شارژر Type-C", 90000, 102, 
    "/img/charger.jpeg", 89, 12000000, 
    3, "شارژر Type-C لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "charget-type-c", 1
  ), 
  (
    2, "هندزفری بلوتوثی", 
    139000, 90, "/img/head.jpeg", 90, 
    18980000, 4, "هندزفری بلوتوثی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "headset", 1
  ), 
  (
    3, "تیشرت مشکی", 290000, 
    129, "/img/tshirt.jpeg", 82, 9100000, 
    1, "تیشرت مشکی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "black-tshirt", 3
  ), 
  (
    4, "هدفون", 300000, 91, "/img/headphone.jpeg", 
    96, 8912200, 5, "هدفون لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "headphone", 2
  ), 
  (
    5, "آیفون 13", 32000000, 35, "/img/iphone.jpeg", 
    84, 231000000, 3, "آیفون 13 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "iphone13", 1
  ), 
  (
    6, "روغن اویلا", 78000, 900, 
    "/img/oil.jpeg", 76, 17000000, 1, 
    "روغن اویلا لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "oila-oil", 3
  ), 
  (
    7, "صابون گلنار", 56000, 
    313, "/img/soap.jpeg", 83, 19782000, 
    1, "صابون گلنار لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n", 
    "golnar-soap", 3
  );

INSERT INTO `comments` ( `id` , `body` , `date` , `hour` , `userID` , `productID` , `is-reply` , `reply-id` , `isAccept` ) 
VALUES 
  (
    1, "سلام، من از این محصول رضایت کافی رو دارم", 
    "1401-07-12", "12:01", 2, 7, 0, 0, 0
  ), 
  (
    2, "سلام، متاسفانه کیفیت کافی رو نداشت", 
    "1401-06-19", "18:09", 3, 2, 0, 0, 0
  ), 
  (
    3, "این محصول خیلی خوب بود. ممنون از سایت خوبتون", 
    "1401-07-01", "01:19", 1, 3, 0, 0, 0
  );
