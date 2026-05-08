




pnpm dev
pnpm build

npx serve out


# Kill Running Servers
Kill by port (most common for dev servers):
lsof -ti:3000 | xargs kill -9

Replace 3000 with your port. Common dev ports: 3000 (Next/React), 5173 (Vite), 4321 (Astro), 8080.
Kill multiple ports at once:


lsof -ti:3000,4321,5173,8080 | xargs kill -9
Kill by process name:

pkill -f "node"      # all node processes
pkill -f "astro"     # astro dev server
pkill -f "vite"      # vite dev server

rm -rf .next && pnpm dev




# Build 

HostPoint: pnpm build:demo
AWS S3: pnpm build