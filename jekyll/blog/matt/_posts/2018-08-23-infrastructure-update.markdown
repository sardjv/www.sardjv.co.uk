---
layout: blog
title: Infrastructure Update
nav_title: Infrastructure Update

tags:
  - development
  - technology
  - new-features
  - infrastructure
author: matt
excerpt: We have been reviewing our infrastucture to ensure our software is built on the strongest possible foundation.

---
As the <a href="https://www.sardjv.co.uk/blog/matt/2017/12/05/new-infrastructure-changes.html">last blog post</a> on infrastructure changes was at least six months ago, it is time for an update. This has been a difficult task to complete, as soon as an approach is chosen, the technologies change or the preferred tools diverse.

In the first blog, Docker Swarm and Digital Ocean proved to be a good combination but over time, Docker Swarm has lost out to Kubernetes which is offered by Google. While both products are still offered, Kubernetes currently holds the largest market share and is pretty much the standard platform. Containerisation by using Docker is still important but Kubernetes has clear advantages over Docker Swarm. The main reason for its success is the community has got behind this product and there is a wealth of knowledge available for support. Kubernetes offers more customised options and provides a high fault tolerance. While Docker provides an open standard for packing and distributing containerised applications, something else, like Kubernetes, has to provide coordinating, scheduling, flexible scaling and a way of communicating with each other.

Now that Kubernetes has become the de facto standard for overseeing software containers, the most popular customisable cloud services platform is Amazon AWS. There are other platforms available but are still in their infancy and again AWS is the most popular and has the best support.

Over the last six months, SARD has setup a Kubernetes cluster on Amazon AWS using Kops for configuration management. For continuous integration and continuous delivery Jenkins provides the perfect pipeline flow from committing code in GitHub (tagging), building Docker containers, pushing to Docker Hub Registry, running a full test suite, deploying to staging and then pushing to live. Our objective is to provide a seamless development environment, allowing SARD developers to focus on writing code and unit tests and not to be concerned with the process of getting their changes and new features to the end customer.

This has been a fantastic project to work on, as this is a constantly moving target and seems to be fresh and breaking into new territories. SARD will be moving to its new infrastructure in September, so watch this space.


