-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: uberclocked
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id_empresa` bigint NOT NULL AUTO_INCREMENT,
  `Type` varchar(100) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Empresa` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `component`
--

DROP TABLE IF EXISTS `component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `component` (
  `Component_id` bigint NOT NULL AUTO_INCREMENT,
  `Type` varchar(100) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Img` text,
  PRIMARY KEY (`Component_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `component`
--

LOCK TABLES `component` WRITE;
/*!40000 ALTER TABLE `component` DISABLE KEYS */;
/*!40000 ALTER TABLE `component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `id_discount` bigint NOT NULL AUTO_INCREMENT,
  `Discount` varchar(100) DEFAULT NULL,
  `User_empresa` bigint DEFAULT NULL,
  `Product` bigint DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_discount`),
  KEY `User_empresa` (`User_empresa`),
  KEY `Product` (`Product`),
  CONSTRAINT `discounts_ibfk_1` FOREIGN KEY (`User_empresa`) REFERENCES `company` (`id_empresa`),
  CONSTRAINT `discounts_ibfk_2` FOREIGN KEY (`Product`) REFERENCES `product` (`Product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferences`
--

DROP TABLE IF EXISTS `preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferences` (
  `id_preferences` bigint NOT NULL AUTO_INCREMENT,
  `Receive_offer` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_preferences`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferences`
--

LOCK TABLES `preferences` WRITE;
/*!40000 ALTER TABLE `preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price`
--

DROP TABLE IF EXISTS `price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price` (
  `id_price` bigint NOT NULL AUTO_INCREMENT,
  `Price` float DEFAULT NULL,
  PRIMARY KEY (`id_price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price`
--

LOCK TABLES `price` WRITE;
/*!40000 ALTER TABLE `price` DISABLE KEYS */;
/*!40000 ALTER TABLE `price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `Product_id` bigint NOT NULL AUTO_INCREMENT,
  `Price_id` bigint DEFAULT NULL,
  `Component_id` bigint DEFAULT NULL,
  `Description` text,
  `Stock_id` bigint DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `Price_id` (`Price_id`),
  KEY `Component_id` (`Component_id`),
  KEY `Stock_id` (`Stock_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`Price_id`) REFERENCES `price` (`id_price`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`Component_id`) REFERENCES `component` (`Component_id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`Stock_id`) REFERENCES `stock` (`id_stock`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_review`
--

DROP TABLE IF EXISTS `product_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_review` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `Product_id` bigint DEFAULT NULL,
  `Review_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Product_id` (`Product_id`),
  KEY `Review_id` (`Review_id`),
  CONSTRAINT `product_review_ibfk_1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`Product_id`),
  CONSTRAINT `product_review_ibfk_2` FOREIGN KEY (`Review_id`) REFERENCES `review` (`Review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_review`
--

LOCK TABLES `product_review` WRITE;
/*!40000 ALTER TABLE `product_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `Review_id` bigint NOT NULL AUTO_INCREMENT,
  `Creator_id` bigint DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Content` text,
  `Value` float DEFAULT NULL,
  PRIMARY KEY (`Review_id`),
  KEY `Creator_id` (`Creator_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`Creator_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart` (
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `Total_Value` float DEFAULT NULL,
  `ShoppingHistory_id` int DEFAULT NULL,
  PRIMARY KEY (`id_cart`),
  KEY `ShoppingHistory_id` (`ShoppingHistory_id`),
  CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`ShoppingHistory_id`) REFERENCES `shoppinghistory` (`id_cart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart_product`
--

DROP TABLE IF EXISTS `shoppingcart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ShoppingCart_id` int DEFAULT NULL,
  `Product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ShoppingCart_id` (`ShoppingCart_id`),
  KEY `Product_id` (`Product_id`),
  CONSTRAINT `shoppingcart_product_ibfk_1` FOREIGN KEY (`ShoppingCart_id`) REFERENCES `shoppingcart` (`id_cart`),
  CONSTRAINT `shoppingcart_product_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `product` (`Product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart_product`
--

LOCK TABLES `shoppingcart_product` WRITE;
/*!40000 ALTER TABLE `shoppingcart_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppinghistory`
--

DROP TABLE IF EXISTS `shoppinghistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppinghistory` (
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `Total_Value` float DEFAULT NULL,
  PRIMARY KEY (`id_cart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppinghistory`
--

LOCK TABLES `shoppinghistory` WRITE;
/*!40000 ALTER TABLE `shoppinghistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppinghistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppinghistory_product`
--

DROP TABLE IF EXISTS `shoppinghistory_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppinghistory_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ShoppingHistory_id` int DEFAULT NULL,
  `Product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ShoppingHistory_id` (`ShoppingHistory_id`),
  KEY `Product_id` (`Product_id`),
  CONSTRAINT `shoppinghistory_product_ibfk_1` FOREIGN KEY (`ShoppingHistory_id`) REFERENCES `shoppinghistory` (`id_cart`),
  CONSTRAINT `shoppinghistory_product_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `product` (`Product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppinghistory_product`
--

LOCK TABLES `shoppinghistory_product` WRITE;
/*!40000 ALTER TABLE `shoppinghistory_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppinghistory_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specs`
--

DROP TABLE IF EXISTS `specs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specs` (
  `id_specs` bigint NOT NULL AUTO_INCREMENT,
  `Component_id` bigint DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `Value_unit` float DEFAULT NULL,
  `Value` float DEFAULT NULL,
  PRIMARY KEY (`id_specs`),
  KEY `Component_id` (`Component_id`),
  CONSTRAINT `specs_ibfk_1` FOREIGN KEY (`Component_id`) REFERENCES `component` (`Component_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specs`
--

LOCK TABLES `specs` WRITE;
/*!40000 ALTER TABLE `specs` DISABLE KEYS */;
/*!40000 ALTER TABLE `specs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id_stock` bigint NOT NULL AUTO_INCREMENT,
  `Stock` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_stock`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `Age` int DEFAULT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `ShoppingCart_id` bigint DEFAULT NULL,
  `Preferences_id` bigint DEFAULT NULL,
  `User_empresa` bigint DEFAULT NULL,
  `User_admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `Username` (`Username`),
  UNIQUE KEY `Email` (`Email`),
  KEY `Preferences_id` (`Preferences_id`),
  KEY `User_empresa` (`User_empresa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`Preferences_id`) REFERENCES `preferences` (`id_preferences`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`User_empresa`) REFERENCES `company` (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-28 18:02:41
