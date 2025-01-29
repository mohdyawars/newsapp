# NewsApp

NewsApp is a React-based application that fetches and displays the latest news articles from around the world. It uses the [News API](https://newsapi.org/) to fetch top headlines and provides a user-friendly interface for browsing news.

## Features

-   Fetches top headlines using the News API.
-   Displays news articles with titles and descriptions.
-   Pagination to navigate through pages of news articles.
-   Responsive and easy-to-use interface.

## Technologies Used

-   **React**: For building the user interface.
-   **News API**: To fetch real-time news data.
-   **JavaScript**: For application logic.
-   **Bootstrap**: For styling the components.

## Prerequisites

To run this project locally, ensure you have the following installed:

-   Node.js (version 14 or above)
-   npm or yarn
-   A News API account to get an API key ([Sign up here](https://newsapi.org/)).

## Getting Started

### Clone the Repository

```
git clone https://github.com/your-username/newsapp.git
cd newsapp
```

### Install Dependencies

Install all the required packages using npm or yarn:
`npm install`

### Set Up Environment Variables

Create a `.env` file in the root directory and add your News API key:
`REACT_APP_NEWSAPP_API_KEY=your_api_key_here`

### Run the Application

Start the development server:
`npm start`

The app will be accessible at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── News.js       # Main component to display news
│   └── App.js        # Root component
├── App.css           # Styling for the app
├── index.js          # Application entry point
└── .env              # Environment variables (API key)
```

## How It Works

1. The app fetches top headlines from the News API using the `componentDidMount` lifecycle method.
2. Users can navigate through news pages using "Next" and "Previous" buttons.
3. Articles are displayed with titles and descriptions in a clean, responsive layout.

## Future Enhancements

-   Add a search bar for custom queries.
-   Implement dark mode for better user experience.

## Acknowledgments

-   [News API](https://newsapi.org/) for providing real-time news data.
