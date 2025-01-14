I'll help you fix the "vite: command not found" error. Here are the steps to properly set up a Vite React project:

1. First, make sure node and npm are installed:
```bash
node -v
npm -v
```

2. If you already have a project, first install the dependencies:
```bash
npm install
```

3. Install React dependencies if not already installed:
```bash
npm install react react-dom
```

4. Now try running the development server:
```bash
npm run dev
```

If you're facing any error, try:
1. Delete the node_modules folder and package-lock.json
2. Run `npm cache clean --force`
3. Run `npm install` again
4. Try `npm run dev` again

The dev server should start and typically runs on http://localhost:5173/

Let me know if you're still experiencing issues!