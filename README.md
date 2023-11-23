# Realtime Chat Application

Welcome to the Realtime Chat Application, a modern chat platform that enables users to communicate in real-time. This project leverages various technologies, including MongoDB for data storage, Prisma for database management, Pusher for real-time chat functionality, NextAuth.js for authentication with GitHub, Google, and email/password, custom hooks for enhanced functionality, Cloudinary for storing images used in chat, and Tailwind CSS for responsive and appealing design. This README provides an overview of the project and instructions for setup.

## Live Demo

You can access the live demo of this Realtime Chat Application at [https://chat-app-theta-olive.vercel.app/](https://chat-app-theta-olive.vercel.app/).

## Features

- **Real-time Chat:** Engage in real-time conversations with other users.
- **Multi-Authentication:** Support for authentication via GitHub, Google, and email/password using NextAuth.js.
- **Image Sharing:** Users can share images in the chat, with Cloudinary for image storage.
- **Database Management:** MongoDB is used as the database, with Prisma as the query builder and data layer.
- **Custom Hooks:** Enhance functionality with custom React hooks.
- **Responsive Design:** Tailwind CSS ensures a responsive and visually appealing user interface.

## Technologies Used

- [MongoDB](https://www.mongodb.com/): A NoSQL database for efficient data storage.
- [Prisma](https://www.prisma.io/): A modern database toolkit for TypeScript and Node.js.
- [Pusher](https://pusher.com/): A hosted service for adding real-time functionality to applications.
- [NextAuth.js](https://next-auth.js.org/): Authentication library for Next.js applications.
- [Cloudinary](https://cloudinary.com/): Cloud-based image and video management service.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for designing modern web applications.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/joshihemal/chat_app.git
   ```

2. Change the directory to the project folder:

   ```bash
   cd chat_app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to set up the required configuration variables. Create a `.env` file in the root of your project and add the following variables:

```env
DATABASE_URL="**YOUR_DB_URL**"
NEXTAUTH_SECRET="**key_goes_here**"

GITHUB_ID=key_goes_here
GITHUB_SECRET=key_goes_here

GOOGLE_CLIENT_ID=key_goes_here
GOOGLE_CLIENT_SECRET=key_goes_here

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=key_goes_here

NEXT_PUBLIC_PUSHER_APP_KEY=key_goes_here
PUSHER_APP_ID=key_goes_here
PUSHER_SECRET=key_goes_here
```

## Usage

Once the configuration is set up, you can start the development server with the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

## Contributing

If you'd like to contribute to this project, please follow the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for exploring the Realtime Chat Application! If you have any questions or feedback, please feel free to open an issue or contact the project's maintainer.
