# Nest.Js Backend Application

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have Docker and Docker Compose installed on your system.

- [Get Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Usage

Clone this repository:

```bash
git clone https://github.com/DevNinja56/dmkelly1912-nestjs-task.git
```

Navigate to the project directory:

```bash
cd dmkelly1912-nestjs-task
```

Create Docker Network:

```bash
docker network create my_network
```

Open a terminal and use the following command to provide execution permissions to the scripts:

```bash
chmod +x deploy.sh stop.sh
```

Run the deploy script file:

```bash
./deploy.sh
```

Access the backend app at http://localhost:3001/api.

To stop the services, Run the stop script file:

```bash
./stop.sh
```

## Features

- **Nest.Js with TypeScript**: Empowers robust server-side development with a typed approach.
- **MongoDB**: Utilized for efficient database storage.
- **JWT Authentication with Passport.Js**: Ensures secure user authentication.
- **Swagger**: Incorporates Swagger documentation to streamline API exploration and understanding.
- **Rate Limiting**: A common technique to protect applications from brute-force attacks is rate-limiting.
- **Helmet**: Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
- **CORS**: Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain.
- **Modules**:
  - **Authentication Module**: Manages user authentication.
  - **User Module**: Provides functionalities related to users.
  - **Email Module**:Provides functionalities related to emails.
  - **Insurance Module**: Provides functionalities related to insurance policies.

## License

This project is licensed under the [MIT License](LICENSE).
