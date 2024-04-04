-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: all_project_merged
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

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
-- Dumping data for table `result_student_master`
--

LOCK TABLES `result_student_master` WRITE;
/*!40000 ALTER TABLE `result_student_master` DISABLE KEYS */;
INSERT INTO `result_student_master` VALUES (1,'fname','lname'),(2,'Kiana','Lor'),(3,'Joshua','Lonaker'),(4,'Dakota','Blanco'),(5,'Natasha','Yarusso'),(6,'Brooke','Cazares'),(7,'Rochelle','Johnson'),(8,'Joey','Abreu'),(9,'Preston','Suarez'),(10,'Lee','Dong'),(11,'Maa\'iz','al-Dia'),(12,'Maja','Nicholson'),(13,'Sasha','Jansen'),(14,'Alexander','Sherman'),(15,'Edgar','Sanchez'),(16,'Kolbi','Strunk'),(17,'Brittany','Sath'),(18,'Meggan','Smith'),(19,'Ericka','Arreola'),(20,'David','Pulc'),(21,'Kyle','Luckey'),(22,'Rojesh','Her'),(23,'David','Weber'),(24,'Rachel','Jambor'),(25,'Mus\'ab','al-Moustafa'),(26,'Sila','Nguyen'),(27,'Samantha','Hicks'),(28,'Angela','Harding'),(29,'Brandon','Barbour'),(30,'Reilly','Wagar'),(31,'Victoria','Ibarra'),(32,'Dakota','Wirth'),(33,'Lauren','Klocker'),(34,'Michael','Benson'),(35,'Sean','Rozga'),(36,'Cody','Vermeylen'),(37,'Kinaana','al-Jamail'),(38,'Daniel','Garcia'),(39,'Katrina','Saito'),(40,'Joshua','Galloway'),(41,'Aylin','Mendoza'),(42,'Sharon','Fyfe'),(43,'Afnaan','el-Mohammed'),(44,'Jesse','Williams'),(45,'Kenny','Fukushima'),(46,'Tawnie','Glaisher'),(47,'Britany','Stevens'),(48,'Alan','Trinh'),(49,'Zoe','Kern'),(50,'Sidney','Beavers'),(51,'Miriam','Aguilar'),(52,'Issac','Mata'),(53,'Hannah','Uren'),(54,'Zachary','Bradley'),(55,'Moira','Buttitto'),(56,'Nicole','Humpal'),(57,'Georgia','Williams'),(58,'Connor','Ferry'),(59,'Amanda','Tatum'),(60,'Cameron','Steinberg'),(61,'Shuraih','el-Karim'),(62,'Katelyn','Sharp'),(63,'Colin','Lemont'),(64,'Donald','Nevins'),(65,'Macaela','Kadillak'),(66,'Brittany','Pratt'),(67,'Cameron','Hancock'),(68,'William','Grevious'),(69,'Lindsey','Job'),(70,'Gabrielle','Smith'),(71,'Allison','Brink-Lomme'),(72,'Sheyenne','Delgado-Manzanares'),(73,'Joseph','Smith'),(74,'Fikra','al-Mina'),(75,'Aurelia','Davis'),(76,'Taylor','Elstun'),(77,'Joseph','Snider'),(78,'Sourinthone','Tran'),(79,'Ibrahim','al-Sawaya'),(80,'Alexandra','Levy'),(81,'Macie','Nguyen'),(82,'Sean','Tegtman'),(83,'Casey','Vanden'),(84,'Staci','Maes'),(85,'Luke','Davey'),(86,'Harper','Wheeler-Marques'),(87,'Sherleen','Saravanan'),(88,'Myles','Vaught'),(89,'Juan','Guerrero'),(90,'Lindsey','Freund'),(91,'Savannah','Clark'),(92,'Bradley','Monsell'),(93,'Daisha','Schmidt'),(94,'Airabella','Koontz'),(95,'Hailey','Malle'),(96,'Devon','Miranda'),(97,'Danielle','Nguyen'),(98,'Mateo','Cisneros'),(99,'William','Pablo'),(100,'Jason','Hundsdorfer'),(101,'Antonio','Desai'),(102,'Rachel','Bakeman'),(103,'Mamdooh','el-Moustafa'),(104,'Lindsey','Carter'),(105,'Duncan','Kruse'),(106,'Callahan','Foster'),(107,'Jamie','Ortiz'),(108,'Ryan','Barrett'),(109,'Samuel','Palmer'),(110,'Riley','Mcloughlin'),(111,'Aimee','Apelyan'),(112,'Maryah','Falloon'),(113,'Lucille','Mitchell'),(114,'Christian','Zambrano-Munoz'),(115,'Bryce','Vaillancourt'),(116,'Brandilyn','Collins'),(117,'Konner','Gearhart'),(118,'Andrew','Houghton'),(119,'Marisa','Ramey'),(120,'Magdalynne','Noah'),(121,'Megan','Salamena'),(122,'Meghan','Arnold'),(123,'James','Rice'),(124,'Wesley','Nunn'),(125,'Gareth','Newkirk'),(126,'Austin','Harline'),(127,'Courtney','Martinez'),(128,'Alexandra','Graham'),(129,'Alexander','Swearingen'),(130,'Brandy','Waldner'),(131,'Coleman','Keelen'),(132,'Casey','Buhr'),(133,'Shauna','Sneed'),(134,'Caitlin','Dean'),(135,'Andrew','Kirin'),(136,'Nadia','Minks'),(137,'Ivy','Lucero'),(138,'Kevin','Curry'),(139,'Charles','Cramer'),(140,'Emily','Warner'),(141,'Mckenzie','Haycock'),(142,'Faviola','Soto'),(143,'Stephen','Wharton'),(144,'Alexandria','Fortner'),(145,'Savannah','Kivett'),(146,'Tanner','Jones'),(147,'Luisa','Bautista'),(148,'Juhaina','al-Bilal'),(149,'Siena','Ingram'),(150,'Alondra','Gardea'),(151,'Vincent','Webster'),(152,'Abdul','Jabbaar'),(153,'Patrick','Carnes'),(154,'Shawn','O'),(155,'Jenna','Whitney'),(156,'Kaitlin','Krueger'),(157,'Jaime','Mikesell'),(158,'Katelynn','Andrie'),(159,'Maryn','Manzanares'),(160,'Colleen','Kohout'),(161,'Daniel','Spurlin'),(162,'Trevor','Bulba'),(163,'Jordan','Burkhamer'),(164,'Rebecca','Ah'),(165,'Christopher','Jacobo'),(166,'Min','Singal'),(167,'Corey','Rademacher'),(168,'Alexander','Reed'),(169,'Dalen','Whiting'),(170,'Chelsea','Persky'),(171,'Karla','Taylor'),(172,'Kaden','Yates'),(173,'Maimoona','el-Soliman'),(174,'Aaqil','el-Hashemi'),(175,'Sean','Bruso'),(176,'Andrew','Bishop'),(177,'Zahraaa','el-Yousef'),(178,'Surya','Ky'),(179,'George','Mann'),(180,'Latino','Calderon'),(181,'Baylen','Cloutier'),(182,'Nicole','Torres-Valadez'),(183,'Addie','Villavicencio'),(184,'Billy','Jack'),(185,'Isabella','Martinez'),(186,'Kimberly','Thielke'),(187,'Adrian','Miguel-Gomez'),(188,'Kayla','Sales'),(189,'Haafiza','al-Attar'),(190,'Juanita','Medina'),(191,'Emma','Kim'),(192,'Mckayla','Dopler'),(193,'Jonathan','Nevarez'),(194,'Roger','Redfern'),(195,'Hannah','Critchfield'),(196,'Chue','Fue'),(197,'Joshua','Mesan'),(198,'Dylan','Bell'),(199,'Troy','White'),(200,'Sabaaha','al-Latif'),(201,'Grant','Walden'),(202,'Kitty','Nguyen'),(203,'Tyler','Kibel'),(204,'Kyler','Overboe'),(205,'Alexander','Lizama'),(206,'Aaron','Knott'),(207,'Jessica','Greenberg'),(208,'Lexi','Hatton'),(209,'Jesse','Hodapp'),(210,'Andrew','Brunelli'),(211,'Makenzie','Swann'),(212,'Carlos','Anaya'),(213,'Felipe','Martinez'),(214,'Emma','Casias'),(215,'Adolf','Malik'),(216,'Christian','Chow'),(217,'Asad','el-Yacoub'),(218,'Holly','Marshall'),(219,'Brandilyn','Hanselman'),(220,'Nicole','Patria');
/*!40000 ALTER TABLE `result_student_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04 18:12:13
