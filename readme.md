# Cloud Resume Challenge: Azure Static Web App with Visitor Counter

This project is a part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/) and demonstrates a full-stack deployment on Azure. It includes a static resume hosted with **Azure Static Web Apps** and a serverless backend API for tracking visitor counts using **Azure Table Storage**.

## 🌟 Cloud Resume Challenge Objectives

1. **Static Website**:
   - A responsive HTML resume hosted on Azure Static Web Apps.

2. **Visitor Counter**:
   - Serverless backend API to track visitors.

3. **Infrastructure as Code**:
   - Fully automated deployment via GitHub Actions.

4. **CI/CD Integration**:
   - Push-to-deploy workflow for seamless updates.

## 🚀 Project Highlights

- **Frontend**: A responsive resume page designed with HTML, integrated with a visitor counter
- **Backend**: A serverless API using Azure Functions that records and retrieves visitor counts
- **Infrastructure**: Deployed using GitHub Actions for automated CI/CD

## 📂 Project Structure

### Frontend
The frontend is a static HTML page that displays the resume and integrates a visitor counter to enhance interactivity.

- **File**: [`frontend/index.html`](frontend/index.html)
- **Key Feature**: Fetches visitor count from the API and displays it dynamically in the footer

### API
The backend is an Azure Function that handles HTTP requests to manage visitor counts.

- **File**: [`api/src/functions/visitorCounter.js`](api/src/functions/visitorCounter.js)
- **Functionality**:
  - Retrieves the current visitor count
  - Increments the count and updates the Azure Table Storage

## 🛠️ Setup and Usage

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- [Azure Static Web Apps CLI](https://learn.microsoft.com/en-us/azure/static-web-apps/static-web-apps-cli-install) (optional for local testing)
- Azure Storage Account for Table Storage
- Azure Static Web Apps resource

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tbeller/resume.git
   cd resume
   ```
2. Install API dependencies:
   ```sh
   cd api
   npm install
   ```

### API Configuration
- **Azure Table Storage Connection String**: 
  - Configure the `STORAGE_CONNECTION_STRING` in `api/local.settings.json` for local testing

### Running Locally

1. Start the API from the api directory:
    ```sh
    func start
    ```
2. Open a new terminal and start the frontend:
    ```sh
    swa start ./frontend --api-devserver-url http://localhost:7071
    ```

### Deployment to Azure

This project uses **GitHub Actions** to deploy the frontend and API to Azure Static Web Apps.

1. **Push Code to GitHub**:
   The CI/CD pipeline defined in `azure-static-web-apps.yml` automatically deploys the app on push.

2. **Set Up Environment Variables**:
   - Add the `STORAGE_CONNECTION_STRING` to the Static Web App configuration in Azure Portal for production.

## ⚙️ Configuration

## 📝 License

This project is licensed under the [MIT License](LICENSE).

This project exemplifies the **Cloud Resume Challenge** principles, showcasing a combination of modern web development, serverless architecture, and CI/CD practices.
