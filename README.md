# Task Whiz

Task Whiz is a fully responsive to-do app that helps users manage their tasks efficiently. Built with modern web technologies, it offers a seamless experience for creating, updating, and managing tasks.

## Features

- **Add New Tasks**: Users can add new tasks by specifying the title, description, and status of the task.
- **Filter Tasks**: Users can filter tasks based on their status (Todo, In Progress, Done, All).
- **Delete Tasks**: Users can delete tasks that are no longer needed.
- **Update Task Status**: Users can update the status of each task as they progress.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Component Library**: [shadcn](https://shadcn.dev/)
- **API**: Next.js API Routes
- **ORM**: [DrizzleORM](https://drizzle.team/)
- **Database**: [Neon](https://neon.tech/) (Serverless PostgreSQL)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/task-whiz.git
   cd task-whiz
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root of your project.
   - Add your database connection string and any other necessary environment variables:
     ```env
     NEON_DATABASE_URL=your-neon-database-url
     ```

4. Run the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Adding a New Task**: Click on the "Add Task" button and fill in the title, description, and select the status of the task.
2. **Filtering Tasks**: Use the filter options to view tasks based on their status (Todo, In Progress, Done, All).
3. **Updating Task Status**: Click on the task and change its status to reflect its current progress.
4. **Deleting a Task**: Click on the delete icon next to the task you want to remove.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers and contributors of [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/), [shadcn](https://shadcn.dev/), [DrizzleORM](https://drizzle.team/), and [Neon](https://neon.tech/) for their fantastic tools and libraries.
