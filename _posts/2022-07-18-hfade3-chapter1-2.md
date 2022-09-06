---
title: "My Studies of Head First Android Development - 3rd Edition: Chapters 1 & 2"
excerpt: "For the better part of the past year, I have been working on becoming an Android Developer. As of recently, the effort I have been putting into it, has paid off, but that is for another post."
coverImage: "/assets/blog/covers/2022/software-developer-glasses.jpg"
date: "2022-07-18T15:03:08.530Z"
ogImage:
  url: "/assets/blog/covers/2022/software-developer-glasses.jpg"
---

For the better part of the past year, I have been working on becoming an Android Developer. As of recently, the effort I have been putting into it, has paid off, but that is for another post. My main issue has been learning consistently and being able to apply the knowledge to real-world applications. Between my day job and parental responsibilities, finding the time to sit down and study is difficult.

*Note: my writings may contain affiliate links for any books or products I reference. Clicking on these links may result in compensation.*

## The Reasoning & Ideas Behind My Studies
At my previous employer, I had set the goal of completing the [Android Basics in Kotlin](https://developer.android.com/courses/android-basics-kotlin/course) course offered by the Google Development team. Upon completion, I would then work on passing the [Associate Android Developer certification exam](https://developers.google.com/certification/associate-android-developer) within the year. Unfortunately, I was not fully able reach that goal. 

I did make it through four of the 6 available units before the end of 2021 while balancing my work and personal life. Although this was difficult, I intentionally built time into my work day to make it happen because this was a work-related goal. It was also a big part of my personal development plan there.

Due to this on-and-off learning being an ineffective way to learn, I decided to take it a bit more seriously this year. So I have started to study Android for at least one hour every morning after working out. As it had been a few months since taking a break from the course, I knew I needed some review to tackle units 5 and 6 and the certification exam.

## Dive Into Head First Android Development - 3rd Edition With Me
Personally I have enjoyed the first few chapters of [Head First Design Patterns - 2nd Edition](https://amzn.to/3Kvqh4d) for both the first and second editions. So I thought I would give the newest edition of [*Head First Android Development*](https://amzn.to/3JoTixn) a go.

*Disclaimer: If you have not programmed before (or worked in Kotlin), I recommend looking into another book or set of lessons first. Since I am talking about Head First, the book recommends looking at [Head First Kotlin - 1st Edition](https://amzn.to/3LY1ZQC) to get your feet wet with the language. I also would recommend taking a look at interactive courses like [JetBrains Academy - Kotlin Basics](https://hyperskill.org/tracks/18). I enjoyed how it allowed you to try and skip sections familiar to you. Additionally, I enjoyed the integration with JetBrain's IDEs, such as Android Studio.*

## My Note-Taking Process
I have recently started using [Obsidian.md](https://obsidian.md) to take notes alongside these blog posts. Obsidian.md is a nifty and fully featured note app. It is marketed as "a second brain, for you, forever" and described as a *powerful knowledge base (read: wiki) on top of a local folder of plain Markdown files*.

The selling point for me, and probably for the privacy concerned, is that your data is stored locally! For those interested in the app, I used [this playlist](https://www.youtube.com/watch?v=QgbLb6QCK88&list=PL3NaIVgSlAVLHty1-NuvPa9V0b0UwbzBd) to learn the basics, and I was able to start navigating it quickly.

## Let's Dive in!
The first two chapters have been fairly easy for me (given my working knowledge of Android and Kotlin). These chapters include:
- Chapter 1: *Getting Started: Diving In*
- Chapter 2: *Building Interactive Apps: Apps That Do Something*

## Chapter 1
The initial "dive-in" covers an introduction to [Android Studio](https://developer.android.com/studio) IDE (Integrated Development Environment) and how to setup a basic app. I have been using this application for a while, so this chapter went fairly fast for me. In fact, I had already set it up on my MacBook Pro before receiving the book in the mail.

This chapter will give folks new to Android development a thorough walk-through of setting up the IDE. The chapter also includes an overview of where to find things you need within the first few chapters. The first chapter also gives the reader a brief introduction to the Android API ecosystem and some basic concepts like layouts.

## Chapter 2
The second chapter digs into making something I find interesting, a beer listing app. It features good introductions to layouts, UI component views, activities, and resources. This chapter has you build an app with a beer color `Spinner` (drop-down), connected to a Button, when pressed, generates a list of appropriate beers below.

The walkthrough of this build is very introductory and explains what it is doing multiple times to drive the concepts home. This method is central to the whole Head First series style. It desires to teach you about thinking (metacognition) and how to learn better, given their studies on how the human brain learns.

Completing the app was not too bad with my pre-existing knowledge, but it solidified my basic knowledge about Android as follows:
- All UI elements extend the View class. To elaborate, this means `Button` and `Spinner` are Views, and all share common attributes and methods. `TextView` was just obvious... 😁
- Placing strings in to a resource file is a forward thinking habit for localization practices.
- Your resource file can also include arrays of strings that Spinners can consume for listing things.
- Android methods like `findViewById()` and `setOnClickListener()` are essential code building-blocks for successful apps.
- Using the above methods, we can locate elements and respond to actions on them, then update the UI by setting other elements' attributes.

Overall, I am excited to be back into learning Android development! I hope this helps you become excited to start learning (if you haven't yet). The Head First series learning style speaks in a way that makes learning easy for me. It may not be for everyone, but if you haven't tried it, I think you should give it a go!

## Follow Along on My Blog Series Regarding Head First Android Development: 3rd Edition
Have you found my review of the first two chapters of Head First Android Development: 3rd Edition helpful? If so, check out my [next blog post featuring chapters three and four](/posts/2022-07-27-hfade3-chapter3-4) and what lessons I learned from them.

### Cross-post
This was also posted on [Dev.to](https://dev.to/ddaypunk/my-studies-of-head-first-android-development-3rd-edition-chapters-1-2-2l1c) where commments are enabled, and welcomed!

### Sources
*Head First Android Development, 3rd Edition - Dawn Griffiths, David Griffiths*

