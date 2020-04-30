---
layout: blog
title: eRostering The Next Generation
nav_title: eRostering The Next Generation
tags:
  - development
  - technology
author: robl
image: blog/robl/rostering/allshifts.png
excerpt: Plenty can happen in just a few months, times like these certainly prove that. Back in January we went live with our first iteration of eRostering with our flagship trust.

---
Plenty can happen in just a few months, times like these certainly prove that and the SARD development team are continuing to work as a strong team from their remote locations. Back in January we went live with our first iteration of eRostering with our flagship trust. I think can be confident enough to say it has been successful, we took an existing Roster for a number of sites and migrated it into SARD eRostering granting access to a number of administrators as well as directly to Junior Doctors to be able to remotely check on their current shifts.

Our first task was to immediately respond to early release bug fixes, and any last minute features to allow admins to do the sort of tasks they would expect to be doing every day. Often it's those features we take for granted that get overlooked, and we were able to add those new features in within a matter of days to keep the transition as smooth as possible. Our humble team of 4, [Artur](/people/artur), [Pedro](/people/pedro), [Simon](/people/simon) and [myself](/people/robl) have since then been working on a number of new improvmentss and here are but a few of them.

<h3>All Shifts</h3>

The core feature of eRostering is being able to visualise the shifts for a given Trust, and to be able to drill down that dataset to see as much or as little as possible to make it manageable. This revamped page is a long way from our [first draft](/blog/robl/2019/12/12/erostering.html), and has been rebuilt to cope with sometimes huge datasets in order to make the interface as responsive as possible, not only for an administrator on a desktop but also for mobile for users who need access from a smaller screen.

![Mega Modal](/images/blog/robl/rostering/allshifts.png)

<h3>Admin Modals</h3>

Presenting the data on is fine, but at some point we need to make changes and we needed to revamp the interface to bring other features inline with the new All Shifts presentation. This interface is vital when Administrators need to make quick changes to shifts whether to re-assign them between Junior Doctors or even to Agency Locums. We bring you, the MegaModal.

![All Shifts](/images/blog/robl/rostering/megamodal.png)

<h3>Shift Swap Shop</h3>

It appears that when any new Roster is published there is a mad dash to swap days for a variety of reasons and we were keen to work on that feature from the outset, we implemented a Shift Swap approval process that had been used over 50 times in the first few weeks saving time and paper and generally making the process streamlined for Doctors and Administrators. However, we were dealing with some often tech savvy Junior Doctor's building their own solution via WhatsApp to share the availability of shifts with their colleagues. This was a perfect candidate feature for us to try and bring on board and expand our existing Shift Swap process.

![All Shifts](/images/blog/robl/rostering/shiftswapshop.png)

<h3>Interface Improvements</h3>

We are consistently looking at improving the interface, and as such throughout the process of new features we leant on [Simon](/people/simon) shifting his focus from SARD, Foundry and indeed this site to focus on eRostering over the last few months. Today we're launching the new sidemenu which is again another vast improvement.

![All Shifts](/images/blog/robl/rostering/sidemenu.png)

<h3>Locations / Rota Building / Shift Requirements</h3>

As we continue to improve the existing features we are also looking ahead and the work in the next few months and that is building the tools to ensure we can build Rosters for the next six months for our existing client, based on existing DRS work patterns. This has meant restructuring our data, in particular Location (the physical location of a Shift) to accommodate an easier building process. We are also making changes to allow us to support our second client. Each client has a different organisational structure, teams, processes, etc and we need to approach each new client by analysing their needs and ensuring we can build the product out with new features without compromising on features for existing clients,

Looking forward to this next stage of work, and reporting back.
