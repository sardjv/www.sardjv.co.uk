---
layout: blog
title:  Sharing interests with Zombies
published: false
nav_title: Zombies and Me
image: blog/kevin/zombie_lunch_bag.jpg
tags:
  - life-hacks
  - brains
  - zombies
  - abstraction
  - optimization
  - coding

author: kevin
excerpt: Zombies and I share a common interest... Brains!! Your brain is your most valuable asset. In this blog post I discuss why we should use abstractions and black box technology even if it’s sub-optimal. Optimise for your brain first, the computer second. Will power is limited so leave your brain resting or working on the things that really matter.
---

WARNING: Geek Tao but applicable to everybody.
TL;DR - Zombies and I share a common interest: MMmmmm Brains!! Your brain is your most valuable asset. Use abstractions and black box technology even if it’s sub-optimal to something hand-crafted. Optimise for your brain first, the computer second.

We are the 99%; us “sub 100k users” programmers. We have a different optimisation problem to BigCorp CTO with X million users/day. When a clueless junior PHP coder in a garage can fake it like he’s the entire engineering team of Netflix then something’s up.

Once upon a time, I was the sole coder in a 6 man animation company in South London. The team consisted of:

* two music rockstars (owners, excellent salesman and guitarists)
* An ex-midwife (rockstar’s sister) learning finance.
* two artists/animators
* Me - ALL things technical

It was great fun. We made mobile phone wallpapers and screensavers for the UK’s Premiership football teams until the iPhone came along and demolished that entire industry.

One day, I arrived at work to find the phone ringing off the hook and our **one** server at 100% CPU usage. What was happening? Unbeknownst to me, the Football Association had released fixtures for the coming season. At the time, the webpage of every major football club in the country was loading up a small code snippet from our servers. Every football fan in The World (100’000 visitors per hour or 2000 visitors per second) was querying our **one** MySQL database.

‘Kevin? What’s happening, dude? Is there something wrong with the computers, man?’ - asked Rock Boss. ’No, just lots of traffic. I’ll get it sorted’. It took about 20 mins to hot fix a *really* simple change that queried the database every second. I’m not sure I even knew it was called a cache. The CPU dropped to 20% and we made a good amount of money that day.

A lasting impression was that if a clueless noob PHP coder could optimise for this then the demand for high traffic optimisation must be SO rare. I was becoming interested in Ruby on Rails and the main criticism was “It doesn’t scale”. All I could think was - ‘so what?’. Who **really** needs scale? What percentage of the programming population exists in this realm? A few places: financial arbitration, Twitter API, running Google’s search engine, Facebook…. Not my problem. Not MOST people’s problem. Our problem is building ‘Facebook for dogs’, with its 1000 visitors a year, quickly and cheaply.

We are the 99%. We have a different optimisation problem to BigCorp CTO with X million users/day…

When I sit at my desk, I have two computers: a web server (£1000) and MY BRAIN (~£1.5 million*). Even *my* calcified Brain is vastly superior to the server. At all times, I optimise for My Brain first. Brain is the scarcest and most valuable resource. If I need more RAM, CPU then I buy another server.

Until you’re running a multi-million server farm then ALWAYS optimise for your Brain first. That means abstract! abstract! abstract! Even if you can optimise that “Black Box of Tricks” to run faster, don’t do it if it means losing brain computing cycles because they’re REALLY expensive.

SIDE NOTE: I think this is why good user interface is becoming increasingly important. The 1st rule of good user interface is “Don’t make me think.” For a while our system didn’t have a paperclip icon on the attachment button. We found this out through our unique and successful in-system chat feature. We put it right and the problem went away. Bad user interface throws a spanner into your Brain’s engine. That's expensive. Don't get in the way of the brains!! Mmmmmm brains.

If you’d like to find out more about how SARD JV can abstract away your tech pain, leaving you to do the things you love then please feel free to give us a call on 020 8771 4153 or email us at <info@sardjv.co.uk>.

