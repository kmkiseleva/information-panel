# Exchange Rates & Cryptocurrencies SPA

This is a Single Page Application (SPA) that displays real-time exchange rates for various currencies and information about cryptocurrencies. The app is built using React, TypeScript, MobX for state management, and styled with Ant Design components for a beautiful and responsive user interface.

## Features

- Display real-time exchange rates for various currencies (dollar, euro, lira, ruble, etc.).
- Show information about popular cryptocurrencies.
- Weather panel at the top displaying the weather details for the user's city determined by IP address.
- Periodic refresh of data to keep the information up-to-date.

## APIs Used

The app fetches exchange rate data from the Exchangerates API (https://exchangeratesapi.io/) and cryptocurrency data from a hypothetical API for demonstration purposes.

The weather panel determines the user's city by their IP address and fetches weather data using a suitable service to display real-time weather information.

Note: To make the app fully functional, ensure the server hosting the app has access to a suitable IP geolocation service to determine the user's city.

## Additional Notes

The weather panel displays weather information for the user's city determined by their IP address.
The exchange rates and cryptocurrency data update every minute to keep the information real-time.