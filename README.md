## Objective
Build a travel webapp based on Figma mockup.

## UI
[![Screenshot-2025-11-20-190230.png](https://i.postimg.cc/fT0yYZGy/Screenshot-2025-11-20-190230.png)](https://postimg.cc/4msXgCNR)

This project is built using the Figma mockup that has been provided to me.

## Tech Stack
This project is built using:

- **Next.js** – React-based framework for the frontend (I'm using App Router for this project)
- **Tailwind CSS** – CSS framework for styling (v4)
- **shadcn/ui** - An UI components library ([shadcn/ui](https://ui.shadcn.com/))
- **Lucide** - An icon library
- **Typescript**

## Setup
Install all of the dependencies:
`npm install`

## How to Run
To run the repository, open the terminal (I'm using VS Code) and type:
`npm run dev -- -p <port_number>` (port number is optional)

## Deployment
I'm using Vercel to deploy this project: [tripzy-travel.vercel.app](https://tripzy-travel.vercel.app/)

## Key Technical
**Tree Structure:**

[![Screenshot-2025-11-20-191754.png](https://i.postimg.cc/zD4Wsd50/Screenshot-2025-11-20-191754.png)](https://postimg.cc/hhbfx1Xd)
- **reuse**: contains reusable components
- **ui**: contains components from shadcn/ui
- **components**: contains components that are used in the pages

Some notable implementation:
- Dynamic routing with Next.js `useSearchParams`
- Custom form validation with alerts for empty inputs
- Managed state with `useState` React hook
- Built reusable React components using props for flexibility
