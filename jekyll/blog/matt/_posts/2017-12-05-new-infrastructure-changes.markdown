---
layout: blog
title: New Infrastructure Changes
nav_title: Infrastructure Changes

tags:
  - development
  - technology
  - new-features
  - infrastructure
author: matt
excerpt: We have been reviewing our infrastucture to ensure our software is built on the strongest possible foundation.

---

As SARD continue to improve our software, the focus on the hidden infrastructure behind the software is also important. Infrastructure needs to be reviewed regularly and must not be forgotten, as this is the core backbone of the company. You can have award winning software but if the hardware fails, service cannot be maintained. Ultimately, our customers will remember downtime over the latest features released.

Over the last few months, we have been reviewing cloud based virtual server providers and technologies to quickly deploy and maintain our software. 

There are many providers of virtual private servers but SARD have chosen DigitalOcean for our production/staging and test servers. They provide droplets/storage which can be deployed in seconds on the first and only all-SSD cloud. Secondly, a full API is provided to create/run/maintain/destroy test droplets automatically. This feature allows seamless, continuous integration and delivery using products like Jenkins. DigitalOcean also provide a load-balanced solution to spread the traffic/connections across multiple software nodes. This helps with performance and spreads the load.

Our next major choice was to go with installation on bare metal or packaging the application/db in a form of isolation. SARD have chosen Docker to provide containerisation to separate the application and infrastructure. This allows quick deployment by building containers for the application and database. Containers are also platform independent which allows our developers to deploy staging/test versions on any hardware available. This is valuable - it keeps the host machine clean because all software dependencies are kept inside the container. Docker swarm provides cluster management and orchestration to provide resilience and balanced performance across multiple droplets.

We believe that DigitalOcean combined with Docker will provide the perfect platform to allow for resilience, performance and future expansion.

<div class='row'>
  <div class='col-sm-6 thumbnail' style='border: 0px; padding: 20px;'>
    <img src='/images/blog/matt/DO_Logo_Vertical_Blue.png'/>
  </div>
  <div class='col-sm-6 thumbnail' style='border: 0px; padding: 20px;'>
    <img src='/images/blog/matt/mono_vertical_large.png' />
  </div>
</div>

