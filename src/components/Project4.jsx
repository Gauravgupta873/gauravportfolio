

import landing from "../assets/LoadBalancer/landing.png";
import land1 from "../assets/LoadBalancer/land1.png";
import land2 from "../assets/LoadBalancer/land2.png";
import land3 from "../assets/LoadBalancer/land3.png";
import land4 from "../assets/LoadBalancer/land4.png";
import land5 from "../assets/LoadBalancer/land5.png";
import land6 from "../assets/LoadBalancer/land6.png";
import land7 from "../assets/LoadBalancer/land7.png";




import "./Project4.css";

function Project4() {

  return (
    <>
      <div className="project4">

        <div className="project4-content">

          <h1 className="project4-heading"></h1>

          <p className="project4-text">Client → Azure Load Balancer (Public IP) → Backend Pool (VM-01, VM-02) → IIS Web Server

          </p>

          <>
            <img src={landing} alt="landing" className="project4-img"  loading="lazy" decoding="async"/>

          </>
<div className="project4-box">

   <h5>1. INTRODUCTION</h5>
<p>
  The rapid growth of technology has made web-based applications essential for modern businesses, requiring uninterrupted and real-time access. This has increased the demand for IT systems that ensure high availability, fault tolerance, and scalability.

  Traditional single-server systems often fail to handle traffic spikes or failures, leading to downtime, revenue loss, and poor user experience.

  Load balancing addresses this issue by distributing requests across multiple servers, improving performance and reliability.

  This project focuses on designing a load-balanced web server architecture using Microsoft Azure. It uses multiple Virtual Machines (VMs) with IIS, managed through an Azure Load Balancer to ensure efficient request handling and high uptime.

  The project also supports future enhancements like autoscaling, performance monitoring, and security improvements using Azure Monitor and Web Application Firewalls (WAF), bridging the gap between theory and real-world implementation.
</p>
<h5>SYSTEM ANALYSIS AND DESIGN</h5>
<p>2.1 System Architecture
The Load Balancing Web Server project uses a multi-tier cloud architecture on Microsoft Azure to ensure high availability, scalability, and better performance for web applications. The system follows a structured approach with clearly defined components.

2.1.1 Architectural Overview
The system is built on Microsoft Azure infrastructure using the following core components:<br /><br />

<p>
  • <b>Resource Group:</b> Organizes and manages all Azure resources with centralized control and billing. <br /><br />

  • <b>Virtual Network (VNet):</b> Provides a secure and isolated network for communication between VMs and the load balancer.<br /><br />

  • <b>Windows Server Virtual Machines (VMs):</b> Multiple servers running IIS to host the web application.<br /><br />

  • <b>Public IP Address:</b> Enables external access and acts as the entry point for user traffic. <br /><br />

  • <b>Azure Load Balancer:</b> Distributes incoming traffic across multiple VMs to improve performance and reliability. <br /><br />

  • <b>Network Security Groups (NSGs):</b> Controls inbound and outbound traffic using security rules. <br /><br />

  • <b>Health Probes:</b> Monitors VM health and ensures traffic is routed only to active servers.
</p>

2.1.2 Architectural Layers
</p>

 <h5>2.1.2 Architectural Layers</h5>
 <p>
The system is organized into four main architectural layers:<br /><br />

<b>Presentation Layer:</b><br />
• Azure Load Balancer with public IP configuration<br />
• Client browsers and user devices<br />
• DNS services for domain resolution<br /><br />

<b>Application Layer:</b><br />
• Multiple Windows Server VMs running IIS<br />
• E-commerce application hosted on servers<br />
• Handles requests and session management<br /><br />

<b>Data Layer:</b><br />
• Local storage on VMs for web content<br />
• CSV files for configuration and logs<br />
• (Future) Azure SQL Database for dynamic data<br /><br />

<b>Control Layer:</b><br />
• Azure Portal for monitoring and management<br />
• Azure CLI for automation tasks<br />
• Network Security Groups for access control<br /><br />

<b>2.2 Workflow Description</b><br />
The workflow ensures secure and reliable request handling in a load-balanced environment.<br /><br />
</p>
<h5>2.2.1 Server Initialization Phase </h5>
<p>

<b>1. Administrator Authentication:</b><br />
→ Admin logs into Azure Portal using secure credentials<br />
→ Accesses the required resource group<br /><br />

<b>2. Infrastructure Verification:</b><br />
→ Validates virtual network and subnet setup<br />
→ Ensures NSG rules are properly configured<br />
→ Confirms all VMs are running correctly<br /><br />

<b>3. Load Balancer Activation:</b><br />
→ Admin opens Azure Load Balancer resource<br />
→ Verifies frontend IP and backend pool setup<br />
→ Checks health probes and load balancing rules<br />
→ Starts handling incoming HTTP requests (port 80)<br />

</p>
<h5>2.2.2 Client Request Processing</h5>
<p>

<b>4. User Access Initiation:</b><br />
The user enters the public IP address or domain name in the browser, after which the DNS resolves the request to the load balancer’s IP. Once resolved, a connection is established between the client and the load balancer to initiate the request process.<br /><br />

<b>5. Traffic Distribution Decision:</b><br />
The load balancer evaluates the health status of backend servers, applies the round-robin algorithm, and selects the most suitable virtual machine. The incoming request is then forwarded to the selected web server to ensure balanced load distribution and optimal performance.

</p>
<h5>2.2.3 Web Server Processing</h5>
<p>

<b>6. Request Handling:</b><br />
→ Selected IIS server receives the request<br />
→ Processes request and fetches content<br />
→ Generates HTTP response<br /><br />

<b>7. Response Delivery:</b><br />
→ Server sends response to load balancer<br />
→ Load balancer forwards it to client<br />
→ Browser renders the web page<br />

</p>
<h5>2.2.4 Health Monitoring and Failover</h5>
<p>

<b>8. Continuous Health Assessment:</b><br />
The load balancer continuously sends health probes to all virtual machines, and each VM responds through TCP health checks. If any virtual machine becomes unhealthy, it is automatically removed from the backend pool to ensure that traffic is only routed to active and functioning servers.<br /><br />

<b>9. Automatic Failover:</b><br />
When a virtual machine fails to respond to health checks, the load balancer immediately stops sending traffic to it. The remaining healthy virtual machines continue handling user requests without interruption, and once the failed VM recovers and passes validation, it is automatically re-added to the backend pool.

</p>
<h5>2.3 System Components Detailed Design</h5>
<p>

<b>2.3.1 Azure Load Balancer Configuration</b><br />
The Azure Load Balancer is configured with the following specifications:<br /><br />

<b>Basic Configuration:</b><br /><br />

<b>Basics</b><br />
→ Subscription: Azure subscription 1<br />
→ Resource Group: loadbalancer<br />
→ Name: loadBalancer<br />
→ Region: North Europe<br />
→ SKU: Standard<br />
→ Tier: Regional<br />
→ Type: Public<br />
<br/>

</p>



  <img src={land1} alt="config" className="config-img image-edit4  image4-top" />
  <img src={land2} alt="config" className="config-img image-edit4" />
  <img src={land3} alt="config" className="config-img image-edit4" />
  <img src={land4} alt="config" className="config-img image-edit4 image4-bottom" />
<p>

<b>Health Probe Configuration:</b><br /><br />
• <b>Protocol:</b> TCP<br /><br />
• <b>Port:</b> 80<br /><br />
• <b>Interval:</b> 5 seconds<br /><br />
• <b>Unhealthy Threshold:</b> 2 consecutive failures
</p>

<h5>2.3.2 Virtual Machine Configuration</h5>
<p>


Each backend virtual machine is configured identically to ensure consistent behavior.<br /><br />

<b>VM Specifications:</b><br />
→ <b>Operating System:</b> Windows Server 2019 Datacenter<br />
→ <b>VM Size:</b> Standard D2s v3 (2 vCPUs, 8GB RAM)<br />
→ <b>Storage:</b> Standard SSD (128GB OS disk)<br />
→ <b>Network:</b> Single NIC with private IP in VNet<br /><br />

<b>IIS Web Server Configuration:</b><br />
→ <b>Web Server Role:</b> Internet Information Services (IIS)<br /><br />

<b>Features Installed:</b><br />
→ Web Server (Common HTTP Features)<br />
→ Default Document<br />
→ Directory Browsing<br />
→ HTTP Errors<br />
→ Static Content<br />
→ Management Tools<br />
→ IIS Management Console<br />
→ IIS 6 Management Compatibility<br /><br />

<b>Website Deployment:</b><br />
→ <b>Content Path:</b> C:\inetpub\wwwroot<br />
→ <b>Default Document:</b> index.html<br />
→ <b>Application Pool:</b> DefaultAppPool<br />
→ <b>Authentication:</b> Anonymous access enabled<br />

</p>
<h5>2.3.3 Network Security Configuration</h5>
<p>

<b>Network Security Groups (NSGs):</b><br /><br />

→ <b>Inbound Rules:</b><br />
→ Allow HTTP (Port 80) from any source<br />
→ Allow RDP (Port 3389) only from admin IPs<br />
→ Deny all other inbound traffic<br /><br />

→ <b>Outbound Rules:</b><br />
→ Allow all outbound internet traffic<br />
→ Allow internal VNet communication<br /><br />

<b>Virtual Network Design:</b><br />
→ <b>Address Space:</b> 192.168.0.0/16<br />
→ <b>Subnet:</b> 192.168.1.0/24<br />
→ <b>DNS Servers:</b> Azure default DNS<br />
→ <b>Peering:</b> Not configured (single VNet setup)<br />

</p>
<h5>2.4.1 Step-by-Step Data Flow</h5>

   <img src={land5} alt="config" className="config-img" />

<h5>2.4.2 Concurrent Request Handling</h5>
<p>

The system efficiently handles multiple concurrent requests through:<br /><br />

<b>Parallel Processing:</b><br />
→ Multiple client connections processed simultaneously<br />
→ Each request handled by separate server instances<br />
→ Load distribution prevents individual server overload<br /><br />

<b>Session Management:</b><br />
→ Stateless application design (no session persistence required)<br />
→ Each request processed independently<br />
→ No client affinity configuration needed<br />

</p>
<h5>2.5 Security Design Considerations</h5>
<p>

<b>Network Security:</b><br /><br />

<b>Perimeter Security:</b><br />
→ Only essential ports (HTTP – Port 80) are exposed<br />
→ RDP access restricted to specific admin IPs<br />
→ Internal VM communication isolated within VNet<br /><br />

<b>Traffic Filtering:</b><br />
→ Network Security Groups enforce access control<br />
→ Default deny-all policy with explicit allow rules<br />
→ Regular security rule audits and updates<br />

</p>

<h5>2.6 Performance Considerations -Scalability</h5>
<p>

<b>Horizontal Scaling:</b><br />
→ Ability to add more VMs to backend pool dynamically<br />
→ Load balancer automatically distributes traffic<br />
→ No application changes required for scaling<br /><br />

<b>Vertical Scaling:</b><br />
→ VM size can be increased for better performance<br />
→ Storage performance tiers adjustable as needed<br />
→ Network bandwidth scales with VM upgrades<br />

</p>
<h5>2.7 Performance Optimization</h5>
<p>

<b>Load Distribution:</b><br />
→ Round-robin algorithm for even traffic distribution<br />
→ Health-based routing to avoid unhealthy instances<br />
→ Connection draining during maintenance<br /><br />

<b>Resource Utilization:</b><br />
→ Monitoring and metrics collection<br />
→ Performance baseline establishment<br />
→ Capacity planning based on usage patterns<br />

</p>
<h4>IMPLEMENTATION DETAILS</h4>
<p>

<b>3.1 Technology Stack</b><br /><br />

The Load Balancing Web Server project uses Microsoft Azure cloud services and Windows Server technologies. This combination ensures high reliability, seamless integration, and strong performance.
Azure provides scalable infrastructure, automated resource management, and advanced networking features, while Windows Server 2019 offers stable hosting and efficient web application performance.
Together, these technologies create a secure, flexible, and high-performance environment for deploying modern load-balanced web applications.
</p>

    <img src={land6} alt="config" className="config-img" />

<p>
<b>These metrics indicate a highly responsive, fault-tolerant, and scalable web infrastructure suitable for real-world deployments</b>
</p>
 <img src={land7} alt="config" className="config-img image4-topbottom" />

<h5>LIMITATIONS</h5>

<p>

Despite the successful implementation and performance of the Load Balancing Web Server project, certain limitations were identified during development and testing:<br /><br />

<b>1. Limited Scalability in Current Setup</b><br />
The system uses a fixed number of backend virtual machines. Although Azure supports autoscaling, it was not implemented in this version, limiting the ability to handle sudden traffic spikes.<br /><br />

<b>2. Absence of HTTPS Encryption</b><br />
The deployment operates on HTTP (port 80). Without SSL/TLS certificates, secure data transmission and protection against potential threats are not ensured.<br /><br />

<b>3. No Database Integration</b><br />
The application currently serves static content only. Dynamic data handling using SQL or NoSQL databases is not implemented.<br /><br />

<b>4. Manual Resource Management</b><br />
All configurations were performed manually through the Azure Portal. Automated deployment using Infrastructure as Code (IaC) tools like ARM templates or Terraform is not included.<br /><br />

<b>5. Single Region Deployment</b><br />
The infrastructure is deployed in a single Azure region (North Europe), which may affect global availability and increase latency for distant users.<br /><br />

<b>6. Basic Monitoring and Logging</b><br />
Although Azure provides monitoring tools, advanced logging, performance tracking, and alert mechanisms were not configured.<br /><br />

<b>7. Limited Security Hardening</b><br />
Basic security controls were applied using Network Security Groups, but advanced protections such as Web Application Firewall (WAF), DDoS protection, and identity-based access control were not implemented.<br />

</p>
<h5>FUTURE SCOPE</h5>
<p>

<b>Security Enhancements</b><br />
→ Implement SSL/TLS encryption for secure HTTPS communication<br />
→ Integrate Azure Web Application Firewall (WAF) for advanced protection<br /><br />

<b>Performance and Scalability</b><br />
→ Use Azure Virtual Machine Scale Sets for auto-scaling<br />
→ Integrate Azure CDN for faster global content delivery<br /><br />

<b>Application Modernization</b><br />
→ Migrate to microservices architecture<br />
→ Use Docker for containerization and Azure Kubernetes Service (AKS) for management<br /><br />

<b>Advanced Networking</b><br />
→ Implement Azure Traffic Manager for global load balancing<br />
→ Use VPN or ExpressRoute for hybrid connectivity<br />
→ Configure Azure DNS and virtual WAN for optimized routing<br /><br />

<b>DevOps and Automation</b><br />
→ Use Infrastructure as Code (Terraform / ARM templates)<br />
→ Implement CI/CD pipelines using Azure DevOps<br /><br />

<b>Advanced Features</b><br />
→ Add user authentication system<br />
→ Implement shopping cart and payment gateway integration<br /><br />

<b>Emerging Technologies</b><br />
→ Integrate edge computing and AI-based traffic management<br />
→ Explore blockchain for secure transactions<br />
→ Enable IoT connectivity for future-ready applications<br />

</p>
<h5>CONCLUSION</h5>
<p>

The Load Balancing Web Server project successfully demonstrated the design, deployment, and validation of a cloud-based web infrastructure on Microsoft Azure. It effectively addressed the limitations of traditional single-server setups by implementing a scalable and highly available load-balanced architecture.<br /><br />

During the project, multiple Windows Server 2019 virtual machines were configured with IIS to host a sample web application. The integration of Azure Load Balancer ensured intelligent traffic distribution, while Network Security Groups provided controlled and secure access. Deployment through Azure Portal and CLI highlighted efficient resource management.<br /><br />

Performance testing showed strong results, including fast page load time, low response time, and high system uptime. The system also demonstrated fault tolerance with automatic health monitoring and failover capabilities, ensuring consistent and reliable user experience.<br /><br />

The architecture follows best practices in cloud security, scalability, and performance optimization, making it modular and easy to maintain. Proper documentation and testing further strengthen its readiness for future enhancements.<br /><br />

In conclusion, the project delivers a reliable, scalable, and production-ready cloud solution, showcasing the effectiveness of modern cloud technologies in building high-performance web infrastructures.

</p>
<h5>REFERENCES</h5>
<p>

<b>References</b><br /><br />

1. Microsoft Azure Documentation, "Azure Load Balancer Overview", Microsoft Docs, 2024. Available: https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview<br /><br />

2. Microsoft Azure Architecture Center, "Load Balancing Azure Virtual Machines", Microsoft Docs, 2023.<br /><br />

3. Sharma, A., Patel, R., & Kumar, S., "Fault Tolerance in Cloud Virtual Machines: Experimental Analysis and Implementation", International Journal of Cloud Computing, vol. 15, no. 2, pp. 45–62, 2022.<br /><br />

4. Jain, M., & Patel, S., "Web Server Deployment Strategies in Microsoft Azure: A Case Study Approach", Cloud Computing Review, vol. 8, no. 3, pp. 112–125, 2021.<br /><br />

5. Kumar, V., Singh, R., & Gupta, P., "Multi-VM Failover Strategies in Cloud Environments: Benchmarking and Analysis", Journal of Distributed Systems, vol. 12, no. 4, pp. 78–94, 2023.<br /><br />

6. Chhabra, S., "Web Hosting in Azure Virtual Machines: IIS Configuration and Best Practices", Azure Technical Journal, vol. 5, no. 1, pp. 23–35, 2025.<br /><br />

7. Patel, H., "Load Balancing Implementation in Microsoft Azure: Real-time Validation and Performance Analysis", International Conference on Cloud Computing Proceedings, pp. 156–165, 2025.<br /><br />

8. Waghdekar, S., "Cloud Deployment Methodologies and Best Practices", University Technical Press, 2025.<br /><br />

9. Singh, S., "Azure Portal Operations and Resource Management", Cloud Infrastructure Journal, vol. 6, no. 2, pp. 67–79, 2025.<br /><br />

10. O'Hara, B., "Building Highly Available Web Applications using Azure Load Balancer", Microsoft Tech Community, 2022.<br />

</p>













































</div>





        </div>

      </div>
      {/* 🔥 LIVE PROJECT BUTTON */}
<div className="project-btn-container">
  <a 
    href="https://github.com/Gauravgupta873/Load-Balancer-of-Web-Servers-on-Azure" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-btn"
  >
    💻 View Source Code
  </a>
</div>

    
    </>
  );
}

export default Project4;