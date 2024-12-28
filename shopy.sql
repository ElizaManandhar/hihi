-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2024 at 07:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopy`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--
create database shopy;
use shopy;
CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(1000) NOT NULL,
  `item_price` varchar(500) NOT NULL,
  `item_desc` varchar(5000) NOT NULL,
  `item_image` varchar(1000) NOT NULL,
  `gender` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `item_price`, `item_desc`, `item_image`, `gender`) VALUES
(1, '30000', '0', '', 'lipgloss.jpg', 'Male'),
(2, 'Jean Pant', '4000', 'This is the description', 'compact powder.jpg', 'Female'),
(3, 'Skirt', '2000', 'This is the skirt', 'lipgloss.jpg', 'Female'),
(4, 'Mens Tshirt', '1200', 'THis is the tshirt for men', 'lipgloss.jpg', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);
