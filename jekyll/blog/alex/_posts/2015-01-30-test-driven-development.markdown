---
layout: blog
title:  Test-Driven Development for the Non-Programmer
nav_title: Test-Driven Development
image: blog/alex/user-group-2014.jpg

tags:
  - software
  - development
  - technology
  - ruby
author: alex
excerpt: At SARD we practice Test Driven Development. If you are a software developer, you probably know what this is; if you are not, you almost certainly do not. But perhaps you should know, because it is an important idea that is becoming more and more relevant to all our lives. It has been said that TDD is as significant to software development as
---

At SARD we practice Test Driven Development. If you are a software developer, you probably know what this is; if you are not, you almost certainly do not. But perhaps you should know, because it is an important idea that is becoming more and more relevant to all our lives. There are parallels between the development of TDD for software and the [development of hand-washing for medicine](http://www.researchgate.net/publication/3248924_Professionalism_and_Test-Driven_Development).

If you are interested in learning a little about the concept, here is a small example in Ruby, the programming language that we write our server-side software in.

Please imagine we have a customer, and they have given us a requirement: they would like a box with 1 banana in it. We decide to use Test-driven Development to solve this problem. We start with the creation of a specification for the outcome we want. Let's make a nice empty Ruby file - box_specification.rb:

![Empty File](/images/blog/alex/tdd1.png)

So, what outcome do we want? Well, you can't have a banana in a box without a box: a box is required.

![Box](/images/blog/alex/tdd2.png)

We will also need to test if there is a banana inside the box. This little test will do that:

![Test](/images/blog/alex/tdd3.png)

In natural english, it translates to 

*If $bananas is equal to 1, print out the first line of green text; otherwise, print out the second line of green text*

Let's save that and then run our new box_specification file using Ruby:

![Run the test](/images/blog/alex/tdd4.png)

Uh-oh!

![First error](/images/blog/alex/tdd5.png)

An error! The error seems to be that there is no box ('cannot load such file'). And that actually makes sense; we have required a box in our specification, but no such box exists in reality. We'd better make a box, then:

![Make a box](/images/blog/alex/tdd6.png)

Let's run that test again.

![Second error](/images/blog/alex/tdd7.png)

It failed again... but this time, there's a simpler message: the number of bananas is incorrect! So the next step is clear. We need to put a banana in the box! Not too hard:

![Banana](/images/blog/alex/tdd8.png)

Once again, we run the test:

![Run again](/images/blog/alex/tdd9.png)

Hurrah! The test passed and our specification has been met! As a nice side-effect, we also have the code we originally wanted: a box with a banana in it. We can now invoice our customer, and even run the test to prove that the banana exists. 

You may have noticed that this took longer than simply putting a banana in the box would have. We also wrote 6 lines of code, instead of just 1. That is part of the cost of testing. But there is a huge benefit to offset that cost: TDD means that if anything changes in our codebase in the future, we have only to run this test to be confident that there is still a banana in the box, even if we forget that there should be.

When you are doing more complicated things, testing can also help force you to be clear about what you really want, right from the start. There can be a temptation to just start building things, rather than doing the hard but necessary thinking-work of deciding precisely what outcome you want. Testing first forces your hand.  

**BONUS LEVEL**

Ruby comes with a special testing language called Rspec, which looks like this:

![Rspec](/images/blog/alex/tdd10.png)

Failure with this test gives you a much more useful message than the one we made above, telling us exactly what was expected and what it actually got:

![Rspec error](/images/blog/alex/tdd11.png)

This comes in handy when your test suite has thousands of individual tests, as the SARD suite does!