CREATE DATABASE  IF NOT EXISTS `better_lesson_assessment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `better_lesson_assessment`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: better_lesson_assessment
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books_sets`
--

DROP TABLE IF EXISTS `books_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_sets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8991 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_sets`
--

LOCK TABLES `books_sets` WRITE;
/*!40000 ALTER TABLE `books_sets` DISABLE KEYS */;
INSERT INTO `books_sets` VALUES (74,'History',25,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(111,'History',25,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(222,'Art',20,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(367,'Math',25,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(587,'English',30,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(909,'Science',25,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(8990,'Art',25,'2023-03-23 22:00:18','2023-03-23 22:00:18');
/*!40000 ALTER TABLE `books_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coaching_services`
--

DROP TABLE IF EXISTS `coaching_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coaching_services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coaching_services`
--

LOCK TABLES `coaching_services` WRITE;
/*!40000 ALTER TABLE `coaching_services` DISABLE KEYS */;
INSERT INTO `coaching_services` VALUES (1,'Coaching Service 1',120,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(323,'Coaching Service 1',120,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(351,'Coaching Service 1',120,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(365,'Coaching Service 3',200,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(456,'Coaching Service 3',200,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(476,'Coaching Service 1',120,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(546,'Coaching Service 2',150,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(789,'Coaching Service 2',150,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(9850,'Coaching Service 2',150,'2023-03-23 22:00:18','2023-03-23 22:00:18'),(20001,'Coaching Service 2',150,'2023-03-23 22:00:18','2023-03-23 22:00:18');
/*!40000 ALTER TABLE `coaching_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `uuid_UNIQUE` (`uuid`),
  KEY `idx_uuid` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (163,'403e4421-955c-412e-8816-42a635e9b5dd','Benson Mack','+1 (856) 510-2352','bensonmack@zomboid.com','564 Hull Street, Islandia, Colorado, 8332','2023-03-23 22:00:18','2023-03-23 22:00:18'),(164,'ccdc0cbd-44a4-4b1b-b182-d45d727d823a','Helene Benson','+1 (830) 537-3001','helenebenson@zomboid.com','553 Garland Court, Curtice, Georgia, 7828','2023-03-23 22:00:18','2023-03-23 22:00:18'),(165,'30064266-241d-4eb2-8746-6102eb36cbd6','Shelia Chase','+1 (927) 448-2825','sheliachase@zomboid.com','675 Gerritsen Avenue, Cumberland, Guam, 219','2023-03-23 22:00:18','2023-03-23 22:00:18'),(166,'b413f33c-75df-47f0-819f-223e6218ef06','Wilkerson Christian','+1 (881) 445-2868','wilkersonchristian@zomboid.com','775 Oceanic Avenue, Healy, Florida, 6531','2023-03-23 22:00:18','2023-03-23 22:00:18'),(167,'69e0fb0c-90bc-4636-9ffc-89582e9cc330','Jennie Tyson','+1 (861) 456-3948','jennietyson@zomboid.com','410 Batchelder Street, Ona, Kentucky, 5167','2023-03-23 22:00:18','2023-03-23 22:00:18'),(168,'03d7a866-b4c4-4ea1-868a-da4e6c86916d','Lucas Alvarez','+1 (922) 596-2566','lucasalvarez@zomboid.com','726 Broome Street, Lemoyne, Massachusetts, 3154','2023-03-23 22:00:18','2023-03-23 22:00:18');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `book_set_id` int DEFAULT NULL,
  `coaching_service_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `oi_id_orders_id` (`order_id`),
  KEY `oi_id_books_sets_id_idx` (`book_set_id`),
  KEY `oi_id_coaching_services_id_idx` (`coaching_service_id`),
  CONSTRAINT `oi_id_books_sets_id` FOREIGN KEY (`book_set_id`) REFERENCES `books_sets` (`id`),
  CONSTRAINT `oi_id_coaching_services_id` FOREIGN KEY (`coaching_service_id`) REFERENCES `coaching_services` (`id`),
  CONSTRAINT `oi_id_orders_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_uuid` varchar(255) NOT NULL,
  `discount_code` varchar(45) DEFAULT NULL,
  `order_total` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `o_uuid_customer_uuid_idx` (`customer_uuid`),
  CONSTRAINT `o_uuid_customer_uuid` FOREIGN KEY (`customer_uuid`) REFERENCES `customers` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-24  9:50:02
