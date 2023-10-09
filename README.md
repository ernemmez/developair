# developair

👁️ This project is currently in the Proof of Concept phase.

It is a Command Line Interface (CLI) tool that I plan to develop using OpenAI's fine-tuning capabilities. This CLI tool will be released as an npm package. The purpose of this project is as follows:

You can run the CLI tool within the project you are working on, and it will train a project-specific model using the entire file structure, files, and code within the project. For example, you can use the following command:

 <developair --read-project>

Once the model is trained, it will be capable of refactoring code within the project on its own. You can use a command like this to make changes in your code files, specifying the necessary file path and providing a prompt: 

<developair --write-code "your prompt">

When this command is executed, the trained model will assist you in making the required changes to your code, taking into account the specified file paths and prompt. 
