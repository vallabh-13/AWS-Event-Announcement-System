# Second Cloud Project - AWS-Event-Announcement-System

This repository contains a simple demo application built using a three-tier architecture on AWs. The application demonstrates the fundamental concepts of separating frontend, backend, and database components in a web application.

# What I learned from the project-

- For demo Project Single Nat gateway was used but for production workload, always recommended to have Nat gateway for each private subnet in each AZ so that, when AZ fails the outgoing network connecton is not stoped.
- Nat gate way should be made only after internet gateway is ready and attached or else it will fail.
- This project was made manually to understand workflow but, In the future terraform would be a good option for effective use.
- When creating DB, Managing it with AWS Secrets Manager is mush secure but for now did it by seld managed option.
- Bst to have DB in private subnet and should not have public access. 

## Architecture Diagram

![alt text](Aws-3-Tier-Architecture.jpg)

## Final Result

![alt text](Final-Result.png)

The application follows the Basic three-tier architecture:

1. **Frontend Tier**
   - HTML/CSS/JavaScript
   - Served by NGINX web servers

2. **Backend Tier**
   - PHP API
   - Communicates with database
   - Serves data to frontend

3. **Database Tier**
   - MySQL database with Amazone RDS
   - Stores application data

## Features

- Basic responsive design and Practice Hands-on Project.

## AWS Infrastructure Components

When deployed on AWS, the infrastructure includes:

- **Web ALB**: Load balancer for distributing traffic to web servers
- **NGINX Servers**: EC2 instances in an auto-scaling group
- **App ALB**: Load balancer for distributing traffic to application servers
- **PHP Servers**: EC2 instances in an auto-scaling group
- **RDS MySQL**: Managed relational database service

### Steps

1. Create VPC
2. Create subnets
    1. Web Public 1a, 1b, 1c
    2. Web Private 1a, 1b, 1c
    3. App Private 1a, 1b, 1c
    4. Db Private 1a, 1b, 1c
3. Create route tables
    1. Web Public
    2. Web Private 1a, 1b, 1c
    3. App Private 1a, 1b, 1c
    4. Db Private 1a, 1b, 1c
4. Associate route tables with subnet
5. Create internet Gateway (IGW)
    1. Attach it to VPC
6. Create NAT gateway (NATGW) in web public subnet
7. Add IGW and NAT routes in route table
    1. Public -> IGW
    2. Private -> NAT
8. Create security groups
    1. Frontend ALB
    2. Frontend Servers
    3. Backend ALB
    4. Backend Servers
    5. Db Private Servers
9. Create database subnet group
10. Create database server
11. Create Frontend ALB
    1. Create Frontend ALB target group 
12. Create Backend ALB
    1. Create Backend ALB target group
13. Create Frontend Server AMI
    1. Install Nginx
    2. Install Git
14. Create Backend Server AMI
    1. Install PHP, MySQL, Apache
    2. Install Git
    3. Run the database script
15. Create the Launch Template for Frontend Server
16. Create the Launch Template for Backend Server
17. Create the Auto Scaling Group for Frontend Server
18. Create the Auto Scaling Group for Backend Server

## Security Considerations

This is a demo application and lacks several security features that would be necessary in a production environment:

- Input validation and sanitization
- Authentication and authorization
- HTTPS encryption
- Protection against SQL injection (although PDO with prepared statements is used)
- CORS configuration
- NACl not included

This sample application was created as a demonstration of AWS three-tier architecture principles.
