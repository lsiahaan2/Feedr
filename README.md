# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 2: Feedr (3:00)


| Timing | Type | Topic |
| --- | --- | --- |
| 120 min | [Lab](#lab) | APIs, DOM, JS Fundamentals |

## Objectives

>Instructor Note: Make sure the following objectives have been met by the end of the lab session:

* Familiarize yourself with the API documentation news sources .
* Learn how to parse through API documentation.
* Understand how to successfully retrieve information from APIs.
* Fork and clone your starter code.
* Strategize ways to hide the loader and replace the content of the `#main`
container with that of the API.
* Look up other news sources that might be useful for the project.
* Understand how to implement handlebars in the project (optional for the final product).


### Overview

[Feedr Demo App](https://pages.git.generalassemb.ly/marcwright-rem/12-project-2-feedr/feedr-starter-code/#)

<a name = "lab"></a>
For today's class you'll be getting your Feedr project set up.Our
feed reader will pull feeds from our favorite blogs. The user will be able to
filter between publications through the dropdown on the header menu.
Clicking/tapping on one of the articles will load a pop up with more
information. The user from that point will be able to either dismiss the
additional information or go to the referenced article.

This will be our first single page app. All of our application views will be
contained in the provided [feedr-starter-code/index.html](./feedr-starter-code/index.html) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

Get started by opening up the [Project 2 Feedr starter code](./feedr-starter-code).


### Getting Started

Begin by "forking" this repository. You can do so by clicking the "Fork" icon on
the top right of [this page](https://github.com/misk-jsd2/12-project-2-feedr) page. Once
complete, clone the repository to your computer by running the following
commands:

```
cd ~
git clone https://github.com/<your-username-here>/12-project-2-feedr.git
cd 12-project-2-feedr/feedr-starter-code
```

You can then open the directory in your text editor and work on the below steps. As you accomplish a feature, be sure to commit it in
Git with the following commands:

```
git add .
git commit -m "A description of what was added"
git push -u origin master
```


## Suggested Ways to Get Started

> Below are some more specific ways for ways in which you can help students get started on the project.

  - Start by adding all the DOM functionality first.
  - Map out all of the needed fields/properties from each respective feed.
  - Start by doing a console.log of the incoming feeds to confirm you have a
    successful transaction before you start mapping anything out.
  - Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
    to get a clean view of the JSON dump in your browser.
  - Think about ways to best standardize all of your incoming data.
  - Test small pieces of functionality frequently, to make sure everything is
    working.
  - Use tools such as Stack Overflow, Google and documentation resources to solve
    problems.

  ---
