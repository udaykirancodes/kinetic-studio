# Kinetic Studio

Create beautiful kinetic typography videos from text — fast and simple.

![Kinetic Studio Demo](/public/light-1.png)

## Features

-   **✨ Text to Video**: Transform text scripts into cinematic kinetic typography. Each word becomes a frame.
-   **⏱️ Frame-by-Frame Control**: Precision editing for timing and choreography. Edit every word, adjust duration, and split phrases.
-   **🎨 Customization**: Customize each frame with your brand colors or create dramatic contrasts.
-   **⚡ Real-time Preview**: See your video come to life instantly with audio sync. No waiting, no rendering.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Video Generation**: [Remotion](https://www.remotion.dev/)
-   **Animation**: [Motion](https://motion.dev/) (formerly Framer Motion), `tailwindcss-animate`
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/udaykirancodes/kinetic-studio.git
    cd kinetic-studio
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

3.  Start the development server:

    ```bash
    pnpm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js App Router pages and layouts
-   `components/`: Reusable UI components
-   `components/landing/`: Components specific to the landing page
-   `lib/`: Utility functions and shared logic
-   `hooks/`: Custom React hooks

## License

MIT
