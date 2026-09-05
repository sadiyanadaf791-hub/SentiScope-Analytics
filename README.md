# SentiScope Analytics

## Customer Feedback Intelligence Platform

SentiScope Analytics is a full-stack sentiment analysis platform designed to help businesses analyze customer feedback, reviews, and survey responses. The system uses Machine Learning and Natural Language Processing (NLP) techniques to classify sentiments and provide actionable business insights through interactive dashboards and analytics.

---

## Features

### Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Sentiment Analysis

* Real-time Text Sentiment Analysis
* Confidence Score Prediction
* Positive, Negative & Neutral Classification
* NLP-based Processing

### CSV Bulk Analysis

* Upload Customer Reviews in CSV Format
* Bulk Sentiment Classification
* Dataset Statistics Generation

### Analytics Dashboard

* Total Reviews Overview
* Positive Reviews Count
* Negative Reviews Count
* Neutral Reviews Count
* Sentiment Distribution Analysis

### Data Visualization

* Pie Charts
* Bar Charts
* Trend Analysis
* Interactive Dashboard

### Report Management

* Store Analysis Results
* Review History Tracking
* Search and Filter Records

---

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router
* Recharts
* Framer Motion

### Backend

* FastAPI
* Python
* SQLAlchemy
* JWT Authentication

### Machine Learning

* Scikit-Learn
* TF-IDF Vectorizer
* Logistic Regression
* NLTK
* Pandas

### Database

* SQLite

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

```text
SentiScope-Analytics/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   ├── models/
│   ├── services/
│   ├── database/
│   ├── requirements.txt
│   └── runtime.txt
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sadiyanadaf791-hub/SentiScope-Analytics.git
cd SentiScope-Analytics
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend will run on:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## Machine Learning Workflow

1. User enters review text or uploads CSV.
2. Text preprocessing is performed.
3. TF-IDF Vectorization is applied.
4. Logistic Regression model predicts sentiment.
5. Confidence score is calculated.
6. Results are displayed through dashboard analytics.

---

## Future Enhancements

* AI-Powered Review Summaries
* Multi-language Sentiment Analysis
* Advanced NLP Models
* Real-time Social Media Monitoring
* Email Report Generation
* Cloud Database Integration

---

## Author

**Saadi Nadaf**

Final Year Engineering Student

Full Stack Developer | AI & ML Enthusiast

GitHub:
https://github.com/sadiyanadaf791-hub

---

## License

This project is developed for educational and internship purposes.
## Key Benefits

