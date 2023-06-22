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

[![Medium Badge](https://img.shields.io/badge/@username-black?style=flat&logo=medium&logoColor=white&link=https://medium.com/@username)](https://medium.com/@username)
![GitHub Repo stars](https://img.shields.io/github/stars/oslabs-beta/Kubernet)
<img src='https://img.shields.io/badge/Version_1.0-8A2BE2' />

</div>

<div align='center'>

• [Introduction](#introduction)• [Getting started](#getting-started) • [Installation](#installation) • [Considerations](#considerations) • [Meet The Team](#meet-the-team) •

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

Once that file is created, open the terminal and type in

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
<img src="">

## Considerations

The application requires several default port configurations, so be sure not to populate these ports!

| Port | Application |
| :--: | :---------: |
| 9090 | Prometheus  |
| 8080 |  Kubernét   |
| 3000 |   Grafana   |
| 5050 |   Express   |

## Meet The Team

<table align="center">
<tr>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/paaoul"><img src="https://media.licdn.com/dms/image/D4D03AQGsXGGNmRwN4w/profile-displayphoto-shrink_800_800/0/1683587381944?e=1692835200&v=beta&t=OA8_QmJDgMuLtdvNS5_LjpXjCMCC-rzfH_ZFuA8Vs0g" width="250px" alt=""/><br /><sub><b>Paul Lee</b></sub></a><br /><a href="https://www.linkedin.com/in/paaoul/" title="LinkedIn">🐛</a> <a href="https://github.com/paaoul" title="Github">💻</a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/jimmytran48"><img src="https://media.licdn.com/dms/image/D4E03AQHlf4UL9tpWTQ/profile-displayphoto-shrink_800_800/0/1671754294266?e=1692835200&v=beta&t=--eZmOayGzLYQnxXANliwMILLnQvwbkhSGicjc1Mr8U" width="250px" alt=""/><br /><sub><b>Jimmy Tran</b></sub></a><br /><a href="https://www.linkedin.com/in/jimmytran48/" title="LinkedIn">🐛</a> <a href="https://github.com/JimmyTran48" title="Github">💻</a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/joseph-w-caballero"><img src="https://media.licdn.com/dms/image/D4E03AQFR2WCODxeL4Q/profile-displayphoto-shrink_800_800/0/1682083113503?e=1692835200&v=beta&t=UlH5xv8qSFHdbRcUs5KtU_oeX3FuQGoIjREDuTjzM5g" width="250px" alt=""/><br /><sub><b>Joseph Caballero</b></sub></a><br /><a href="https://www.linkedin.com/in/joseph-w-caballero/" title="LinkedIn">🐛</a> <a href="https://github.com/Joseph-Caballero" title="Github">💻</a></td>
<td align="center" width="18%"><a href="https://www.linkedin.com/in/praiseemmanuel"><img src="https://media.licdn.com/dms/image/D4E03AQFxDhdfFjcCZg/profile-displayphoto-shrink_800_800/0/1684706369581?e=1692835200&v=beta&t=pRSg0AleQWRsI2WHDqOlKLW5xX2EHLUMM1ofAvsymoQ" width="250px" alt=""/><br /><sub><b>Praise Emmanuel</b></sub></a><br /><a href="https://www.linkedin.com/in/praiseemmanuel/" title="LinkedIn">🐛</a> <a href="https://github.com/praisepelumi" title="Github">💻</a></td>
</tr>
</table>
