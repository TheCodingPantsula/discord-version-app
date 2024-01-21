## Overview
This full-stack web application is designed to replicate Discord, a platform used for chat and voice communication among gamers and communities. The application also features team management capabilities that enhance collaboration and productivity. Currently, the app is still undergoing development and improvements before it can be deployed. I am proud of this project and I will include it in my portfolio site.

## Technologies Used
The app was built using Next.js, a React framework that enables fast and scalable web application development. It also leverages Clerk, a platform that provides authentication and user management functionalities. Additionally, Uploadthing was used for file uploading and processing, while LiveKit was used for real-time audio and video communication.

## Challenges and Solutions
During the development of this application, I encountered a lot of challenges, and some I resolved using the following platforms:

1. Creating a secure and user-friendly authentication system: Clerk provided various authentication methods, including passwords, email codes, OAuth, and more. It also supplied pre-built UI components for sign-in, sign-up, and user profile.

2. Enabling users to upload and share images: Uploadthing enables users to upload and share images within the app. It also provides image optimization and transformation features, such as resizing, cropping, and filtering. I integrated it and used its UI components to display the uploaded images in the app.

3. Enabling users to join and create voice rooms: LiveKit allows users to join and create voice rooms within the app. It also provides audio and video quality and reliability features, such as noise cancellation, echo cancellation, and bandwidth estimation. I integrated it and used its UI components to render the audio and video tracks in the app.

4. Handling Date Formatting: During the development of the chat feature, I encountered an issue with date formatting. The toLocaleString method in JavaScript was throwing a RangeError when passed a custom format string. The solution was to use the date-fns library, which allowed date formats.

I won't go into more detail about all the challanges but with perseverance and dedication, I was able to finish and build this app. I will continue to update and improve it.

## Deployment:

I deployed the app on Vercel. I configured the app to use environment variables and secrets to store the API keys and credentials. I also enabled the HTTPS and SSL encryption to ensure the security of the app and its users.

## Demo

Here's a small snippet of the app live and what it's capable off:


https://github.com/smngvlkz/Discord-clone-app/assets/125494888/98e3a02d-99e4-4689-a64b-f235111dc6db




I have also included screenshots too of some features it has

Light and Dark Themes
![Screenshot 2024-01-21 113046](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/d82185b2-3765-4198-b892-b4549bacef97)
![Screenshot 2024-01-21 113407](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/00ca4aff-412d-4a3e-a7f7-8a88ad4d2425)

Create and customize your server
![Screenshot 2024-01-21 113328](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/0fca9fbd-a7c4-47bf-8de6-7107e619176b)

More features below, like managing members, voice and video channels

![Screenshot 2024-01-21 113449](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/b011fa6a-2f9d-4e5f-9222-6bb6d4110c95)

![Screenshot 2024-01-21 113![Screenshot 2024-01-21 113854](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/8177f022-b07f-4cec-988c-cc7f60143158)
536](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/2681ef68-c1f0-46cb-ab8c-ccb785f44a10)
![Screenshot 2024-01-21 113704](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/fe687a0e-a7d0-4b85-a4f2-2710149847fc)
![Screenshot 2024-01-21 113752](https://github.com/smngvlkz/Discord-clone-app/assets/125494888/f8ac27a4-fa82-44bb-9804-9f0ec9c8ba84)

