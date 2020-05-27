---
layout: blog
title: ESR Wrapper API
nav_title: ESR Wrapper API

tags:
- development
- technology
author: alex
image: /images/blog/alex/esr_wrapper/03_demo.png
excerpt: SARD and Oxleas NHS Trust have begun work on an API wrapper to improve access to NHS Electronic Staff Record data.

---

![Architecture](/images/blog/alex/esr_wrapper/01_architecture.png)

SARD and Oxleas NHS Trust have begun work on an API wrapper to improve access to NHS Electronic Staff Record data. The project is funded by NHS Improvement.

At present, ESR data must be accessed either through an existing frontend, or through a daily file downloaded from an FTP server. This leaves quite a high barrier to developing new applications on top of the data, since each NHS Trust must develop a way to import the latest data.

The ESR Wrapper project adds a generic RESTful API that can import the generic update each day and expose it for access. RESTful APIs are the [dominant form of web API](https://www.programmableweb.com/api-research) and allow data to be queried in a secure and scalable way.

The project is a work in progress but when complete should make it easier for NHS trusts to build useful applications on top of centralised ESR data. The project will be released as open source the code so that other NHS trusts can use the software as needed.

<h3>API</h3>

The RESTful API is documented with [Swagger](https://swagger.io/) and designed to conform to the [JSON:API](https://jsonapi.org/) specification. The swagger documentation is built from the application’s test suite, and includes example responses and the ability to manually test the API.

![Api](/images/blog/alex/esr_wrapper/02_api.png)

<h3>Example UI</h3>

See here for a simple demo of the kind of interface that can be built on top of the API: [https://esr-api.herokuapp.com/](https://esr-api.herokuapp.com)

![Demo](/images/blog/alex/esr_wrapper/03_demo.png)
