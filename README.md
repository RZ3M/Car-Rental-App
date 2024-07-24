# Car Rental App

This is a cross-platform mobile application, built using the Ionic Framework with Angular. It allows users to easily make car rental reservations. Users can choose between different car types, enter reservation details, and receive a receipt for their reservation.

## Features

- **Car Selection**: Choose between Sedan or SUV.
- **Reservation Details**: Enter reservation date and number of hours.
- **Optional Add-ons**: Optionally add a car seat.
- **Reservation Confirmation**: Receive a receipt with a reservation number, price, and tax.

## Technologies Used

- **Ionic Framework**
- **Angular**
- **TypeScript**
- **HTML**
- **CSS**

## Video Demo

[![Watch the video](https://img.youtube.com/vi/rAv-IjdHAmY/0.jpg)](https://www.youtube.com/watch?v=rAv-IjdHAmY)

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/RZ3M/Car-Rental-App.git
    ```
2. **Navigate to the Project Directory**:
    ```sh
    cd Car-Rental-App
    ```
3. **Install Dependencies**:
    ```sh
    npm install
    ```

## Running the App

1. **For Web**:
    ```sh
    ionic serve
    ```

2. **For Android/iOS**:
    - **Add Platform**:
        ```sh
        ionic capacitor add android
        ionic capacitor add ios
        ```
    - **Build the App**:
        ```sh
        ionic build
        ```
    - **Sync with Capacitor**:
        ```sh
        ionic capacitor sync
        ```
    - **Open in IDE**:
        ```sh
        ionic capacitor open android
        ionic capacitor open ios
        ```

## Usage

1. **Launch the App**: Open the app on your device or in your browser.
2. **Select Car Type**: Choose either Sedan or SUV.
3. **Enter Reservation Details**:
    - Reservation Date
    - Number of Hours
4. **Add Optional Car Seat**: Choose to add a car seat if needed.
5. **Make Reservation**: Click the 'Make Reservation' button.
6. **View Receipt**: See the receipt with the following details:
    - Randomly generated reservation number
    - Price
    - Tax
