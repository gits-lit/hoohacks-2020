## Inspiration
Learning and studying a topic requires a lot of time and dedication. Often, students find themselves not really knowing what concepts are important when studying, or simply don't have the resources available to test their knowledge and understanding of a topic. With this in mind, we wanted to create a simple yet intuitive application that will serve as a study tool and generate endless content for students to test their knowledge on a particular subject.

## What it does

**Slearn** utilizes artificial intelligience in order to generate flashcards on any topic.

Students can enter a topic and **Slearn** will scour the internet to find information on that topic. **Slearn** then leverages the power of artificial intelligence to form questions and answers on the information. This information is then presented as a pile of digital flashcards. When presented with a question, students can either swipe right or left on the flashcard pile, in a manner similar to that of real flashcards. This provides an endless resource of information for students to learn from.

Our code leverages Wikipedia's grand expanse to find content written on the entered optic coupled with Quillionz's API to generate questions, allowing for high-quality questions about anything.

![](https://i.imgur.com/NDGYIYx.png)

## How it's built
**Slearn** is a full-stack mobile-first web application. We designed **Slearn** with Figma, with the intent of modeling user interactions found on real-life flashcards. In development, we succeeded in implementing our design by utilizing React in combination with React Spring, a Javascript spring-physics based animation library. Additionally, components on our application are connected with Redux to allow for live updating website elements as data is retrieved from our server. Tying the entire application together are Ant Design, a UI framework, and less, a CSS preprocessor which helps achieve its sleek design.

![Figma](https://i.imgur.com/tfjhCxh.png)
___We designed our application collaboratively with Figma___

In order to generate data to populate the flashcards, our server depended on two different APIs. First off, we utilized Wiki JS in order to retrieve data on any topic that the user enters. We took this data and sent it to Quillionz's, an AI questions generated. This data was then sent to our front end which converted the data into flashcards.

![Wikipedia](https://i.imgur.com/2VSg0xd.png)
___We looked to Wikipedia in order to find information about any topic___

## Challenges
Quillionz's API was poorly documented and gave us countless errors without explanation, so that was a strong hurdle. Even though we were able to make requests on Postman, we struggled to implement the API calls into our own application. Additionally, we were restricted to only five free API requests per day. Because of this, we had to repeatedly generate new keys in order to continue testing our application.

![Quillionz](https://i.imgur.com/hqTcJWr.png)
___Quillionz's API formed the basis of our application, but it was a pain to use.___

On the front end side, the biggest challenge was developing the flashcards. We knew we wanted our flashcards to look and feel like flashcards, not just be 2D elements on a screen. We ended up leveraging React Spring which helped make our flashcards feel real.

## Accomplishments

We're proud to have successfully developed this idea in the span of just a few hours. As education has moved online recently, we wanted to create more online resources for students. We're glad to see that this idea is possible, it provides a tool that can provide students an endless amount of information and knowledge. With education being moved to be virtual for the foreseeable future, we hope that this digital tool can provide students an abundance of use.

## What we learned

On the client side, this was our first time ever using React Spring. We rarely work with physics libraries on the front end and it was interesting seeing the result. Additionally, we had to deal with intensive state management to connect with the backend. We had to store all sorts of data, including arrays containing information about every single hard.

On the back end, our team learned how to utilize two brand new APIs for the first time. Of course Wiki JS was simple to use but Quillionz, albeit powerful was difficult to use. Struggling through this made us stronger back end developers for sure.

![](https://i.imgur.com/VyLKwD8.png)
___We leveraged many technologies in order to develop **Slearn**.___

## Future for Slearn
There are many possibilities for the future of **Slearn**. From a consumer standpoint, we would love to add additionally functionality in the user flow. Students should be able to track their progress over time in terms of questions they got right and wrong. Additionally, we also want to quiz students periodically to increase retention of information.

We also believe that we could tremendously improve the quality of flashcards made by filtering out information that we receive from Wikipedia, factor in additional sources, and develop our own AI to generate questions. We would also love to make our API open source, so that other developer can utilize this information, not just for flashcards but to create other study tools such as notes and games.

Of course, we also want **Slearn** to grow into an actual tool that our peers will use. We plan on promoting this project greatly and making it accessible and available to as many people as we can.
