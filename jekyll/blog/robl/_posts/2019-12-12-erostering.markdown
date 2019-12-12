---
layout: blog
title: eRostering Humble Beginnings
nav_title: eRostering
tags:
  - development
  - technology

author: robl
excerpt: Jel

---

SARD embarked on an often requested feature to provide eRostering in mid-2019. Working closely with SLaM (South London and Maudsley) we have started fleshing out the simplest implementation of *rostering*. Taking existing live rostering data we (the Rostering Team; [Pedro](/people/pedro.html), Artur and [myself](/people/robl)) have been able to produce a prototype application with an aim to develop it into a full-featured platform that will compliment our current SARD offerings.

![eRostering login](/images/blog/robl/rostering/login.png)

What is eRostering? In simple terms its is a service that provides a way to place your employees at a location, on a date for a specified period of time. Every business needs to know and visualise how many employees they have, where everyone is, and perhaps more importantly their employees need to know where they are supposed to be to. So our first task was to allow Junior Doctors to be able to view their own shifts.

![shift calendar](/images/blog/robl/rostering/shifts.png)

This is followed closely by Junior Doctors to be able view all their colleagues shifts in order to understand who is working where and at what times, and who you are most likely to be working with. As you can see this can be a bit of a beast so we needed to think in terms of presenting this data with enough options to be able to make sense of and limit the data to just what you need.

![all calendar](/images/blog/robl/rostering/all-shifts.png)

When you have that you will know which shifts you may or may not be able to work and can start working out when and with whom you could swap shifts with. So our final initial feature is to add the ability to swap a shift with a colleague to replace internal paperwork trail.

![all calendar](/images/blog/robl/rostering/shift-swaps.png)

It may seem like we've made lightwork of this initial phase but there has been an awful lot of planning behind the scenes, data crunching and modelling, and building the right interface for administrators that is both consistent with all SARD products and also that makes sense of what will be in some cases very large datasets.

Our next milestone is to complete some minimal features to cope with leave and sickness cover and this will enable us to go live very early next year. We've found working alongside a trust to build a system that meets the requirements and exceeds those of their current rostering solution very rewarding. The real challenge is to be able to shape our vision of rostering and bring our existing clients with us.
