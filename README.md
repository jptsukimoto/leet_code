# 🌟 Leet code challenges

## 📖 Description
This project contains solutions to various algorithmic challenges from [LeetCode](https://leetcode.com/). It is implemented in **Node.js** with **TypeScript** and uses **Jest** for testing each solution. The goal is to practice and improve problem-solving skills while maintaining clean, testable code.

---

## 🚀 Features
- 📝 Solutions to a variety of algorithmic challenges from LeetCode.
- 💻 Implemented in **Node.js** with **TypeScript** for type safety and better developer experience.
- 🛠️ Unit tests for each solution using **Jest** to ensure correctness.
- 📦 Organized and scalable project structure for easy navigation.
---

## 📋 Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
---

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jptsukimoto/leet_code.git
   cd leet_code
   ```
2. Install dependencies:
    - npm:
        ```bash
        npm install
        ```
        
    - or, if you prefer yarn:
        ```bash
        yarn install
        ```

## 📦 Usage
### Running a Specific Challenge

- Run the solution file:
    ```bash
    npm run start:challenge -- challenge-folder-name
    ```

### Running Tests
- Run all tests to verify the correctness of solutions:
    ```bash
    npm test
    ```
- Run tests for a specific challenge:
    ```bash
    npm run test:challenge -- challenge-folder-name
    ```

## 📂 Project Structure
```bash
    project/
    ├── src/
    │   ├── challenges/
    │   │   ├── two-sum/            # Example challenge folder
    │   │   │   ├── index.ts        # Solution implementation
    │   │   │   ├── index.test.ts   # Unit tests for the challenge
    │   │   ├── ...                 # Other challenges
    │   ├── utils/                  # Utility functions
    ├── run-challenge-test.js       # Script test:challenge
    ├── run-challenge.js            # Script start:challenge
    ├── jest.config.js              # Jest configuration
    ├── jest.setup.js               # Jest setup
    ├── tsconfig.json               # TypeScript configuration
    ├── package.json                # Project metadata and dependencies
```

## 📧 Contact
For any questions or suggestions, feel free to reach out:
- **Email**: joaopaulotsukimoto@gmail.com
- **GitHub**: jptsukimoto