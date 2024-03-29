<div align='center'><img width="autopx" src='./public/readme/K-Github-Logo.png'/>

---

![Kubernetes](https://img.shields.io/badge/Kubernetes-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E7532D?style=for-the-badge&logo=prometheus&logoColor=white)
![Prometheus](https://img.shields.io/badge/Grafana-F69920?style=for-the-badge&logo=grafana&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

[![Medium Badge](https://img.shields.io/badge/Kubernét-black?style=flat&logo=medium&logoColor=white&link=https://medium.com/@teamkubernet)](https://medium.com/@teamkubernet)
![GitHub Repo stars](https://img.shields.io/github/stars/oslabs-beta/Kubernet)
<img src='https://img.shields.io/badge/Version_1.0-8A2BE2' />

</div>

<div align='center'>

• [Introduction](#introduction)• [Getting started](#getting-started) • [Installation](#installation) • [Considerations](#considerations) • [Open Source](#open-source) •[Meet The Team](#meet-the-team) •

</div>

## Introduction

Kubernét is a user-friendly solution for effortlessly visualizing and monitoring your Kubernetes metrics in real-time. No coding or technical expertise needed! Through the intuitive interface, Kubernét simplifies the complex task of tracking and analyzing your K8s cluster metrics.

Before using our application, be sure to have your kubernetes cluster running and have installed helm.

- If you have not installed helm before, install helm from [here](https://helm.sh/docs/intro/install/).

## Getting Started

To get started with opening the web application, first pull this repo onto your machine. In order to have the application work, you will need to create an .env file to store your mongo-URI. within your .env file please type the following:

```js
MONGO_URI = '<mongodb URI>';
```

Once that file is created, open the terminal and install all the packages with

```bash
npm install
```

then type in

```bash
npm start
```

On your browser, localhost:8080 should appear, and you are now running our application!

If this is your first time using the application hit the **Get Started** button. If you have an account with the application already, hit the _already have an account_ button.

<img src="./public/readme/getstarted.gif" width="600px"/>

_Once you type in your username and password, the application will direct you to login. Make sure the username you are inputting is unique!_

## Installation

After typing in your credentials, our application will begin the process of install Prometheus and Grafana onto your Kubernetes cluster through helm and apply our custom .yaml files.

<img src="./public/readme/loading.gif" width="600px">

The dashboard will be saved onto your profile and be displayed on the application.

Your cluster metrics are now visible in real-time and update automatically! Feel free to move around the dashboard and customize the panel layout!
<img src="./public/readme/dashboard.gif">

## Considerations

The application requires several default port configurations, so be sure not to populate these ports!

| Port | Application |
| :--: | :---------: |
| 9090 | Prometheus  |
| 8080 |  Kubernét   |
| 3000 |   Grafana   |
| 5050 |   Express   |

## Open Source

As this is a free open source product, we would love having your feedback through opening issues, and contributions. If you would like to contribute to this open source project,

1. Clone our repo and create a new branch:

```bash
git checkout -b <Feature Branch Name>
```

2. Make changes, and run test

```bash
npm run test
```

You should see this:

<img src="./public/readme/tests.png" width="450px">

Be sure that your server is running at the time in order for the back-end tests to pass.

3. Submit a pull request with clear descriptions of changes made. One of our team members will look at it as soon as possible to approve your PR.

| Features                               | Status |
| :------------------------------------- | :----: |
| Automatic Prometheus Integration       |   ✅   |
| Automatic Grafana Integration          |   ✅   |
| Custom Grafana .yaml installation      |   ✅   |
| Custom Dashboard Creation              |   ✅   |
| User Data Encryption                   |   ✅   |
| Implement RTL + Jest front-end testing |   ✅   |
| Implement Supertest back-end testing   |   ✅   |
| Full Typescript conversion             |   ✅   |
| Standalone application                 |   ⏳   |
| Alerting System                        |   🙏🏻   |
| Individual node health visualizer      |   🙏🏻   |
| Cluster visualization                  |   🙏🏻   |

- ✅ = **Ready**
- ⏳ = In progress
- 🙏🏻 = _Looking for contributors_

## Meet The Team

<table align="center">
<tr>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/paaoul"><img src="https://media.licdn.com/dms/image/D4D03AQGsXGGNmRwN4w/profile-displayphoto-shrink_800_800/0/1683587381944?e=1692835200&v=beta&t=OA8_QmJDgMuLtdvNS5_LjpXjCMCC-rzfH_ZFuA8Vs0g" width="250px" alt=""/><br /><sub><b>Paul Lee</b></sub></a><br /><a href="https://www.linkedin.com/in/paaoul/" title="LinkedIn"><img src="./public/readme/linkedin_icon.png" width="20px"/></a> <a href="https://github.com/paaoul" title="Github"><img src="./public/readme/github_icon.png" width="20px"/></a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/jimmytran48"><img src="https://media.licdn.com/dms/image/D5603AQFnqvczuDYXpA/profile-displayphoto-shrink_800_800/0/1687726118528?e=1693440000&v=beta&t=COGwp02jxutp2EHy_TDTAAnGLBqalzjwxzGxcmBQ8pA" width="250px" alt=""/><br /><sub><b>Jimmy Tran</b></sub></a><br /><a href="https://www.linkedin.com/in/jimmytran48/" title="LinkedIn"><img src="./public/readme/linkedin_icon.png" width="20px"/></a> <a href="https://github.com/JimmyTran48" title="Github"><img src="./public/readme/github_icon.png" width="20px"/></a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/joseph-w-caballero"><img src="https://media.licdn.com/dms/image/D4E03AQFR2WCODxeL4Q/profile-displayphoto-shrink_800_800/0/1682083113503?e=1692835200&v=beta&t=UlH5xv8qSFHdbRcUs5KtU_oeX3FuQGoIjREDuTjzM5g" width="250px" alt=""/><br /><sub><b>Joseph Caballero</b></sub></a><br /><a href="https://www.linkedin.com/in/joseph-w-caballero/" title="LinkedIn"><img src="./public/readme/linkedin_icon.png" width="20px"/></a> <a href="https://github.com/Joseph-Caballero" title="Github"><img src="./public/readme/github_icon.png" width="20px"/></a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/praiseemmanuel"><img src="https://media.licdn.com/dms/image/D4E03AQF6CCb0G9sB4w/profile-displayphoto-shrink_800_800/0/1699124164347?e=1704931200&v=beta&t=NF9g8RlIqP7gE4G4027GLv3sGi_yulQ7M-E8Vg8uVwA" width="250px" alt=""/><br /><sub><b>Praise Emmanuel</b></sub></a><br /><a href="https://www.linkedin.com/in/praiseemmanuel/" title="LinkedIn"><img src="./public/readme/linkedin_icon.png" width="20px"/></a> <a href="https://github.com/praisepelumi" title="Github"><img src="./public/readme/github_icon.png" width="20px"/></a></td>
</tr>
</table>
