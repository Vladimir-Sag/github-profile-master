# 🔍 GitHub Profile Explorer

![Thumbnail for the GitHub Profile coding challenge](./thumbnail.jpg)

## 🎯 Live Demo
🔗 [View Live Demo](https://github-profile-master-khaki.vercel.app/) 
📦 [GitHub Repository](https://github.com/Vladimir-Sag/github-profile-master)

---

## 📝 Project Overview

A powerful GitHub profile search application that allows users to explore GitHub profiles, view detailed statistics, and browse repositories. Built with React, it fetches real-time data from the GitHub REST API and provides an intuitive interface for discovering developer information.

**This project was completed as part of the [devChallenges.io](https://devchallenges.io/) frontend challenge.**

---

## ✨ Features

✅ Search GitHub users by username

✅ Display user profile information (avatar, name, bio)

✅ Show followers and following counts

✅ Display user location

✅ List repositories with details (name, description, stars, forks, language)

✅ Format large numbers with commas (e.g., 1,234 followers)

✅ Show relative update time (e.g., "updated 3 days ago")

✅ Responsive design for all screen sizes

✅ Error handling for non-existent users

✅ "View all repositories" button with show/hide functionality

✅ Clean, modern UI with gradient card design

---

## 🛠 Technologies Used

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19 |
| **Build Tool** | Vite |
| **Styling** | CSS (Flexbox, Grid, clamp, media queries) |
| **State Management** | React Hooks (useState, useEffect) |
| **Data Fetching** | Fetch API with AbortController |
| **Deployment** | Vercel |

---

## 📡 API Reference

Data is fetched from the GitHub REST API:

http
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos